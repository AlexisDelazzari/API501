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
import {TypeEntity} from "../../database/entities/Type.entity";
import {TypeRepository} from "../../database/repository/Type.repository";
import {CategorieEntity} from "../../database/entities/Categorie.entity";
import {CategorieRepository} from "../../database/repository/Categorie.repository";
import {CritiqueEntity} from "../../database/entities/Critique.entity";
import {CritiqueRepository} from "../../database/repository/Critique.repository";
import typesJson from './types.json';
import attquesJson from './attaques.json';
import defaultPokemonJson from './defaultPokemon.json';
import talentEffetsJson from './talentEffets.json';
import listAttaquesJson from './listAttaques.json';
import itemsJson from './items.json';
import listItemsDropJson from './listItemDrop.json';
import {DefaultPokemonEntity} from "../../database/entities/DefaultPokemon.entity";
import {TalentEffetRepository} from "../../database/repository/TalentEffet.repository";
import {ListAttaqueRepository} from "../../database/repository/ListAttaque.repository";
import {LieuxRepository} from "../../database/repository/Lieux.repository";
import {ListItemDropRepository} from "../../database/repository/ListItemDrop.repository";
import {DefaultPokemonRepository} from "../../database/repository/DefaultPokemon.repository";
import {TalentEffetEntity} from "../../database/entities/TalentEffet.entity";
import {ListAttaqueEntity} from "../../database/entities/ListAttaque.entity";
import {ItemEntity} from "../../database/entities/Item.entity";
import {ItemRepository} from "../../database/repository/Item.repository";
import {ListItemDropEntity} from "../../database/entities/ListItemDrop.entity";

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
        await this.insertType();
        await this.insertCategories();
        await this.insertCritique();
        await this.insertStatus();
        await this.insertEffet();
        await this.insertDataAttaque();
        await this.insertTalentEffet();
        await this.insertListAttaqueEffet();
        await this.insertPokemonDefault();
        await this.insertItems();
        await this.insertListItemDrops();
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
        return res.status(HttpCode.OK).json({message: "getCheckById" + req.params.id});
        // } catch (e) {
        //     return res.status(HttpCode.INTERNAL_ERROR).json({message: "getCheckById"});
        // }
    }

    async insertPokemonDefault() {
        let pokemons = defaultPokemonJson;
        let pokemonEntities: DefaultPokemonEntity[] = [];
        for (const pokemon of pokemons) {
            const pokemonEntity = new DefaultPokemonEntity();
            pokemonEntity.image = pokemon.image;
            pokemonEntity.poids = pokemon.poids;
            pokemonEntity.nom = pokemon.nom;
            pokemonEntity.description = pokemon.description;
            pokemonEntity.tauxCapture = pokemon.tauxCapture;
            pokemonEntity.pv = pokemon.pv;
            pokemonEntity.attaque = pokemon.attaque;
            pokemonEntity.defense = pokemon.defense;
            pokemonEntity.attaqueSpeciale = pokemon.attaqueSpeciale;
            pokemonEntity.vitesse = pokemon.vitesse;
            pokemonEntity.total = pokemon.total;
            pokemonEntity.xp = pokemon.xp;
            pokemonEntity.niveauEvolution = pokemon.niveauEvolution;
            pokemonEntity.defenseSpeciale = pokemon.defenseSpeciale;
            pokemonEntity.taille = pokemon.taille;

            // Utilisation des clés du JSON pour les associations
            pokemonEntity.type1 = await TypeRepository.findOneBy({uuid: pokemon.uuidType1});
            pokemonEntity.type2 = (pokemon.uuidType2 === null) ? null : await TypeRepository.findOneBy({uuid: pokemon.uuidType2});
            pokemonEntity.talent1 = await TalentEffetRepository.findOneBy({uuid: pokemon.uuidTalent1});
            pokemonEntity.talent2 = (pokemon.uuidTalent2 === null) ? null : await TalentEffetRepository.findOneBy({uuid: pokemon.uuidTalent2});
            pokemonEntity.listAttaque = await ListAttaqueRepository.findOneBy({uuidList: pokemon.uuidListDefaultAttaque});
            pokemonEntity.lieux = (pokemon.uuidLieux === null) ? null : await LieuxRepository.findOneBy({uuid: pokemon.uuidLieux});
            pokemonEntity.listItemDrop = await ListItemDropRepository.findOneBy({uuidList: pokemon.uuidlistLoot});
            pokemonEntity.pokemonEvolution =  await DefaultPokemonRepository.findOneBy({id: pokemon.idPokemonEvolution});
            //TODO FAIRE EN SORTE QUE POKEMONEVOLUTION PUISSE ETRE NULLE ET VERIFIE LES INSERTION DE POKEMON
            pokemonEntities.push(pokemonEntity);
        }

        for (const element of pokemonEntities) {
            await DefaultPokemonRepository.save(element);
        }
    }


    async insertListItemDrops() {
        let listItemDrops = listItemsDropJson;
        let listItemDropsEntities: ListItemDropEntity[] = [];

        for (const listItemDrop of listItemDrops) {
            const listItemDropsEntity = new ListItemDropEntity();
            listItemDropsEntity.item = await ItemRepository.findOneBy({uuid: listItemDrop.uuidItem});
            listItemDropsEntity.max = listItemDrop.max;
            listItemDropsEntity.min = listItemDrop.min;
            listItemDropsEntity.taux = listItemDrop.taux;

            listItemDropsEntities.push(listItemDropsEntity);
        }
        for (const element of listItemDropsEntities) {
            await ListItemDropRepository.save(element);
        }

    }

    async insertItems() {
        let items = itemsJson;
        let itemsEntities: ItemEntity[] = [];

        for (const item of items) {
            const itemsEntity = new ItemEntity();
            itemsEntity.name = item.name;
            itemsEntity.canBeFound = item.canBeFound;

            itemsEntities.push(itemsEntity);
        }
        for (const element of itemsEntities) {
            await ItemRepository.save(element);
        }

    }


    async insertListAttaqueEffet() {
        let listAttaques = listAttaquesJson;
        let listAttaquesEntities: ListAttaqueEntity[] = [];

        for (const listAttaque of listAttaques) {
            const listAttaquesEntity = new ListAttaqueEntity();
            listAttaquesEntity.attaque = await AttaqueRepository.findOneBy({uuid: listAttaque.uuidAttaque});
            listAttaquesEntity.Niveau = listAttaque.niveau;
            listAttaquesEntity.uuidList = listAttaque.uuidList;

            listAttaquesEntities.push(listAttaquesEntity);
        }
        for (const element of listAttaquesEntities) {
            await ListAttaqueRepository.save(element);
        }

    }

    async insertTalentEffet() {
        let talentEffets = talentEffetsJson;
        let talentEffetEntities: TalentEffetEntity[] = [];

        for (const talentEffet of talentEffets) {
            const talentEffetEntity = new TalentEffetEntity();
            talentEffetEntity.nom = talentEffet.nom;
            talentEffetEntity.description = talentEffet.description;

            talentEffetEntities.push(talentEffetEntity);
        }
        for (const element of talentEffetEntities) {
            await TalentEffetRepository.save(element);
        }

    }

    async insertDataAttaque() {
        let attaques = attquesJson;
        attaques = attaques.reverse();
        let attaquesEntities: AttaqueEntity[] = [];
        for (const attaque of attaques) {
            const attaqueEntity = new AttaqueEntity();
            attaqueEntity.uuid = attaque.uuid;
            attaqueEntity.categorie = await CategorieRepository.findOneBy({id: attaque.uuidCategorie});
            attaqueEntity.critique = await CritiqueRepository.findOneBy({id: attaque.uuidCritique});
            attaqueEntity.effet = await EffetRepository.findOneBy({uuid: attaque.uuidEffet});
            attaqueEntity.attaqueEvol = (attaque.uuidAttaqueEvol === null) ? null : await AttaqueRepository.findOneBy({uuid: attaque.uuid});
            attaqueEntity.niveau = attaque.niveau;
            attaqueEntity.pp = attaque.pp;
            attaqueEntity.priorite = attaque.priorite;
            attaqueEntity.nom = attaque.nom;
            attaqueEntity.description = attaque.description;
            attaqueEntity.puissance = attaque.puissance;
            attaqueEntity.precision = attaque.precision;
            attaquesEntities.push(attaqueEntity);
        }
        attaquesEntities = attaquesEntities.reverse();
        for (const element of attaquesEntities) {
            await AttaqueRepository.save(element);
        }
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

    }


    async insertEffet() {
        let effets = [["Recul", "2"], ["Poison", "3"], ['Brulure', "4"]];
        const effetsEntities: EffetEntity[] = [];
        for (const element of effets) {
            const effetsEntity: EffetEntity = new EffetEntity();
            effetsEntity.name = element[0];
            effetsEntity.status = await StatusRepository.findOneBy({uuid: Number(element[0])});

            effetsEntities.push(effetsEntity);
        }

        effetsEntities.forEach((entity) => {
            EffetRepository.save(entity);
        });

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
    }
}