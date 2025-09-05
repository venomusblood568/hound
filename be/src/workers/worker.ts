import pLimit from "p-limit";
import Monitor from "../models/monitorSchema";
import Log from "../models/logSchema"; // Use capital Log for model
import { checkService } from "../services/checkService";

const limit = pLimit(10);

export async function runCheck() {
  try {
    // active:true → only monitors user has enabled
    const monitors = await Monitor.find({ active: true });

    if (!monitors.length) {
      console.log("No active monitors found.");
      return;
    }

    console.log(`Running checks for ${monitors.length} monitors...`);

    const results = await Promise.all(
      monitors.map((m) =>
        limit(async () => {
          const check = await checkService(m.url);

          await Log.create({
            monitorId: m._id,
            userId: m.userId,
            url: m.url,
            status: check.status.toLowerCase() === "up" ? "Up" : "Down",
            statusCode: check.status_code ?? null,
            responseTime: check.response_time,
            errorMessage: check.error ?? null,
            checkAt: new Date(check.checked_at),
          });


          return { monitorId: m._id, ...check };

        })
      )
    );

    console.log("Checks completed:", results);
  } catch (error) {
    console.error("Worker error:", error);
  }
}

export function scheduleChecks(){
    setInterval(runCheck, 60 * 1000);
}