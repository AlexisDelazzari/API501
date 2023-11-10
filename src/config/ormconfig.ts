import { DataSource } from "typeorm";
import { NamingStrategy } from "./NamingStrategy";

export const dataSource = new DataSource({
  namingStrategy: new NamingStrategy(),
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "pokemon",
  synchronize: false,
  logging: true,
  entities: ["src/database/entity/**/*.ts"],
});