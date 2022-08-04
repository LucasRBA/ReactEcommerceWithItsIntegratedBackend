import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController{
    async handle(request: Request, response: Response){
        const { email, message, rating } = request.body;

        const createMessageService = new CreateMessageService();

        const newMessage = await createMessageService.execute({ email, message, rating});

        return response.json(newMessage);
    }
}

export { CreateMessageController }