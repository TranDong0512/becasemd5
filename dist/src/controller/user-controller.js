"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user-service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let user = await this.userService.findAll();
            res.status(200).json(user);
        };
        this.register = async (req, res) => {
            let user = req.body;
            const userFind = await this.userService.findOneUserByUsername(user.username);
            if (userFind.length !== 0) {
                return res.json({
                    mess: "Tài khoản đã tồn tại !!",
                    checkRegister: false
                });
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                await this.userService.register(user);
                return res.status(200).json({
                    mess: 'Đăng ký thành công !!',
                    checkRegister: true
                });
            }
        };
        this.login = async (req, res) => {
            let user = req.body;
            let userFind = await this.userService.findOneUserByUsername(user.username);
            if (userFind.length == 0) {
                return res.status(200).json({
                    massage: 'User is not exist !'
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFind[0].password);
                if (!comparePassword) {
                    return res.json({
                        massage: 'Password is wrong!'
                    });
                }
                else {
                    let payload = {
                        id: userFind[0].id,
                        username: userFind[0].username
                    };
                    let secret = 'quan';
                    let token = await jsonwebtoken_1.default.sign(payload, secret, {
                        expiresIn: 36000
                    });
                    return res.json({
                        token: token,
                        user: userFind[0]
                    });
                }
            }
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let remove = await this.userService.remove(id);
            res.status(200).json(remove);
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let data = req.body;
            let edit = await this.userService.edit({ id: id }, data);
            res.status(200).json(edit);
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map