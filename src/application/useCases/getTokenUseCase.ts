import { TokenModel } from "../../domain/models/tokenModel";
import { TokenRepository } from "../../domain/repositories/tokenRepository";

class GetTokenUseCase {
    constructor( private readonly tokenRepository: TokenRepository) {}

    async execute(tokenId: number): Promise<TokenModel | null> {
        return this.tokenRepository.getTokenById(tokenId);
      }
}

export { GetTokenUseCase }
