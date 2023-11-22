import "dotenv/config"
import { connect } from "mongoose"



async function dbConnect(): Promise<void> {
    const DB_MGS_URI = <string>process.env.DB_MGS_URI
    console.log("la ruta es ..... => ",DB_MGS_URI)
    await connect(DB_MGS_URI)
    
}

export {dbConnect}

