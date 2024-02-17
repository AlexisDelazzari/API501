import { Request, Response, Router } from 'express';
import HttpCode from '../../config/http-code';
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import {HeroRepository} from "../../database/repository/Hero.repository";

export class AuthController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/checkToken', this.checkToken.bind(this));
        this.router.post('/login', this.login.bind(this));
        this.router.post('/register', this.register.bind(this));
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await HeroRepository.findOne({ where: { idConnexion: email } });
            if (!user) {
                return res.status(HttpCode.NOT_FOUND).json({ message: "Utilisateur non trouvé" });
            }
            const passwordIsValid = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);
            if (passwordIsValid !== password) {
                return res.status(HttpCode.UNAUTHORIZED).json({ message: "Mot de passe incorrect" });
            }
            const token = jwt.sign(
                { id: user.uuid, email: user.idConnexion },
                process.env.SECRET_KEY,
                { expiresIn: "1h" }
            );
            res.status(200).json({ token });
        } catch (error) {
            res.status(HttpCode.INTERNAL_ERROR).json({ message: "Connexion échouée" });
        }
    }

    async register(req: Request, res: Response) {
        try {
            const { email, password,age,sexe } = req.body;
            const user = await HeroRepository.findOne({ where: { idConnexion: email } });
            if (user) {
                return res.status(HttpCode.UNPROCESSABLE_ENTITY).json({ message: "Utilisateur déjà existant" });
            }
            const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
            const userEntity = HeroRepository.create({ idConnexion: email, password: encryptedPassword, age: age, sexe: sexe });
            userEntity.sexe = 1
            const newUser = await HeroRepository.save(userEntity);
            const token = jwt.sign(
                { id: newUser.uuid, email: newUser.idConnexion },
                process.env.SECRET_KEY,
                { expiresIn: "1h" }
            );
            res.status(HttpCode.OK).json({ token });
        } catch (error) {
            res.status(HttpCode.INTERNAL_ERROR).json({ message: "Inscription échouée" });
        }
    }

    async checkToken(req: Request, res: Response) {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) {
                return res.status(HttpCode.UNAUTHORIZED).json({ message: "Vous n'êtes pas authentifiéeee" });
            }
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            if (!decodedToken) {
                return res.status(HttpCode.UNAUTHORIZED).json({ message: "Vous n'êtes pas authentifiééééééé" });
            }
            res.status(HttpCode.OK).json({ message: "Vous êtes authentifié" });
        } catch (error) {
            res.status(HttpCode.INTERNAL_ERROR).json({ message: "Vous n'êtes pas authentifié" });
        }
    }
}

