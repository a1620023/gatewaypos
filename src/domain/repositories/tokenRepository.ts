import { TokenModel } from "../models/cardModel";


interface TokenRepository {
    getTokenById(tokenId: number): Promise<TokenModel | null>
}

export {TokenRepository}