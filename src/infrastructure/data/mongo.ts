import "dotenv/config"
import { connect } from "mongoose"

const NODE_ENV = process.env.NODE_ENV


async function dbConnect(): Promise<void> {
    const DB_MGS_URI = <string>process.env.NODE_ENV
    await connect(DB_MGS_URI)
    
}

export {dbConnect}

