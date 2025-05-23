import { Module } from '@nestjs/common';
import { DocumentosMerchantService } from './documentos-merchant.service';
import { DocumentosMerchantController } from './documentos-merchant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentoMerchant } from 'src/database/entities/documento.merchant.entity';
import { DocumentoMerchantRepository } from './documento.repository';
import { MerchantsService } from 'src/merchants/merchants.service';
import { MerchantRepository } from 'src/merchants/merchantRepository';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentoMerchant])],
  controllers: [DocumentosMerchantController],
  providers: [DocumentosMerchantService, DocumentoMerchantRepository, MerchantsService, MerchantRepository],
})
export class DocumentosMerchantModule { }
