import { DataSource } from "typeorm";
import { NamingStrategy } from "./NamingStrategy";
import 'dotenv/config'

export const dataSource = new DataSource({
  namingStrategy: new NamingStrategy(),
  type: process.env.DB_TYPE === 'mysql' ? 'mysql' : 'mariadb',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ["src/database/entity/**/*.ts"],
  migrations: ["src/database/migration/**/*.ts"],
});