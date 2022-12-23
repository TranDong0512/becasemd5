export declare class CommentService {
    private commentService;
    constructor();
    findAll: () => Promise<any>;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    edit: (id: any, data: any) => Promise<any>;
}
