import { QueryResult } from "pg";
import { TokenModel } from "../../domain/models/tokenModel";
import { TokenRepository } from "../../domain/repositories/tokenRepository";
import { PostgresDB } from "./postgresql";

class TokenData implements TokenRepository {

    async getTokenById(tokenId: number): Promise<TokenModel | null> {
        throw new Error("Method not implemented.");
    }

    getToken = async () => {
        // Lógica para obtener un token por su ID desde la base de datos PostgreSQL
        // Retorna el token encontrado o null si no existe
        const response: QueryResult = await PostgresDB.query('select * from token')
        console.log("------ [A] ",response.rows)
      }
}


export { TokenData }
