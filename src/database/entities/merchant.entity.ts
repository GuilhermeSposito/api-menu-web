import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cidades } from "./cidade.entity";
import { EnderecosMerchant } from "./enderecos.merchant.entity";
import { DocumentoMerchant } from "./documento.merchant.entity";

@Entity({ name: 'merchants' })
export class Merchant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "email", unique: true, nullable: true })
    email: string;

    @Column({ name: "senha", nullable: false })
    senha: string;

    @Column({ name: "razao_social", nullable: false })
    razaoSocial: string;

    @Column({ name: "imagem_logo", nullable: true })
    ImagemLogo: string;

    @Column({ name: "nome_fantasia", nullable: false })
    NomeFantasia: string;

    @OneToMany(() => EnderecosMerchant, (enderecos) => enderecos.merchant)
    enderecos_merchant: EnderecosMerchant[]

    @OneToMany(() => DocumentoMerchant, (documentos) => documentos.merchant)
    documentos: []

    @Column({ name: "celular", nullable: false })
    celular: string;

    @Column({ name: "telefone", nullable: false })
    telefone: string;

    @Column({ name: "marca_departamento", nullable: true })
    marcaDepartamento: string;

    @Column({ name: "legenda_do_volume", nullable: true })
    legendaDoVoluma: string;

    @Column({ name: "ativo", nullable: false, default: false })
    ativo: boolean;
}