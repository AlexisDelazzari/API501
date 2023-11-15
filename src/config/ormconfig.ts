import { DataSource } from "typeorm";
import { NamingStrategy } from "./NamingStrategy";
import 'dotenv/config'

export const dataSource = new DataSource({
  // namingStrategy: new NamingStrategy(),
  type: "mariadb",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: ["src/database/entities/*.ts"],
});