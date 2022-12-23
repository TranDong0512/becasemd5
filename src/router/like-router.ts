import LikeController from "../controller/like-controller"
import {Router} from "express";

export const likeRouter = Router()
// blogRouter.use(auth);
likeRouter.get('', LikeController.getAll);
likeRouter.post('', LikeController.add);
likeRouter.delete('/:id', LikeController.delete);
likeRouter.put('/:id', LikeController.edit);