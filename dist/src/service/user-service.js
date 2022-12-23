"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
class UserService {
    constructor() {
        this.findAll = async () => {
            let users = await this.userService.find();
            return users;
        };
        this.findOneUserByUsername = async (username) => {
            let users = await this.userService.query(`select *
                                                  from users
                                                  where username = '${username}'`);
            return users;
        };
        this.register = async (data) => {
            let registers = await this.userService.save(data);
            return registers;
        };
        this.remove = async (id) => {
            let remove = await this.userService.delete(id);
            return remove;
        };
        this.edit = async (id, data) => {
            let update = await this.userService.update(id, data);
            return update;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connected Database');
            this.userService = connection.getRepository(user_1.User);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map