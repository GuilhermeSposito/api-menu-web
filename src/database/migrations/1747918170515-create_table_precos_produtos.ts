import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePrecosProdutos1747918170515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE precos_produtos (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    id_produto uuid REFERENCES produtos(id) ON DELETE CASCADE,
                    descricao_tam TEXT,
                    custo_insumos DECIMAL,
                    custo_real DECIMAL,
                    preco_sujerido DECIMAL,
                    porcentagem_lucro DECIMAL,
                    valor DECIMAL
                );`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists precos_produtos`)
    }

}
