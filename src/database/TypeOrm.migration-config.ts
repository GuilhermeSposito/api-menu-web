import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { Admin as AdminEntity } from "./entities/admin.entity";
import { Cidades } from "./entities/cidade.entity";
import { Merchant } from "./entities/merchant.entity";
import { EnderecosMerchant } from "./entities/enderecos.merchant.entity";
import { DocumentoMerchant } from "./entities/documento.merchant.entity";
import { TelefoneMerchant } from "./entities/telefone.merchant.entity";

config();

const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    entities: [
        AdminEntity,
        Cidades,
        Merchant,
        EnderecosMerchant,
        DocumentoMerchant,
        TelefoneMerchant
    ],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false
}

export default new DataSource(dataSourceOptions);