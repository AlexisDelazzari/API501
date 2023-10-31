import {Router, Request, Response} from 'express';

class MainRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/', this.mainRoute.bind(this));
    }

    private async mainRoute(req: Request, res: Response): Promise<void> {
            res.status(200).json({message: 'Api marche'});
    }
}

export const mainRouterInstance = new MainRouter()
export const mainRouter = mainRouterInstance.router;
