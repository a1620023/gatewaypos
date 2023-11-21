import {Request, Response, Router } from "express";
import { GetTokenUseCase } from "../../../application/useCases/getTokenUseCase";
import { TokenData } from "../../data/tokenData";
import { TokenController } from "../controllers/tokenController";

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

router.get("/", (req:Request, res:Response) => {
    res.send({
        data: "modelos"
    })
})


router.get("/:id", (req:Request, res:Response) => {
    res.send({
        data: "modelos"
    })
})


router.post("/", (req:Request, res:Response) => {
    res.send({
        data: "modelos"
    })
})


router.put("/:id", (req:Request, res:Response) => {
    res.send({
        data: "modelos"
    })
})


router.delete("/:id", (req:Request, res:Response) => {
    res.send({
        data: "modelos"
    })
})


export {router}

