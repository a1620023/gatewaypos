import { TokenModel } from "../../domain/models/tokenModel";
import { Token } from "../../domain/models/token.interface";
import { TokenRepository } from "../../domain/repositories/tokenRepository";
import { GenerateRandomToken } from "./randomTokenUseCase";

const InsertToken =async (token:Token) => {
  const getToken = GenerateRandomToken(token, "123")
  console.log("ver token generado a partir del body ...",getToken)
  const responseCreate = await TokenModel.create(getToken)
  console.log("ver en responsecreate...", responseCreate)
  return responseCreate
}

const GetTokens =async () => {
  const responseGet = await TokenModel.find({})
  console.log("GetTokens: ver en responseGet...", responseGet)
  return responseGet
}

export { InsertToken, GetTokens }
