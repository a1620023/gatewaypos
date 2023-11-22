import { TokenModel } from "../../domain/models/tokenModel";
import { Token } from "../../domain/models/token.interface";
import { TokenRepository } from "../../domain/repositories/tokenRepository";

const InsertToken =async (token:Token) => {
  const getToken = ""
  const responseCreate = await TokenModel.create(token)
  console.log("ver en responsecreate...", responseCreate)
  return responseCreate
}

const GetTokens =async () => {
  const responseGet = await TokenModel.find({})
  console.log("GetTokens: ver en responseGet...", responseGet)
  return responseGet
}

export { InsertToken, GetTokens }
