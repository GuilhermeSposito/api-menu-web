import { Module } from '@nestjs/common';
import { DocumentosMerchantService } from './documentos-merchant.service';
import { DocumentosMerchantController } from './documentos-merchant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentoMerchant } from 'src/database/entities/documento.merchant.entity';
import { DocumentoMerchantRepository } from './documento.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentoMerchant])],
  controllers: [DocumentosMerchantController],
  providers: [DocumentosMerchantService, DocumentoMerchantRepository],
})
export class DocumentosMerchantModule { }
