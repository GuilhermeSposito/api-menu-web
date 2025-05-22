import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMerchantTable1747916558724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`           
                 CREATE TABLE merchants (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    email TEXT NOT NULL UNIQUE,
                    senha TEXT,
                    razao_social TEXT NOT NULL,
                    imagem_logo TEXT,
                    nome_fantasia TEXT,             
                    celular VARCHAR(20),
                    telefone VARCHAR(20),
                    cnpj VARCHAR(20), 
                    inscricao_estadual text,
                    cnae TEXT,
                    inscricao_municipal VARCHAR(20),
                    marca_departamento TEXT,
                    legenda_do_volume TEXT,
                    ativo BOOL DEFAULT FALSE
                );
`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists merchants`)
    }

}
