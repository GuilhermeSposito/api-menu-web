import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableEnderecosMerchant1747936110906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
              create table enderecos_merchant (
                 id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                 merchant_id uuid REFERENCES merchants(id) ON DELETE CASCADE,
                 rua TEXT NOT NULL,
                 numero TEXT NOT NULL,
                 bairro TEXT NOT NULL,
                 cep VARCHAR(10),
                 cidade_id INT REFERENCES cidades(id) ON DELETE SET NULL,
                 uf CHAR(2)
                 );
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists enderecos_merchant`)
    }

}
