import { Request, Response } from "express";
import { GetTokenUseCase } from "../../../application/useCases/getTokenUseCase";

class TokenController {

    constructor(private readonly getTokenUseCase: GetTokenUseCase) {}

    async getToken(req:Request, res:Response) {
        const tokenId = Number(req.params.id);

        try {
            const token = await this.getTokenUseCase.execute(tokenId)
            if (!token) {
                return res.status(404).json({ message: 'Token not found' })
            }
            return res.status(200).json(token)
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}

export { TokenController }
