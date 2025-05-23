import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './database/db.module';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { MerchantsModule } from './merchants/merchants.module';
import { EnderecosMerchantModule } from './enderecos-merchant/enderecos-merchant.module';
import { DocumentosMerchantModule } from './documentos-merchant/documentos-merchant.module';
import { TelefonesMerchantModule } from './telefones-merchant/telefones-merchant.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    AdminsModule,
    AuthModule,
    MerchantsModule,
    EnderecosMerchantModule,
    DocumentosMerchantModule,
    TelefonesMerchantModule
  ]
})
export class AppModule { }
