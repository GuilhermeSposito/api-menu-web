import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Merchant } from "./merchant.entity";
import { Cidades } from "./cidade.entity";

@Entity({ name: "enderecos_merchant" })
export class EnderecosMerchant {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Merchant, (merchant) => merchant.enderecos_merchant)
    @JoinColumn({ name: "merchant_id" })
    merchant: Merchant

    @ManyToOne(() => Cidades, (cidades) => cidades.enderecos)
    @JoinColumn({ name: "cidade_id" })
    cidade: Cidades

    @Column({ name: "rua" })
    rua: string

    @Column({ name: "numero" })
    numero: string

    @Column({ name: "bairro" })
    bairro: string

    @Column({ name: "cep" })
    cep: string

    @Column({ name: "uf" })
    uf: string


}