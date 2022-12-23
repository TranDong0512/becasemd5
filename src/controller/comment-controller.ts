import {Request, Response} from "express";
import {CommentService} from "../service/comment-service";

class CommentController {
    private commentService: CommentService
    constructor() {
        this.commentService = new CommentService()
    }
    getAll = async (req: Request, res: Response) => {
        let comments = await this.commentService.findAll();
        res.status(200).json(comments)
    }
    add = async (req: Request, res: Response) => {
        let comment = req.body
        let add = await this.commentService.add(comment)
        res.status(200).json(add)
    }
    delete = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let remove = await this.commentService.delete(id)
        res.status(200).json(remove)
    }
    edit = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let data = req.body;
        let edit = await this.commentService.edit({id: id}, data)
        res.status(200).json(edit)
    }
}
export default new CommentController()