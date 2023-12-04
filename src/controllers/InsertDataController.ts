import {Request, Response, Router} from 'express';
import HttpCode from '../config/http-code';
import {DresseurEntity} from "../database/entities/Dresseur.entity";
import {SacEntity} from "../database/entities/Sac.entity";
import {SacRepository} from "../database/repository/Sac.repository";
import {DresseurRepository} from "../database/repository/Dresseur.repository";
import insertCategories from "../database/fixtures/scripts/categories";
import insertCritique from "../database/fixtures/scripts/critique";
import insertEffet from "../database/fixtures/scripts/effet";
import insertType from "../database/fixtures/scripts/type";
import insertStatus from "../database/fixtures/scripts/status";
import insertDataAttaque from "../database/fixtures/scripts/dataAttaque";
import insertTalentEffet from "../database/fixtures/scripts/talentEffet";
import insertListItemDrops from "../database/fixtures/scripts/listItemDrops";
import insertItems from "../database/fixtures/scripts/items";
import insertPokemonDefault from "../database/fixtures/scripts/pokemonDefault";
import insertListAttaqueEffet from "../database/fixtures/scripts/listAttaque.fixture";
import insertSac from "../database/fixtures/scripts/sac";
import insertDresseur from "../database/fixtures/scripts/dresseur";
import insertNatures from "../database/fixtures/scripts/nature";
import insertNaturesEffet from "../database/fixtures/scripts/natureEffet";

export class InsertDataController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.insertData.bind(this));
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
        await insertSac();
        await insertDresseur();
        await insertNatures();
        await insertNaturesEffet();

        return res.status(HttpCode.OK).json({message: "getCheckById" + req.params.id});
    }
}