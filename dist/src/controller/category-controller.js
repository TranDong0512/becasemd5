"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
class CategoryController {
    constructor() {
        this.findAll = async (req, res) => {
            let category = await category_1.Category.find();
            return res.status(200).json(category);
        };
        this.addC = async (req, res) => {
            let category = req.body;
            category = await category_1.Category.create(category);
            return res.status(201).json(category);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map