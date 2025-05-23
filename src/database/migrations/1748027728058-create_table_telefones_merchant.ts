import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTelefonesMerchant1748027728058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table merchants drop column if exists telefone;
            alter table merchants drop column if exists celular;;

            CREATE TABLE IF NOT EXISTS telefones_merchant (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                merchant_id uuid NOT NULL,
                tipo VARCHAR(20) NOT NULL,
                telefone VARCHAR(20) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW(),
                FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS telefones_merchant;
        `);
    }

}
