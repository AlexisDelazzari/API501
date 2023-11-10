import { Request, Response, Router } from 'express';
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
        return res.json({message: "getCheck"});
    }

    async getCheckById(req: Request, res: Response) {
        return res.json({message: "getCheckById"+req.params.id});
    }

    async postCheck(req: Request, res: Response) {
        console.log(req.body);
        return res.json({message: "postCheck" });
    }
}