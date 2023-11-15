import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1699726396468 implements MigrationInterface {
    name = 'Test1699726396468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`POKEMON\` (\`UUID\` int NOT NULL AUTO_INCREMENT, \`ID_DEFAULT_POKEMON\` int NOT NULL, \`UUID_TALENT1\` varchar(255) NOT NULL, \`UUID_TALENT2\` varchar(255) NOT NULL, \`UUID_LIST_ATTAQUE\` varchar(255) NOT NULL, \`UUID_STATUS\` varchar(255) NOT NULL, \`UUID_PROPRIETAIRE\` varchar(255) NOT NULL, \`UUID_NATURE\` varchar(255) NOT NULL, \`NAME\` varchar(255) NOT NULL, \`LEVEL\` int NOT NULL, \`CURRENT_XP\` int NOT NULL, \`XP_TO_NEXT_LEVEL\` int NOT NULL, \`PV_ACTUEL\` int NOT NULL, \`SEXE\` varchar(255) NOT NULL, PRIMARY KEY (\`UUID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`DEFAULT_POKEMON\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`UUID_TYPE1\` varchar(255) NOT NULL, \`UUID_TYPE2\` varchar(255) NOT NULL, \`UUID_TALENT1\` varchar(255) NOT NULL, \`UUID_TALENT2\` varchar(255) NOT NULL, \`UUID_LIST_DEFAULT_ATTAQUE\` varchar(255) NOT NULL, \`UUID_LIEUX\` varchar(255) NOT NULL, \`LIST_LOOT\` varchar(255) NOT NULL, \`ID_POKEMON_EVOLUTION\` int NOT NULL, \`IMAGE\` varchar(255) NOT NULL, \`POIDS\` int NOT NULL, \`NOM\` varchar(255) NOT NULL, \`DESCRIPTION\` varchar(255) NOT NULL, \`TAUX_CAPTURE\` int NOT NULL, \`PV\` int NOT NULL, \`ATTAQUE\` int NOT NULL, \`DEFENSE\` int NOT NULL, \`ATTAQUE_SPECIAL\` int NOT NULL, \`VITESSE\` int NOT NULL, \`TOTAL\` int NOT NULL, \`XP\` int NOT NULL, \`NIVEAU_EVOLUTION\` int NOT NULL, \`DEFENSE_SPECIAL\` int NOT NULL, \`TAILLE\` int NOT NULL, \`TEST_MIGRATION\` varchar(255) NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`DEFAULT_POKEMON\``);
        await queryRunner.query(`DROP TABLE \`POKEMON\``);
    }

}
