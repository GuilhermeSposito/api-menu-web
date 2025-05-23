import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Merchant } from "./merchant.entity";

@Entity({ name: 'documentos_merchant' })
export class DocumentoMerchant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Merchant, (merchant) => merchant.documentos, { onDelete: "CASCADE" })
    @JoinColumn({ name: "merchant_id" })
    merchant: Merchant;

    @Column({ name: "cnpj" })
    cnpj: string;

    @Column({ name: "inscricao_estadual" })
    inscricaoEstadual: string;

    @Column({ name: "cnae" })
    cnae: string;

    @Column({ name: "inscricao_municipal" })
    inscricaoMunicipal: string;
}