import { Request, Response } from "express";
declare class LikeController {
    private likeService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<void>;
}
declare const _default: LikeController;
export default _default;
