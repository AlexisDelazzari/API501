import {Request, Response, Router} from 'express';
import HttpCode from '../../config/http-code';
import {DefaultPokemonRepository} from "../../database/repository/DefaultPokemon.repository";
import jwt from "jsonwebtoken";
import {HeroRepository} from "../../database/repository/Hero.repository";
import {ListAttaqueEntity} from "../../database/entities/ListAttaque.entity";
import {ListAttaqueRepository} from "../../database/repository/ListAttaque.repository";
import {AttaqueRepository} from "../../database/repository/Attaque.repository";
import {DefaultPokemonEntity} from "../../database/entities/DefaultPokemon.entity";
import {TypeRepository} from "../../database/repository/Type.repository";
import {TypeEntity} from "../../database/entities/Type.entity";
import {TalentEffetRepository} from "../../database/repository/TalentEffet.repository";
import {LieuxRepository} from "../../database/repository/Lieux.repository";
import {ListItemDropRepository} from "../../database/repository/ListItemDrop.repository";
import {AttaqueEntity} from "../../database/entities/Attaque.entity";
import {EffetRepository} from "../../database/repository/Effet.repository";

export class DefaultPokemonController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getAllPokedexHandler.bind(this));
        this.router.get('/private', this.getAllPrivatePokedexHandler.bind(this));
        this.router.get('/:id', this.getOnePokedexHandler.bind(this));

        this.router.post('/', this.addPokemonHandler.bind(this));
    }

    private async getAllPokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            const allPokemon = await DefaultPokemonRepository.getAllPokemon();
            let goodPokemon = allPokemon.map(({id, nom, image}) => ({id, nom, image}))
            res.status(HttpCode.OK).json(goodPokemon);
            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    private async getOnePokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            const onePokemon = await DefaultPokemonRepository.getOnePokemon(Number(req.params.id));
            res.status(HttpCode.OK).json(onePokemon);
            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    private async getAllPrivatePokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (typeof decoded === 'string') {
                res.status(401).json({error: 'Unauthorized'});
                return;
            }
            const hero = HeroRepository.findOneBy({uuid: decoded.id})
            if (!hero) {
                res.status(401).json({error: 'Unauthorized'});
                return;
            }
            const allPokemon = await DefaultPokemonRepository.getAllPrivatePokemon(decoded.id);
            res.status(HttpCode.OK).json(allPokemon);

        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    private async addPokemonHandler(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            console.log(token);
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (typeof decoded === 'string') {
                res.status(401).json({error: 'Unauthorized'});
                return;
            }

            const type1 = await TypeRepository.findOneBy({uuid: req.body.type1.id});
            const type2 = await TypeRepository.findOneBy({uuid: req.body.type2.id });

            let maxListAttaque = await ListAttaqueRepository.getLastUuidList();

            const tabListAttaque = []
            for (const list of req.body.listAttaque) {
                const attaqueEntity = new AttaqueEntity();
                attaqueEntity.nom = list.attaque.nom;
                attaqueEntity.puissance = list.attaque.puissance;
                attaqueEntity.precision = 0;
                attaqueEntity.pp = list.attaque.pp;
                attaqueEntity.description = list.attaque.description;
                attaqueEntity.type = await TypeRepository.findOneByOrFail({uuid: list.attaque.type.id});
                attaqueEntity.niveau = 0;
                attaqueEntity.categorie = null;
                attaqueEntity.effet = await TypeRepository.findOneByOrFail({uuid: list.attaque.effet.id});
                attaqueEntity.critique = null;
                attaqueEntity.attaqueEvol = null;
                attaqueEntity.priorite = null;

                await AttaqueRepository.save(attaqueEntity);

                const listAttaqueEntity = new ListAttaqueEntity();
                listAttaqueEntity.uuidList = maxListAttaque + 1;
                listAttaqueEntity.attaque = attaqueEntity;
                listAttaqueEntity.Niveau = list.niveau;
                listAttaqueEntity.attaque = attaqueEntity;
                listAttaqueEntity.idAttaque = attaqueEntity.uuid;

                await ListAttaqueRepository.save(listAttaqueEntity);
                tabListAttaque.push(listAttaqueEntity);
            }

            const pokemon =
            {
                "id": null,
                "uuidType1": req.body.type1.id,
                "uuidType2": req.body.type2.id,
                "uuidTalent1": null,
                "uuidTalent2": null,
                "uuidListDefaultAttaque": null,
                "uuidLieux": null,
                "uuidlistLoot": null,
                "idPokemonEvolution": null,
                "image": req.body.image,
                "poids": req.body.poids,
                "nom": req.body.nom,
                "description": req.body.description,
                "tauxCapture": req.body.tauxCapture,
                "pv": req.body.pv,
                "attaque": req.body.attaque,
                "defense": req.body.defense,
                "attaqueSpeciale": req.body.attaqueSpeciale,
                "vitesse": req.body.vitesse,
                "total": null,
                "xp": req.body.xp,
                "niveauEvolution": null,
                "defenseSpeciale": req.body.defenseSpeciale,
                "taille": req.body.taille,
                "proprietaire": decoded.id
            }

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

            console.log(pokemonEntity);
            // Utilisation des clés du JSON pour les associations
            pokemonEntity.type1 = await TypeRepository.findOneByOrFail({uuid: pokemon.uuidType1});
            pokemonEntity.type2 = (pokemon.uuidType2 === null) ? null : await TypeRepository.findOneByOrFail({uuid: pokemon.uuidType2});
            pokemonEntity.talent1 = null
            pokemonEntity.talent2 = null
            pokemonEntity.listAttaques = tabListAttaque
            pokemonEntity.lieux = null
            pokemonEntity.listItemDrop = null
            pokemonEntity.pokemonEvolution = null
            pokemonEntity.hasHero = true
            pokemonEntity.proprietaire = decoded.id

            await DefaultPokemonRepository.save(pokemonEntity);

            res.status(HttpCode.OK).json({message: 'Pokemon added'});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}