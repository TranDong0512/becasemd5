import {Request, Response} from "express";
import {BlogService} from "../service/blog-service";

class BlogController {
    private blogService: BlogService
    constructor() {
        this.blogService = new BlogService()
    }
    getAll = async (req: Request, res: Response) => {
        let blogs = await this.blogService.findAll();
        res.status(200).json(blogs)
    }

    findByName = async (req: Request, res: Response) => {
        let name = req.query.name
        let posts = await this.blogService.findByName(name);
        res.status(200).json(posts)
    }

    add = async (req: Request, res: Response) => {
        let blog = req.body
        let addBlog = await this.blogService.add(blog)
        res.status(200).json(addBlog)
    }
    delete = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let remove = await this.blogService.delete(id)
        res.status(200).json(remove)
    }
    edit = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let data = req.body;
        let edit = await this.blogService.edit({id: id}, data)
        res.status(200).json(edit)
    }
}
export default new BlogController()
















