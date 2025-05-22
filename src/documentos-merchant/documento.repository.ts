import { Injectable } from "@nestjs/common";
import { DocumentoMerchant } from "src/database/entities/documento.merchant.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class DocumentoMerchantRepository extends Repository<DocumentoMerchant> {
    constructor(private dataSource: DataSource) {
        super(DocumentoMerchant, dataSource.createEntityManager());
    }
}