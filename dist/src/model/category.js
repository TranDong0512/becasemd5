"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
let CategorySchema = new mongoose_1.Schema({
    name: String,
});
let Category = (0, mongoose_1.model)('Category', CategorySchema);
exports.Category = Category;
//# sourceMappingURL=category.js.map