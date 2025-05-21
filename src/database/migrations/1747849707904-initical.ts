import { MigrationInterface, QueryRunner } from "typeorm";

export class Initical1747849707904 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `)

        queryRunner.query(`
                 CREATE TABLE admins (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    email TEXT NOT NULL UNIQUE,
                    senha TEXT,
                    is_admin bool DEFAULT FALSE
                );

                CREATE TABLE cidades (
                    id SERIAL PRIMARY KEY,
                    num int NOT NULL, 
                    descricao TEXT NOT NULL
                );

                CREATE TABLE tipo_negocios (
                    id SERIAL PRIMARY KEY,
                    descricao TEXT NOT NULL
                );

                CREATE TABLE categorias (
                    id SERIAL PRIMARY KEY,
                    descricao TEXT NOT NULL
                );

                CREATE TABLE merchants (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    email TEXT NOT NULL,
                    senha TEXT,
                    razao_social TEXT NOT NULL,
                    nome_fantasia TEXT,
                    endereco TEXT,
                    numero TEXT,
                    cidade_id INT REFERENCES cidades(id) ON DELETE SET NULL,
                    uf CHAR(2),
                    cep VARCHAR(10),
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

                CREATE TABLE tipo_negocios_merchant (
                    id SERIAL PRIMARY KEY,
                    id_merchant UUID REFERENCES merchants(id) ON DELETE CASCADE,
                    id_tipo_negocio INT REFERENCES tipo_negocios(id) ON DELETE CASCADE
                );

                CREATE TABLE familia_grupo (
                    id SERIAL PRIMARY KEY,
                    merchant_id UUID REFERENCES merchants(id) ON DELETE CASCADE,
                    descricao TEXT DEFAULT 'GERAL'
                );

                CREATE TABLE grupos (
                    id SERIAL PRIMARY KEY,
                    merchant_id uuid REFERENCES merchants(id) ON DELETE CASCADE,
                    codigo_interno TEXT,
                    familia_grupo_id INT REFERENCES familia_grupo(id) ON DELETE SET NULL,
                    ultilizar_carro_chefe BOOLEAN DEFAULT FALSE
                );

                CREATE TABLE produtos (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    merchant_id uuid REFERENCES merchants(id) ON DELETE CASCADE,
                    codigo_interno TEXT DEFAULT '0000',
                    categoria_id INT REFERENCES categorias(id) ON DELETE SET NULL,
                    grupo_id INT REFERENCES grupos(id) ON DELETE SET NULL,
                    descricao TEXT NOT NULL,
                    ncm TEXT,
                    cest TEXT,
                    cst TEXT,
                    cod_barra TEXT,
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
                    ultiliza_produto_balanca BOOLEAN DEFAULT FALSE
                );

                CREATE TABLE precos_produtos (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    id_produto uuid REFERENCES produtos(id) ON DELETE CASCADE,
                    descricao_tam TEXT,
                    custo_insumos DECIMAL,
                    custo_real DECIMAL,
                    preco_sujerido DECIMAL,
                    porcentagem_lucro DECIMAL,
                    valor DECIMAL
                );

            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table if exists precos_produtos;
                drop table if exists produtos;
                drop table if exists produtos;
                drop table if exists tipo_negocios_merchant;
                drop table if exists grupos;
                drop table if exists familia_grupo;
                drop table if exists merchants;
                drop table if exists categorias;
                drop table if exists cidades;
                drop table if exists admins;
            `)
    }

}
