import { Injectable } from "@nestjs/common";
import { TelefoneMerchant } from "src/database/entities/telefone.merchant.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class TelefoneMerchantRepository extends Repository<TelefoneMerchant> {
    constructor(private dataSource: DataSource) {
        super(TelefoneMerchant, dataSource.createEntityManager());
    }
}