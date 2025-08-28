import axios from "axios";

export async function checkService(url:string){
    const start = Date.now()
    try {
        const response = await axios.get(url,{timeout:5000})
        const responseTime = Date.now() - start;
        return{
            url,
            status:"up",
            status_code: response.status,
            response_time: responseTime,
            checked_at: new Date().toISOString()
        };
    } catch (error:any) {
       const responseTime = Date.now() - start;
       return {
         url,
         status: "down",
         status_code: error.response?.status || null,
         response_time: responseTime,
         error: error.message,
         checked_at: new Date().toISOString(),
       }; 
    }
}
