import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCidadesTable1747857846643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`  CREATE TABLE cidades (
                    id SERIAL PRIMARY KEY,
                    num int NOT NULL, 
                    descricao TEXT NOT NULL
                );
                
                  insert into cidades(num,descricao) values (3548906, 'São Carlos')
                
                `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists cidades`)
    }

}
