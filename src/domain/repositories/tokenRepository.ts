import { TokenModel } from "../models/tokenModel";


interface TokenRepository {
    getTokenById(tokenId: number): Promise<TokenModel | null>
}

export {TokenRepository}