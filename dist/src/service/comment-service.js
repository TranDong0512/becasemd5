"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const data_source_1 = require("../data-source");
const comment_1 = require("../model/comment");
class CommentService {
    constructor() {
        this.findAll = async () => {
            let comment = await this.commentService.find();
            return comment;
        };
        this.add = async (data) => {
            let addComment = await this.commentService.save(data);
            return addComment;
        };
        this.delete = async (id) => {
            let deleteComment = await this.commentService.delete(id);
            return deleteComment;
        };
        this.edit = async (id, data) => {
            let editComment = await this.commentService.update(id, data);
            return editComment;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connected DB');
            this.commentService = connection.getRepository(comment_1.Comment);
        });
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=comment-service.js.map