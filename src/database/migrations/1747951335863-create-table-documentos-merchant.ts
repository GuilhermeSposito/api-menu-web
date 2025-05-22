import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableDocumentosMerchant1747951335863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE documentos_merchant (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    merchant_id uuid REFERENCES merchants(id) ON DELETE CASCADE,
                    cnpj VARCHAR(20) NOT NULL, 
                    inscricao_estadual text,
                    cnae TEXT,
                    inscricao_municipal VARCHAR(20)
        );
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists documentos_merchant`)
    }

}
