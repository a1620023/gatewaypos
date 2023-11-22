import { Request, Response } from "express";
import { CreateToken } from "../../../application/useCases/getTokenUseCase";
import { ErrorHandlerHTTP } from "../utils/errorHandler";

// class TokenController {

//     constructor(private readonly getTokenUseCase: GetTokenUseCase) {}

    const getToken = async ({ body }:Request, res:Response) => {
        console.log("ingresamos al get del controller ...(c1)")
        try {
            const responseToken = await CreateToken(body)
            console.log("in getToken .... ", responseToken)
            res.send(responseToken)
        } catch (error) {
            console.log("____...[E]",error)
            ErrorHandlerHTTP(res, 'Internal server error - getToken'+error)
        }
    }

    const getTokens = async (req:Request, res:Response) => {
        try {
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - getTokens'+error)
        }
    }
    
    const updateToken = async (req:Request, res:Response) => {
        console.log("ingresamos al update del controller ...(c1)")
        try {
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - updateToken'+error)
        }
    }
    
    const postToken = async (req:Request, res:Response) => {
        try {
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - postToken'+error)
        }
    }

    
    const deleteToken = async (req:Request, res:Response) => {
        try {
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - deleteTokens'+error)
        }
    }
// }

// export { TokenController }
export { getToken, getTokens, updateToken, postToken, deleteToken}
