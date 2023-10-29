"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDatabase = void 0;
// data/data-sources/mysql/mysql-database-wrapper.ts
const mysql2_1 = require("mysql2");
class MysqlDatabase {
    constructor(options) {
        this.pool = (0, mysql2_1.createPool)(options);
        // console.log(";aaaa", this.pool)
    }
    query(sql, values) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, values, (err, results) => {
                console.log('aaaaa', err);
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
}
exports.MysqlDatabase = MysqlDatabase;
