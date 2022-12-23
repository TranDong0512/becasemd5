export declare class UserService {
    private userService;
    constructor();
    findAll: () => Promise<any>;
    findOneUserByUsername: (username: any) => Promise<any>;
    register: (data: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    edit: (id: any, data: any) => Promise<any>;
}
