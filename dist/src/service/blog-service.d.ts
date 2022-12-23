export declare class BlogService {
    private blogService;
    constructor();
    findAll: () => Promise<any>;
    findByName: (tittle: any) => Promise<any>;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    edit: (id: any, data: any) => Promise<any>;
}
