import {MysqlDatabase} from "../../../data-sources/mysql/mysql-database-wrapper";

export const dbConfig = new MysqlDatabase({
    host: '34.155.48.69',
    port: 3306,
    user: 'justin',
    database: 'POKEMON',
    password: 'Justin55500',
})