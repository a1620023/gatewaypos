import {Request, Response, Router } from "express";
import { getToken, getTokens, postToken, updateToken } from "../controllers/tokenController";

const router = Router()


// function tokenRoutes(): Router {
// const tokenRepository = new TokenData()
// const getTokenUseCase = new GetTokenUseCase(tokenRepository)
// const controller = new TokenController(getTokenUseCase)
// console.log("....[1]", controller)

// router.get("/", (req:Request, res:Response) => controller.getToken(req, res))
// console.log(router)
// return router
// }

router.get("/", getTokens)


router.get("/:id", getToken)


router.post("/", postToken)


router.put("/:id", updateToken)


router.delete("/:id", (req:Request, res:Response) => {
    res.send({
        data: "modelos"
    })
})


export {router}

