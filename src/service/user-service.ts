import {AppDataSource} from "../data-source";
import {User} from "../model/user"

export class UserService {
    private userService: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected Database')
            this.userService = connection.getRepository(User)
        })
    }
    findAll = async () => {
        let users = await this.userService.find()
        return users
    }
    findOneUserByUsername = async (username) => {
        let users = await this.userService.query(`select *
                                                  from users
                                                  where username = '${username}'`)
        return users
    }
    register = async (data) => {
        let registers = await this.userService.save(data)
        return registers
    }
    remove = async (id) => {
        let remove = await this.userService.delete(id)
        return remove
    }
    edit = async (id,data) => {
        let update = await this.userService.update(id,data)
        return update
    }
}









