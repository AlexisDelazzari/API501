import { UserRepository} from "../database/repository/User.repository";
import { Request, Response, Router } from 'express';

export class UserController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getUsers.bind(this));
        this.router.get('/:id', this.getUserById.bind(this));
        this
    }

    async getUsers(req: Request, res: Response) {
        const users = await UserRepository.find();
        return res.json(users);
    }

    async getUserById(req: Request, res: Response) {
        const paramId = parseInt(req.params.id);
        const user = await UserRepository.findOne(
            { where: { id: paramId } }
        );
        return res.json(user);
    }
}



