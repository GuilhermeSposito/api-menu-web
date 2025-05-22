import { Injectable } from "@nestjs/common";
import { EnderecosMerchant } from "src/database/entities/enderecos.merchant.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class EnderecoMerchantRepository extends Repository<EnderecosMerchant> {
    constructor(private dataSource: DataSource) {
        super(EnderecosMerchant, dataSource.createEntityManager());
    }
}