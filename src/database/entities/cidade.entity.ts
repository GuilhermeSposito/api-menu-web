import { Column, Entity, JoinColumn, NumericType, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Merchant } from "./merchant.entity";
import { EnderecosMerchant } from "./enderecos.merchant.entity";

@Entity({ name: "cidades" })
export class Cidades {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ name: "num", nullable: false })
    numCidade: number;

    @Column({ name: "descricao", nullable: false })
    descricao: string;

    @OneToMany(() => EnderecosMerchant, (enderecos) => enderecos.cidade, { onDelete: "CASCADE" })
    enderecos: EnderecosMerchant[]

}