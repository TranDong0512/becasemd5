"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeRouter = void 0;
const like_controller_1 = __importDefault(require("../controller/like-controller"));
const express_1 = require("express");
exports.likeRouter = (0, express_1.Router)();
exports.likeRouter.get('', like_controller_1.default.getAll);
exports.likeRouter.post('', like_controller_1.default.add);
exports.likeRouter.delete('/:id', like_controller_1.default.delete);
exports.likeRouter.put('/:id', like_controller_1.default.edit);
//# sourceMappingURL=like-router.js.map