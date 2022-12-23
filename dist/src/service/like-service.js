"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const data_source_1 = require("../data-source");
const like_1 = require("../model/like");
class LikeService {
    constructor() {
        this.findAll = async () => {
            let like = await this.likeService.find();
            return like;
        };
        this.add = async (data) => {
            let add = await this.likeService.save(data);
            return add;
        };
        this.delete = async (id) => {
            let deleteL = await this.likeService.delete(id);
            return deleteL;
        };
        this.edit = async (id, data) => {
            let edit = await this.likeService.update(id, data);
            return edit;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connected DB');
            this.likeService = connection.getRepository(like_1.Like);
        });
    }
}
exports.LikeService = LikeService;
//# sourceMappingURL=like-service.js.map