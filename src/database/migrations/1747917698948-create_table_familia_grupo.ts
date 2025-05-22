import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableFamiliaGrupo1747917698948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE familia_grupo (
                    id SERIAL PRIMARY KEY,
                    merchant_id UUID REFERENCES merchants(id) ON DELETE CASCADE,
                    descricao TEXT DEFAULT 'GERAL'
                );
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table if exists familia_grupo 
                `)
    }

}
