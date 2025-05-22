import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTipoNegocios1747917092377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`             
               CREATE TABLE tipo_negocios_merchant (
                    id SERIAL PRIMARY KEY,
                    id_merchant UUID REFERENCES merchants(id) ON DELETE CASCADE,
                    id_tipo_negocio INT REFERENCES tipo_negocios(id) ON DELETE CASCADE
                );
`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table if exits tipo_negocio_merchant
            `)
    }

}
