import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableGrupos1747917831400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                 CREATE TABLE grupos (
                    id SERIAL PRIMARY KEY,
                    merchant_id uuid REFERENCES merchants(id) ON DELETE CASCADE,
                    codigo_interno TEXT,
                    familia_grupo_id INT REFERENCES familia_grupo(id) ON DELETE SET NULL,
                    ultilizar_carro_chefe BOOLEAN DEFAULT FALSE
                );
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exits grupos`);
    }

}
