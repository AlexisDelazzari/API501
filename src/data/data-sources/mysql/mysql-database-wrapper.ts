// data/data-sources/mysql/mysql-database-wrapper.ts
import { createPool, Pool, PoolOptions } from 'mysql2';
import { MysqlDatabaseWrapper } from '../../interfaces/data-sources/mysql/mysql-database-wrapper';

export class MysqlDatabase implements MysqlDatabaseWrapper {
    private pool: Pool;

    constructor(options: PoolOptions) {
        this.pool = createPool(options);
        // console.log(";aaaa", this.pool)
    }

    query(sql: string, values?: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}
