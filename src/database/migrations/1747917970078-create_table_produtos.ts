import { MigrationInterface, QueryResult, QueryRunner } from "typeorm";

export class CreateTableProdutos1747917970078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`     
               CREATE TABLE produtos (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    merchant_id uuid REFERENCES merchants(id) ON DELETE CASCADE,
                    codigo_interno TEXT DEFAULT '0000',
                    categoria_id INT REFERENCES categoria_produtos(id) ON DELETE SET NULL,
                    grupo_id INT REFERENCES grupos(id) ON DELETE SET NULL,
                    descricao TEXT NOT NULL,
                    ncm TEXT,
                    cest TEXT,
                    cst TEXT,
                    cod_barra TEXT,
                    imagem_produto TEXT,
                    imp_comanda1 BOOLEAN DEFAULT FALSE,
                    imp_comanda2 BOOLEAN DEFAULT FALSE,
                    tam_unico BOOLEAN DEFAULT FALSE,
                    fracionado BOOLEAN DEFAULT FALSE,
                    tipo_de_venda CHAR(1),
                    obs_na_venda BOOLEAN DEFAULT FALSE,
                    forma_de_venda TEXT,
                    taxa_de_viagem DECIMAL,
                    desconto DECIMAL,
                    validade INT,
                    acumula_quanto INT,
                    quantidade_de_pontos_para_resgatar INT,
                    cardapio_dia BOOLEAN DEFAULT FALSE,
                    qtd_base INT,
                    qtd_guarnicao INT,
                    qtd_carnes INT,
                    item_resgatavel BOOLEAN DEFAULT FALSE,
                    aculta_tablet BOOLEAN DEFAULT FALSE,
                    ultiliza_produto_balanca BOOLEAN DEFAULT FALSE,
                    ativo BOOLEAN DEFAULT TRUE
                );`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists produtos`)
    }

}
