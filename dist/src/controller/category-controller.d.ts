import { Request, Response } from "express";
declare class CategoryController {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addC: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CategoryController;
export default _default;
