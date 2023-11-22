import { Request, Response } from "express";
import { InsertToken, GetTokens } from "../../../application/useCases/getTokenUseCase";
import { ErrorHandlerHTTP } from "../utils/errorHandler";

// class TokenController {

//     constructor(private readonly getTokenUseCase: GetTokenUseCase) {}

    const InsertTokenItem = async ({ body }:Request, res:Response) => {
        console.log("ingresamos al get del controller InsertTokenItem ...(I1)")
        try {
            const responseToken = await InsertToken(body)
            console.log("in getToken .... ", responseToken)
            res.send(responseToken)
        } catch (error) {
            console.log("____...[E]",error)
            ErrorHandlerHTTP(res, 'Internal server error - getToken'+error)
        }
    }

    const GetTokenItems = async (req:Request, res:Response) => {
        console.log("ingresamos al get del controller GetTokenItems ...(G1)")
        try {
            const responseToken = await GetTokens()
            console.log("in GetTokenItems .... ", responseToken)
            res.send(responseToken)
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
export { InsertTokenItem, GetTokenItems, updateToken, postToken, deleteToken}
