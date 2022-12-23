import {AppDataSource} from "../data-source";
import {Like} from "../model/like";

export class LikeService {
    private likeService : any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected DB')
            this.likeService = connection.getRepository(Like)
        })
    }
    findAll = async () => {
        let like = await this.likeService.find()
        return like
    }
    add = async (data)=>{
        let add = await this.likeService.save(data)
        return add
    }
    delete = async (id) => {
        let deleteL = await this.likeService.delete(id)
        return deleteL
    }
    edit = async (id, data) => {
        let edit = await this.likeService.update(id, data)
        return edit
    }
}
