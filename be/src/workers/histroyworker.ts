import cron from "node-cron";
import Log from "../models/logSchema";
import History from "../models/historySchema";
import Monitor from "../models/monitorSchema";

function startHistoryJob() {
  cron.schedule("0 1 * * *", async () => {
    console.log(`Running daily history aggregation..`);
    try {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const dateStr = yesterday.toISOString().slice(0, 10); // YYYY-MM-DD

      // Get all active monitors
      const monitors = await Monitor.find({ active: true });

      for (const monitor of monitors) {
        // Day boundaries
        const startOfDay = new Date(dateStr + "T00:00:00.000Z");
        const endOfDay = new Date(dateStr + "T23:59:59.999Z");

        // Fetch all logs for this monitor from yesterday
        const logs = await Log.find({
          monitorId: monitor._id,
          checkAt: { $gte: startOfDay, $lte: endOfDay },
        }).sort({ checkAt: 1 }); // ensure order

        if (logs.length === 0) {
          console.log(`No logs for ${monitor.url} on ${dateStr}`);
          continue;
        }

        const totalPings = logs.length;
        const downtimeCount = logs.filter((l) => l.status === "Down").length;
        const uptimePercent = ((totalPings - downtimeCount) / totalPings) * 100;

        const responseTimes = logs.map((l) => l.responseTime);
        const avgResponseTime =
          responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
        const minResponseTime = Math.min(...responseTimes);
        const maxResponseTime = Math.max(...responseTimes);

        const firstCheck = logs[0].checkAt;
        const lastCheck = logs[logs.length - 1].checkAt;

        // Incident duration calculation
        const incidentDurations: number[] = [];
        let currentIncidentStart: Date | null = null;

        logs.forEach((log, i) => {
          if (log.status === "Down" && !currentIncidentStart) {
            currentIncidentStart = log.checkAt;
          }
          if (log.status === "Up" && currentIncidentStart) {
            const duration =
              (log.checkAt.getTime() - currentIncidentStart.getTime()) / 1000;
            incidentDurations.push(duration);
            currentIncidentStart = null;
          }
        });

        // If still down at end of day, close incident artificially
        if (currentIncidentStart) {
          const duration =
            (endOfDay.getTime() - (currentIncidentStart as Date).getTime()) / 1000;
          incidentDurations.push(duration);
        }

        await History.findOneAndUpdate(
          { monitorId: monitor._id, date: dateStr },
          {
            monitorId: monitor._id,
            date: dateStr,
            totalPings,
            downtimeCount,
            uptimePercent,
            avgResponseTime,
            minResponseTime,
            maxResponseTime,
            firstCheck,
            lastCheck,
            incidentDurations,
          },
          { upsert: true, new: true }
        );

        // Clean up yesterday’s logs
        await Log.deleteMany({
          monitorId: monitor._id,
          checkAt: { $gte: startOfDay, $lte: endOfDay },
        });

        console.log(`History saved for ${monitor.url} (${dateStr})`);
      }
    } catch (error) {
      console.error("History Job Failed:", error);
    }
  });
}

export default startHistoryJob;
