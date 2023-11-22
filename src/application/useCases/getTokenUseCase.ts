import { TokenModel } from "../../domain/models/tokenModel";
import { Token } from "../../domain/models/token.interface";
import { TokenRepository } from "../../domain/repositories/tokenRepository";

const CreateToken =async (token:Token) => {
  const responseCreate = await TokenModel.create(token)
  return responseCreate
}

export { CreateToken }
