import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";

export class CommentService {
    private commentService : any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connected DB')
            this.commentService = connection.getRepository(Comment)
        })
    }
    findAll = async () => {
        let comment = await this.commentService.find()
        return comment
    }
    add = async (data)=>{
        let addComment = await this.commentService.save(data)
        return addComment
    }
    delete = async (id) => {
        let deleteComment = await this.commentService.delete(id)
        return deleteComment
    }
    edit = async (id, data) => {
        let editComment = await this.commentService.update(id, data)
        return editComment
    }
}