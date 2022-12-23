"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const data_source_1 = require("../data-source");
const blog_1 = require("../model/blog");
class BlogService {
    constructor() {
        this.findAll = async () => {
            let blogs = await this.blogService.query(`select b.id, b.tittle, b.status, b.time, b.image, u.username, u.avatar, b.content from blogs  b join users  u on b.idUser = u.id`);
            return blogs;
        };
        this.findByName = async (tittle) => {
            let name = await this.blogService.query(`select b.id, b.tittle, b.status, b.time, u.username, b.image,u.avatar, b.content from blogs  b join users  u on b.idUser = u.id where tittle like '%${tittle}%'`);
            return name;
        };
        this.add = async (data) => {
            let addBlog = await this.blogService.save(data);
            return addBlog;
        };
        this.delete = async (id) => {
            let deleteBlog = await this.blogService.delete(id);
            return deleteBlog;
        };
        this.edit = async (id, data) => {
            let editBlog = await this.blogService.update(id, data);
            return editBlog;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connected DB');
            this.blogService = connection.getRepository(blog_1.Blog);
        });
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=blog-service.js.map