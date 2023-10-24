// data/interfaces/data-sources/mysql-database-wrapper.ts
export interface MysqlDatabaseWrapper {
    query(sql: string, values?: any[]): Promise<any>;
}
