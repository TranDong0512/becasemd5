import {Router} from "express";
import {userRouter} from "./user-router";
import {blogRouter} from "./blog-router";
import {commentRouter} from "./comment-router";
import {likeRouter} from "./like-router";


export const router = Router();
router.use('/users', userRouter);
router.use('/blogs', blogRouter);
router.use('/comments', commentRouter);
router.use('/likes', likeRouter);