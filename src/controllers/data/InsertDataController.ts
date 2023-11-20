import {Request, Response, Router} from 'express';
import HttpCode from '../../config/http-code';
import {DresseurEntity} from "../../database/entities/Dresseur.entity";
import {SacEntity} from "../../database/entities/Sac.entity";
import {SacRepository} from "../../database/repository/Sac.repository";
import {DresseurRepository} from "../../database/repository/Dresseur.repository";
import {AttaqueEntity} from "../../database/entities/Attaque.entity";
import {StatusEntity} from "../../database/entities/Status.entity";
import {StatusRepository} from "../../database/repository/Status.repository";
import {EffetEntity} from "../../database/entities/Effet.entity";
import {EffetRepository} from "../../database/repository/Effet.repository";
import {AttaqueRepository} from "../../database/repository/Attaque.repository";
import typesJson from './types.json';
import {TypeEntity} from "../../database/entities/Type.entity";
import {ListDresseurInZoneRepository} from "../../database/repository/ListDresseurInZone.repository";
import {TypeRepository} from "../../database/repository/Type.repository";
import {CategorieEntity} from "../../database/entities/Categorie.entity";
import {CategorieRepository} from "../../database/repository/Categorie.repository";
import {CritiqueEntity} from "../../database/entities/Critique.entity";
import {CritiqueRepository} from "../../database/repository/Critique.repository";

export class InsertDataController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.insertDataDresseur.bind(this));
        this.router.get('/default', this.insertDataDefaultPokemon.bind(this));
        this.router.get('/default/insertStatus', this.insertStatus.bind(this));
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

    async insertDataDefaultPokemon(req: Request, res: Response) {
        let typesEntities = await this.insertType();
        let categorieEntities = await this.insertCategories();
        let critiquesEntities = await this.insertCritique();
        
        // try {
        //     const type1 = new TypeEntity();
        //     type1.name = "Plante";
        //
        //     const talent1 = new TalentEffetEntity();
        //     talent1.nom = "Engrais";
        //     talent1.description = "Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV.";
        //    
        //    
        //     new ListAttaqueEntity();
        //     listAttaque.uuidList = 1;
        //     listAttaque.Niveau = 1
        //     listAttaque.attaque = 
        //
        //     const defaultPokemon = new DefaultPokemonEntity();
        //     defaultPokemon.id = 1;
        //     defaultPokemon.type1 = type1;
        //     defaultPokemon.type2 = null;
        //     defaultPokemon.talent1 = talent1;
        //     defaultPokemon.talent2 = null;
        //     defaultPokemon.listAttaque = 1;
        //     defaultPokemon.lieux = 0;
        //     defaultPokemon.listItemDrop = 1;
        //     defaultPokemon.pokemonEvolution = 1;
        //
        //     defaultPokemon.image = 'https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/1.png?alt=media&token=c84c15b8-c43f-4211-9ebe-53dcb065b794';
        //     defaultPokemon.poids = '10.2 kg';
        //     defaultPokemon.nom = 'Tortipousspouss';
        //     defaultPokemon.description = 'Fabriqué à partir de sol, la coquille sur son dos durcit lorsqu\'il boit de l\'eau. Il vit le long des lacs.';
        //     defaultPokemon.tauxCapture = 45;
        //     defaultPokemon.pv = 65;
        //     defaultPokemon.attaque = 30;
        //     defaultPokemon.defense = 60;
        //     defaultPokemon.attaqueSpeciale = 45;
        //     defaultPokemon.vitesse = 40;
        //     defaultPokemon.total = 300;
        //     defaultPokemon.xp = 64;
        //     defaultPokemon.niveauEvolution = 16;
        //     defaultPokemon.defenseSpeciale = 60;
        //     defaultPokemon.taille = '40 cm';
        //
        //     // Insérer le DefaultPokemon dans la base de données
        //     await defaultPokemonRepository.save(defaultPokemon);
        //     return res.status(HttpCode.OK).json({message: "getCheckById" + req.params.id});
        // } catch (e) {
        //     return res.status(HttpCode.INTERNAL_ERROR).json({message: "getCheckById"});
        // }
    }


    async insertDataAttaque() {
        let effetsEntities = this.insertEffet();
        let attaques = [[]];
        const attaquesEntities: AttaqueEntity[] = [];
        for (let i = 0; i < attaques.length; i++) {

        }

        attaquesEntities.forEach((entity) => {
            AttaqueRepository.save(entity);
        });

        return attaquesEntities;
    }

    async insertType() {
        let types = typesJson;
        let typeEntities: TypeEntity[] = [];
        for (const type of types) {
            const typeEntity = new TypeEntity();
            typeEntity.uuid = type.id;
            typeEntity.name = type.nom;

            typeEntities.push(typeEntity);
        }

        typeEntities.forEach(entity => {
            TypeRepository.save(entity);
        });
        return typeEntities;

    }

    async insertCategories() {
        let categories = [
            {info: "Physique"},
            {info: "Spéciale"}
        ];
        let categoriesEntities: CategorieEntity[] = [];
        for (const categorie of categories) {
            const categorieEntity = new CategorieEntity();
            categorieEntity.info = categorie.info;
            categoriesEntities.push(categorieEntity);
        }

        categoriesEntities.forEach(entity => {
            CategorieRepository.save(entity);
        });

        return categoriesEntities;
    }

    async insertCritique() {
        let critiques = [
            {"id": 1, "valeur": 0.10, "description": "Probabilité normale d'obtenir un coup critique."},
            {"id": 2, "valeur": 0.25, "description": "Probabilité des capacités avec un taux de coups critique."},
            {"id": 3, "valeur": 1.00, "description": "Probabilité maximale d'obtenir un coup critique."}
        ];

        let critiquesEntities: CritiqueEntity[] = [];
        for (const critique of critiques) {
            const critiquesEntity = new CritiqueEntity();
            critiquesEntity.id = critique.id;
            critiquesEntity.description = critique.description;
            critiquesEntity.probabilité = critique.valeur;
            critiquesEntities.push(critiquesEntity);
        }

        critiquesEntities.forEach(entity => {
            CritiqueRepository.save(entity);
        });

        return critiquesEntities;
    }


    async insertEffet() {
        let statusEntities = await this.insertStatus();
        let effets = [["Recul", "2"], ["Poison", "3"], ['Brulure', "4"]];
        const effetsEntities: EffetEntity[] = [];
        for (let i = 0; i < effets.length; i++) {
            const effetsEntity: EffetEntity = new EffetEntity();
            effetsEntity.name = effets[i][0];
            effetsEntity.status = statusEntities[i];
        }

        effetsEntities.forEach((entity) => {
            EffetRepository.save(entity);
        });

        return effetsEntities;
    }

    async insertStatus() {
        let status = [["Aucun", "Aucun effet supplementaire."], ["Recul", "Retire 1/4 des dégâts infligés à la cible."], ["Poison", "Le pokemon perds 1/8 de ses PV max à chaque tour."]];
        const statusEntities: StatusEntity[] = [];
        for (let i = 0; i < status.length; i++) {
            const statusEntity = new StatusEntity();
            statusEntity.name = status[i][0];
            statusEntity.description = status[i][1];
            statusEntities.push(statusEntity);
        }
        statusEntities.forEach((entity) => {
            StatusRepository.save(entity);
        });
        return statusEntities;
    }
}