// pokedex-router.test.ts
import {PokedexRepository} from "../../../../domain/interfaces/repositories/pokedex/pokedex-repository";

jest.mock('../../../../data/data-sources/json/pokedex/json-pokedex-data-source'); // Mock le module pour isoler les tests
import request from 'supertest';
import express, {Express, response} from 'express';
import {PokedexRouter, PokedexRoutes} from '../../../../presentation/routers/pokedex/pokedex-router';
import {JsonPokedexDataSource} from '../../../../data/data-sources/json/pokedex/json-pokedex-data-source';
import {Pokedex} from "../../../../domain/models/pokedex/pokedex";
import {describe} from "node:test";
import exp from "constants";
import {MysqlPokedexDataSource} from "../../../../data/data-sources/mysql/pokedex/mysql-pokedex-data-source";


export class ErrorPokedexDataSource implements PokedexRepository {
    async getAllPokemon(): Promise<Pokedex[]> {
        // Mapping des résultats de la base de données vers le modèle Pokemon
        throw new Error('Simulated error in rejectGetAllPokemon');
    }

    async getOnePokemon(id: number): Promise<Pokedex | undefined> {
        throw new Error('Simulated error in rejectGetAllPokemon');
    }

    async rejectGetAllPokemon(): Promise<void> {
        throw new Error('Simulated error in rejectGetAllPokemon');
    }


}

describe('PokedexRouter', () => {
    let app: express.Application;
        let response = undefined

    beforeEach(() => {
        jest.clearAllMocks();
        app = express();
        app.use('/', PokedexRoutes);
        response = undefined;
    });

    it('should get all Pokemon from the Pokedex', async () => {
        // Arrange
        const expectedResponse = [
            {
                "id": 7,
                "nom": "totokarp",
                "type1": 3,
                "type2": null,
                "evolution": 14,
                "evolutionId": 8,
                "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-648e8.appspot.com/o/7.png?alt=media&token=27a48e2b-fb3d-4646-b90b-2ed0a190dfdf&_gl=1*izkq3*_ga*MjAzMDQ0Njk4OC4xNjk4MjM4MjY2*_ga_CW55HF8NVT*MTY5ODIzODI2Ni4xLjEuMTY5ODIzODkzNC42MC4wLjA.",
                "description": "Malgré son petit corps, les mâchoires du Totokarp sont très puissantes. Dans les endroits où l'eau s'accumule, vous pouvez voir de nombreux Totokarps déposés par le courant.",
                "taille": "80 cm",
                "poids": "9.8kg",
                "talent1": "Torrent",
                "talent2": null,
                "attaques": [
                    {
                        "id": 1,
                        "nom": "bouscule",
                        "niveau": 1
                    },
                    {
                        "id": 2,
                        "nom": "bav'eau",
                        "niveau": 6
                    },
                    {
                        "id": 3,
                        "nom": "mordouille",
                        "niveau": 10
                    }
                ],
                "statistique": {
                    "hp": 50,
                    "attaque": 30,
                    "defense": 35,
                    "attaqueSpeciale": 80,
                    "defenseSpeciale": 35,
                    "vitesse": 70,
                    "total": 300
                },
                "lieux": [
                    "inconnu"
                ],
                "tauxCapture": 45,
                "xp": 64,
                "loot": [
                    {
                        "idItem": 1,
                        "taux": 10,
                        "nom": "nageoire de totokarp",
                        "nombre": [
                            1,
                            3
                        ]
                    },
                    {
                        "idItem": 60,
                        "taux": 50,
                        "nom": "ecaille de totokarp",
                        "nombre": [
                            1,
                            15
                        ]
                    }
                ]
            },
            {
                "id": 1,
                "nom": "Tortipouss",
                "type1": "plante",
                "type2": null,
                "evolution": 14,
                "evolutionId": 2,
                "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-648e8.appspot.com/o/7.png?alt=media&token=27a48e2b-fb3d-4646-b90b-2ed0a190dfdf&_gl=1*izkq3*_ga*MjAzMDQ0Njk4OC4xNjk4MjM4MjY2*_ga_CW55HF8NVT*MTY5ODIzODI2Ni4xLjEuMTY5ODIzODkzNC42MC4wLjA.",
                "description": "Fabriqué à partir de sol, la coquille sur son dos durcit lorsqu'il boit de l'eau. Il vit le long des lacs.",
                "taille": "40 cm",
                "poids": "10.2kg",
                "talent1": "Engrais",
                "talent2": null,
                "attaques": [
                    {
                        "id": 1,
                        "nom": "bouscule",
                        "niveau": 1
                    },
                    {
                        "id": 2,
                        "nom": "calibourgeon",
                        "niveau": 6
                    },
                    {
                        "id": 3,
                        "nom": "mordouille",
                        "niveau": 10
                    }
                ],
                "statistique": {
                    "hp": 65,
                    "attaque": 30,
                    "defense": 60,
                    "attaqueSpeciale": 45,
                    "defenseSpeciale": 60,
                    "vitesse": 40,
                    "total": 300
                },
                "lieux": [
                    "inconnu"
                ],
                "tauxCapture": 45,
                "xp": 64,
                "loot": [
                    {
                        "idItem": 1,
                        "nom": "carapace de tortipouss",
                        "taux": 10,
                        "nombre": [
                            1,
                            3
                        ]
                    },
                    {
                        "idItem": 60,
                        "taux": 50,
                        "nom": "feille de tortipouss",
                        "nombre": [
                            1,
                            15
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "nom": "Grimèche",
                "type1": "feu",
                "type2": null,
                "evolution": 14,
                "evolutionId": 5,
                "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-648e8.appspot.com/o/7.png?alt=media&token=27a48e2b-fb3d-4646-b90b-2ed0a190dfdf&_gl=1*izkq3*_ga*MjAzMDQ0Njk4OC4xNjk4MjM4MjY2*_ga_CW55HF8NVT*MTY5ODIzODI2Ni4xLjEuMTY5ODIzODkzNC42MC4wLjA.",
                "description": "Fabriqué à partir de sol, la coquille sur son dos durcit lorsqu'il boit de l'eau. Il vit le long des lacs.",
                "taille": "60 cm",
                "poids": "14.5kg",
                "talent1": "Charbon",
                "talent2": null,
                "attaques": [
                    {
                        "id": 1,
                        "nom": "bouscule",
                        "niveau": 1
                    },
                    {
                        "id": 2,
                        "nom": "Crachaud",
                        "niveau": 6
                    },
                    {
                        "id": 3,
                        "nom": "mordouille",
                        "niveau": 10
                    }
                ],
                "statistique": {
                    "hp": 60,
                    "attaque": 60,
                    "defense": 45,
                    "attaqueSpeciale": 30,
                    "defenseSpeciale": 45,
                    "vitesse": 60,
                    "total": 300
                },
                "lieux": [
                    "inconnu"
                ],
                "tauxCapture": 45,
                "xp": 64,
                "loot": [
                    {
                        "idItem": 1,
                        "nom": "queue de Grimèche",
                        "taux": 10,
                        "nombre": [
                            1,
                            3
                        ]
                    },
                    {
                        "idItem": 60,
                        "taux": 50,
                        "nom": "cendre de Grimèche",
                        "nombre": [
                            1,
                            15
                        ]
                    }
                ]
            }
        ];
        (MysqlPokedexDataSource.prototype.getAllPokemon as jest.Mock).mockResolvedValue(expectedResponse);
        // Act
        response = await request(app).get('/pokedex');

        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedResponse);
    });
    
    it('should  get one Pokemon from the Pokedex', async () => {
        // Arrange
        const id = 1;
        const expectedResponse = {
            "id": 1,
            "nom": "Tortipouss",
            "type1": "plante",
            "type2": null,
            "evolution": 14,
            "evolutionId": 2,
            "image": "https://firebasestorage.googleapis.com/v0/b/pokemon-648e8.appspot.com/o/7.png?alt=media&token=27a48e2b-fb3d-4646-b90b-2ed0a190dfdf&_gl=1*izkq3*_ga*MjAzMDQ0Njk4OC4xNjk4MjM4MjY2*_ga_CW55HF8NVT*MTY5ODIzODI2Ni4xLjEuMTY5ODIzODkzNC42MC4wLjA.",
            "description": "Fabriqué à partir de sol, la coquille sur son dos durcit lorsqu'il boit de l'eau. Il vit le long des lacs.",
            "taille": "40 cm",
            "poids": "10.2kg",
            "talent1": "Engrais",
            "talent2": null,
            "attaques": [
                {
                    "id": 1,
                    "nom": "bouscule",
                    "niveau": 1
                },
                {
                    "id": 2,
                    "nom": "calibourgeon",
                    "niveau": 6
                },
                {
                    "id": 3,
                    "nom": "mordouille",
                    "niveau": 10
                }
            ],
            "statistique": {
                "hp": 65,
                "attaque": 30,
                "defense": 60,
                "attaqueSpeciale": 45,
                "defenseSpeciale": 60,
                "vitesse": 40,
                "total": 300
            },
            "lieux": [
                "inconnu"
            ],
            "tauxCapture": 45,
            "xp": 64,
            "loot": [
                {
                    "idItem": 1,
                    "nom": "carapace de tortipouss",
                    "taux": 10,
                    "nombre": [
                        1,
                        3
                    ]
                },
                {
                    "idItem": 60,
                    "taux": 50,
                    "nom": "feille de tortipouss",
                    "nombre": [
                        1,
                        15
                    ]
                }
            ]
        };
        (JsonPokedexDataSource.prototype.getOnePokemon as jest.Mock).mockResolvedValue(expectedResponse);
        // Act
         response = await request(app).get(`/pokedex/${id}`);

        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedResponse);
    });

    it('should get no Pokemon from the Pokedex because of ID', async () => {
        // Arrange
        const idNoPoke = 10000234;
        const expectedResponse = {error : "Pokemon not found"};
        (JsonPokedexDataSource.prototype.getOnePokemon as jest.Mock).mockResolvedValue(undefined);
        // Act
        response = await request(app).get(`/pokedex/10000234`);
        // Assert
        // console.log(response)
        expect(response.status).toBe(404);
        expect(response.body).toEqual(expectedResponse);
    });
    
});
describe('PokedexRouter Error', () => {
    let app: express.Application;

    beforeAll(() => {
        app = express();
        let errorDataSource = new ErrorPokedexDataSource()
        const PokedexRouterInstance = new PokedexRouter(errorDataSource);
        const PokedexRoutesError = PokedexRouterInstance.router;
        app.use('/', PokedexRoutesError);
    });

    it('should throw error on  get all Pokemon from the Pokedex', async () => {

        const response = await request(app).get('/pokedex');

        // Assert
        expect(response.status).toBe(500);
        expect(response.body).toEqual({error: 'Internal Server Error'});
    });

    it('should throw error on  get one Pokemon from the Pokedex', async () => {
        // Arrange
        const id = 1;

        // Act
        const response = await request(app).get(`/pokedex/${id}`);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({error: 'Internal Server Error'});
    });
    
});
