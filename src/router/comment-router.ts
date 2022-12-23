import CommentController from "../controller/comment-controller"
import {Router} from "express";

export const commentRouter = Router()
// blogRouter.use(auth);
commentRouter.get('', CommentController.getAll);
commentRouter.post('', CommentController.add);
commentRouter.delete('/:id', CommentController.delete);
commentRouter.put('/:id', CommentController.edit);