import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "admins" })
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: 'email', unique: true, nullable: false })
    email: string;

    @Column({ name: "senha", nullable: false })
    senha: string;

    @Column({ name: "is_admin", default: false })
    isAdmin: boolean;
}