"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const motobike_1 = require("../model/motobike");
class MotobikeController {
    constructor() {
        this.findAll = async (req, res) => {
            let motobike = await motobike_1.Motobike.find().populate('category', 'name');
            return res.status(200).json(motobike);
        };
        this.addMotobike = async (req, res) => {
            let motobike = req.body;
            motobike = await motobike_1.Motobike.create(motobike);
            return res.status(201).json(motobike);
        };
        this.edit = async (req, res) => {
            let newMotobike = req.body;
            let id = req.params.id;
            await motobike_1.Motobike.updateOne({ _id: id }, {
                $set: newMotobike
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await motobike_1.Motobike.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
        this.findByIdMotobike = async (req, res) => {
            let id = req.params.id;
            let motobike = await motobike_1.Motobike.findOne({ _id: id });
            return res.status(200).json(motobike);
        };
        this.findAllByCategory = async (req, res) => {
            let id = req.params.id;
            let motobike = await motobike_1.Motobike.find({ category: id }).populate('category');
            return res.status(200).json(motobike);
        };
        this.findAllByName = async (req, res) => {
            let motor = req.body.name;
            let arrMotor = await motobike_1.Motobike.find({ 'name': { '$regex': motor } });
            return res.status(201).json(arrMotor);
        };
        this.sortQuantity = async (req, res) => {
            let motobike = await motobike_1.Motobike.find().sort({ 'quantity': -1 }).populate('category');
            return res.status(200).json(motobike);
        };
        this.sortPrice = async (req, res) => {
            let motobike = await motobike_1.Motobike.find().sort({ 'price': 1 }).populate('category');
            return res.status(200).json(motobike);
        };
        this.findAboutPrice = async (req, res) => {
            let price1 = req.body.price1;
            let price2 = req.body.price2;
            if (price1 > price2) {
                mess: "So 2 phai lon hon so 1!";
            }
            else {
                let motobike = await motobike_1.Motobike.find({ "price": { $gte: price1, $lte: price2 } });
                return res.status(200).json(motobike);
            }
        };
        this.findAboutQuantity = async (req, res) => {
            let quantity1 = req.body.quantity1;
            let quantity2 = req.body.quantity2;
            if (quantity1 > quantity2) {
                mess: "So 2 phai lon hon so 1!";
            }
            else {
                let motobike = await motobike_1.Motobike.find({ "price": { $gte: quantity1, $lte: quantity2 } });
                return res.status(200).json(motobike);
            }
        };
    }
}
exports.default = new MotobikeController();
//# sourceMappingURL=motobike-controller.js.map