
import { Schema, Types, model, Model } from "mongoose";
import { Token } from "./token.interface";

const TokenSchema = new Schema<Token>(
    {
        _id: {
            type: String
        },
        token: {
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const TokenModel = model("token", TokenSchema)

export { TokenModel}
