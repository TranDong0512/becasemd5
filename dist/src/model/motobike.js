"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motobike = void 0;
const mongoose_1 = require("mongoose");
let MotobikeSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    description: String,
    quantity: Number,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    }
});
let Motobike = (0, mongoose_1.model)('Motobike', MotobikeSchema);
exports.Motobike = Motobike;
//# sourceMappingURL=motobike.js.map