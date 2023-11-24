import {Request, Response, Router} from 'express';
import HttpCode from '../../../config/http-code';
import {DresseurEntity} from "../../entities/Dresseur.entity";
import {SacEntity} from "../../entities/Sac.entity";
import {SacRepository} from "../../repository/Sac.repository";
import {DresseurRepository} from "../../repository/Dresseur.repository";
import insertCategories from "./categories";
import insertCritique from "./critique";
import insertEffet from "./effet";
import insertType from "./type";
import insertStatus from "./status";
import insertDataAttaque from "./dataAttaque";
import insertTalentEffet from "./talentEffet";
import insertListItemDrops from "./listItemDrops";
import insertItems from "./items";
import insertPokemonDefault from "./pokemonDefault";
import insertListAttaqueEffet from "./listAttaque.fixture";

export class InsertDataController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.insertDataDresseur.bind(this));
        this.router.get('/default', this.insertData.bind(this));
    }

    async insertDataDresseur(req: Request, res: Response) {
        try {
            let dresseur: DresseurEntity = new DresseurEntity();
            let sac: SacEntity = new SacEntity();

            await SacRepository.save(sac);

            dresseur.positionX = 1;
            dresseur.positionY = 2;
            dresseur.orientation = "N";
            dresseur.name = "test";
            dresseur.dialogue = "test";
            dresseur.rewardMoney = 0;
            dresseur.isHero = false;
            dresseur.sac = sac;

            await DresseurRepository.save(dresseur);

            return res.status(HttpCode.OK).json({message: "getCheck"});
        } catch (e) {
            return res.status(HttpCode.INTERNAL_ERROR).json({message: "getCheck"});
        }
    }

    async insertData(req: Request, res: Response) {
        await insertType();
        await insertCategories();
        await insertCritique();
        await insertStatus();
        await insertEffet();
        await insertDataAttaque();
        await insertTalentEffet();
        await insertListAttaqueEffet();
        await insertItems();
        await insertListItemDrops();
        await insertPokemonDefault();
        return res.status(HttpCode.OK).json({message: "getCheckById" + req.params.id});
    }
}