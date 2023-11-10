import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource()
typeorm migration:generate -n CreatePokemonTable