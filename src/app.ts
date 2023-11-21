import "dotenv/config"
import express from "express";
import cors from "cors"

import {router} from "./infrastructure/interfaces/routes"
import { PostgresDB } from "./infrastructure/data/postgresql"
import { QueryResult } from "pg";
import { getToken } from "./domain/service/token";

const PORT = process.env.PORT || 3001



const app = express()
app.use(cors({
    origin: ['http://localhost:4200']
}))
app.use(router)
PostgresDB.connect()
getToken()
app.listen(PORT, ()=>console.log(`Desplegando por el puerto ${PORT}`))



