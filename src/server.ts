import { UserController } from './controllers/UserController';
import { CheckController} from "./controllers/CheckController";
import * as express from "express";

const app = express();
app.use(express.json());
const userController = new UserController();
const checkController = new CheckController();

app.use('/users', userController.router);
app.use('/check', checkController.router);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
