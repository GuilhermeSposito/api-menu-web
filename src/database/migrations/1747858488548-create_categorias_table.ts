import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriasTable1747858488548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`  

             CREATE TABLE categoria_produtos (
                    id SERIAL PRIMARY KEY,
                    descricao TEXT NOT NULL
                );

            insert into categoria_produtos(descricao) values ('INSUMO'), ('CARDÁPIO'), ('INSUMO/CARDÁPIO')
`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists categoria_produtos`)
    }

}
