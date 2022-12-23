import {Request, Response} from "express";
import {LikeService} from "../service/like-service";

class LikeController {
    private likeService: LikeService
    constructor() {
        this.likeService = new LikeService()
    }
    getAll = async (req: Request, res: Response) => {
        let comments = await this.likeService.findAll();
        res.status(200).json(comments)
    }
    add = async (req: Request, res: Response) => {
        let like = req.body
        let add = await this.likeService.add(like)
        res.status(200).json(add)
    }
    delete = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let remove = await this.likeService.delete(id)
        res.status(200).json(remove)
    }
    edit = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let data = req.body;
        let edit = await this.likeService.edit({id: id}, data)
        res.status(200).json(edit)
    }
}
export default new LikeController()