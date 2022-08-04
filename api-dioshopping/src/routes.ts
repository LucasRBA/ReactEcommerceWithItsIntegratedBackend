import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import { ListProductsController } from "./controllers/ListProductsController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const listProductsController = new ListProductsController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/message', listMessageController.hanle)
router.post('/message', createMessageController.handle)

router.get('/products', listProductsController.handle)

export { router }