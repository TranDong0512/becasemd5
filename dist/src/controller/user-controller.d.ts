import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
