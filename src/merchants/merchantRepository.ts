import { Injectable } from "@nestjs/common";
import { Merchant } from "src/database/entities/merchant.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class MerchantRepository extends Repository<Merchant> {
    constructor(private dataSource: DataSource) {
        super(Merchant, dataSource.createEntityManager());
    }
}