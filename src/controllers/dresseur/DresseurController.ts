import {Request, Response, Router} from 'express';
import HttpCode from '../../config/http-code';
import {DresseurRepository} from "../../database/repository/Dresseur.repository";
import {constants} from "http2";
import {PokemonRepository} from "../../database/repository/Pokemon.repository";
import {CalculStatController, StatModifier} from "../CalculStatController";
import {Stats} from "../../models/general/stats";
import {NatureEffetRepository} from "../../database/repository/NatureEffet.repository";
import {NatureEntity} from "../../database/entities/Nature.entity";
import {NatureRepository} from "../../database/repository/Nature.repository";
import {ListAttaqueRepository} from "../../database/repository/ListAttaque.repository";

export class DresseurController {
    public router: Router;
    private calculStatController = new CalculStatController();

    constructor() {
        this.router = Router();
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.get('/:id', this.getOneDresseurInfo.bind(this));
        this.router.get('/:id/pokemons', this.getPokemonOfDresseurInfo.bind(this));
        this.router.get('/:id/pokemonExemple', this.getPokemonOfDresseurExemple.bind(this));
    }

    private async getOneDresseurInfo(req: Request, res: Response): Promise<void> {
        try {
            const oneDresseur = await DresseurRepository.getOneDresseur(Number(req.params.id));

            res.status(HttpCode.OK).json(oneDresseur);
        } catch (error) {
            res.status(HttpCode.INTERNAL_ERROR).json({error: 'Internal Server Error'});
        }
    }

    private async getPokemonOfDresseurInfo(req: Request, res: Response): Promise<void> {
        try {
            const allPokemon = await PokemonRepository.getOnePokemonByOwner(Number(req.params.id));
            const finalPokemons = [];


            for (let pokemon of allPokemon) {
                
                let stats: Stats = {
                    hp: pokemon.defaultPokemon.pv,
                    attaque: pokemon.defaultPokemon.attaque,
                    attaqueSpeciale: pokemon.defaultPokemon.attaqueSpeciale,
                    defense: pokemon.defaultPokemon.defense,
                    defenseSpeciale: pokemon.defaultPokemon.defenseSpeciale,
                    vitesse: pokemon.defaultPokemon.vitesse,
                    total: pokemon.defaultPokemon.total,
                };

                let natureNature = await NatureEffetRepository.findBy({nature: await NatureRepository.findOneByOrFail({uuid: 6})});
                
                let nature1 = natureNature[0]
                let nature2 = natureNature[1]
                let natureStat1 : StatModifier = [nature1.stat, nature1.multiplicateur]
                let natureStat2 : StatModifier = [nature2.stat, nature2.multiplicateur];


                let finalStats = this.calculStatController.calculStat(stats, pokemon.level, [natureStat1, natureStat2]);
                let attaquesList = await ListAttaqueRepository.getDetailOfAttack(pokemon.listAttaque.uuidList)
                attaquesList.map((value) => value.attaque)
                
                
                let pokemonFinal = {
                    nom: pokemon.defaultPokemon.nom,
                    level: pokemon.level,
                    image: pokemon.defaultPokemon.image,
                    stats: finalStats,
                    talent : {
                        uuid : pokemon.talent.uuid,
                        nom : pokemon.talent.nom
                    },
                    attaques : attaquesList
                };

                finalPokemons.push(pokemonFinal);

            }
            res.status(HttpCode.OK).json(finalPokemons);
            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    private async getPokemonOfDresseurExemple(req: Request, res: Response): Promise<void> {
        try {
            
            const allPokemon = await PokemonRepository.getOnePokemonByOwner(Number(req.params.id));
            res.status(HttpCode.OK).json(allPokemon);

            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}