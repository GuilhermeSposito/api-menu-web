import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTipoNegociosTable1747858293938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`         
                   CREATE TABLE tipo_negocios (
                    id SERIAL PRIMARY KEY,
                    descricao TEXT NOT NULL
                );
                
                insert into tipo_negocios(descricao) values ('MERCADO'), ('RESTAURANTE'), ('AÇOUGUE')

                `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`         
                         drop table if exists tipo_negocios
                        `)
    }

}
