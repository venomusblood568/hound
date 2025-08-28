import { checkService } from "../services/checkService";
import { monitors } from "../models/monitor";
import pLimit from "p-limit";

const limit = pLimit(10);
async function runCheck(){
    const result = await Promise.all(
        monitors.map(m => limit(() => checkService(m.url)))
    );
    console.log(result)
}

setInterval(runCheck, 60 * 1000);

// Run immediately on startup
runCheck()