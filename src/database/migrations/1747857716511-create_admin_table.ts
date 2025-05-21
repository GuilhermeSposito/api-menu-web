import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAdminTable1747857716511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `)

        queryRunner.query(`
                 CREATE TABLE admins (
                    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
                    email TEXT NOT NULL UNIQUE,
                    senha TEXT,
                    is_admin bool DEFAULT FALSE
                );

                  insert into admins(email, senha, is_admin) values ('guilherme@syslogica.com.br', '$2b$10$MeEAERmJlL7EAsZ/8yWTGuRm6BftVyVjIcXuz0eMHeTlMiJbS/3fK', true)
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table if exists admins`)
    }

}
