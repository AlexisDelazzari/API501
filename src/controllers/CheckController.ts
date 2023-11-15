import { Request, Response, Router } from 'express';
import HttpCode from '../config/http-code';
export class CheckController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getCheck.bind(this));
        this.router.get('/:id', this.getCheckById.bind(this));
        this.router.post('/', this.postCheck.bind(this));
    }

    async getCheck(req: Request, res: Response) {
        try {
            return res.status(HttpCode.OK).json({message: "getCheck"});
        } catch (e) {
            return res.status(HttpCode.INTERNAL_ERROR).json({message: "getCheck"});
        }
    }

    async getCheckById(req: Request, res: Response) {
        try {
            return res.status(HttpCode.OK).json({message: "getCheckById"+req.params.id});
        } catch (e) {
            return res.status(HttpCode.INTERNAL_ERROR).json({message: "getCheckById"});
        }
    }

    async postCheck(req: Request, res: Response) {
        try {
            return res.status(HttpCode.OK).json({message: "postCheck"+req.body});
        } catch (e) {
            return res.status(HttpCode.INTERNAL_ERROR).json({message: "postCheck"});
        }
    }
}