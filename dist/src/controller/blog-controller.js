"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_service_1 = require("../service/blog-service");
class BlogController {
    constructor() {
        this.getAll = async (req, res) => {
            let blogs = await this.blogService.findAll();
            res.status(200).json(blogs);
        };
        this.findByName = async (req, res) => {
            let name = req.query.name;
            let posts = await this.blogService.findByName(name);
            res.status(200).json(posts);
        };
        this.add = async (req, res) => {
            let blog = req.body;
            let addBlog = await this.blogService.add(blog);
            res.status(200).json(addBlog);
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let remove = await this.blogService.delete(id);
            res.status(200).json(remove);
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let data = req.body;
            let edit = await this.blogService.edit({ id: id }, data);
            res.status(200).json(edit);
        };
        this.blogService = new blog_service_1.BlogService();
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blog-controller.js.map