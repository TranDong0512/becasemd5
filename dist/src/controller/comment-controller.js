"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_service_1 = require("../service/comment-service");
class CommentController {
    constructor() {
        this.getAll = async (req, res) => {
            let comments = await this.commentService.findAll();
            res.status(200).json(comments);
        };
        this.add = async (req, res) => {
            let comment = req.body;
            let add = await this.commentService.add(comment);
            res.status(200).json(add);
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let remove = await this.commentService.delete(id);
            res.status(200).json(remove);
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let data = req.body;
            let edit = await this.commentService.edit({ id: id }, data);
            res.status(200).json(edit);
        };
        this.commentService = new comment_service_1.CommentService();
    }
}
exports.default = new CommentController();
//# sourceMappingURL=comment-controller.js.map