"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const comment_controller_1 = __importDefault(require("../controller/comment-controller"));
const express_1 = require("express");
exports.commentRouter = (0, express_1.Router)();
exports.commentRouter.get('', comment_controller_1.default.getAll);
exports.commentRouter.post('', comment_controller_1.default.add);
exports.commentRouter.delete('/:id', comment_controller_1.default.delete);
exports.commentRouter.put('/:id', comment_controller_1.default.edit);
//# sourceMappingURL=comment-router.js.map