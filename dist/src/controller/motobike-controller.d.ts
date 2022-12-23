import { Request, Response } from "express";
declare class MotobikeController {
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addMotobike: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    edit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findByIdMotobike: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAllByCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAllByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    sortQuantity: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    sortPrice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAboutPrice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAboutQuantity: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: MotobikeController;
export default _default;
