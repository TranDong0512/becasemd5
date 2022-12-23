import { Request, Response } from "express";
declare class CommentController {
    private commentService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CommentController;
export default _default;
