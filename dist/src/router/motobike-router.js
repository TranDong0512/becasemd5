"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.motobikeRouter = void 0;
const express_1 = require("express");
const motobike_controller_1 = __importDefault(require("../controller/motobike-controller"));
exports.motobikeRouter = (0, express_1.Router)();
exports.motobikeRouter.get('', motobike_controller_1.default.findAll);
exports.motobikeRouter.post('', motobike_controller_1.default.addMotobike);
exports.motobikeRouter.put('/:id', motobike_controller_1.default.edit);
exports.motobikeRouter.delete('/:id', motobike_controller_1.default.delete);
exports.motobikeRouter.get('/:id', motobike_controller_1.default.findAllByCategory);
exports.motobikeRouter.get('/find-by-name', motobike_controller_1.default.findAllByName);
exports.motobikeRouter.get('/find/sort-quantity', motobike_controller_1.default.sortQuantity);
exports.motobikeRouter.get('/find/sort-price', motobike_controller_1.default.sortPrice);
exports.motobikeRouter.get('/find/about-price', motobike_controller_1.default.findAboutPrice);
exports.motobikeRouter.get('/find/about-quantity', motobike_controller_1.default.findAboutQuantity);
//# sourceMappingURL=motobike-router.js.map