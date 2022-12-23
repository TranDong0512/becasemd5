"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const like_service_1 = require("../service/like-service");
class LikeController {
    constructor() {
        this.getAll = async (req, res) => {
            let comments = await this.likeService.findAll();
            res.status(200).json(comments);
        };
        this.add = async (req, res) => {
            let like = req.body;
            let add = await this.likeService.add(like);
            res.status(200).json(add);
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let remove = await this.likeService.delete(id);
            res.status(200).json(remove);
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let data = req.body;
            let edit = await this.likeService.edit({ id: id }, data);
            res.status(200).json(edit);
        };
        this.likeService = new like_service_1.LikeService();
    }
}
exports.default = new LikeController();
//# sourceMappingURL=like-controller.js.map