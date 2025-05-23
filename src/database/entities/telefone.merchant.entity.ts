import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Merchant } from "./merchant.entity";

@Entity({ name: "telefones_merchant" })
export class TelefoneMerchant {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Merchant, (merchant) => merchant.telefones)
    @JoinColumn({ name: "merchant_id" })
    merchant: Merchant

    @Column({ name: "tipo", type: "varchar", length: 20 })
    tipo: string;

    @Column({ name: "telefone", type: "varchar", length: 20 })
    telefone: string;

    @Column({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at: Date;
}