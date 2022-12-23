import { Request, Response } from "express";
declare class BlogController {
    private blogService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    findByName: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BlogController;
export default _default;
