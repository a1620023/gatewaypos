import { Request, Response } from "express"
import { QueryResult } from "pg"
import { PostgresDB } from "../../infrastructure/data/postgresql"

const getToken =async () => {//(req:Request, res: Response ) => {
    const response: QueryResult = await PostgresDB.query('select * from token')
    //res.status(200).json(response.rows)
    console.log("dddd",response.rows)
}

export {getToken}