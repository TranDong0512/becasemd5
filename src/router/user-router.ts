import {Router} from "express";
import userController from "../controller/user-controller";

export const userRouter = Router();
userRouter.get('', userController.getAll);
userRouter.post('/register', userController.register);
userRouter.delete('/:id',userController.delete);
userRouter.put('/:id',userController.edit);
userRouter.post('/login',userController.login);










