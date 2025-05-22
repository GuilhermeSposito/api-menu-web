import { Module } from '@nestjs/common';
import { EnderecosMerchantService } from './enderecos-merchant.service';
import { EnderecosMerchantController } from './enderecos-merchant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecosMerchant } from 'src/database/entities/enderecos.merchant.entity';
import { EnderecoMerchantRepository } from './enderecos.merchant.repository';
import { MerchantsService } from 'src/merchants/merchants.service';
import { MerchantRepository } from 'src/merchants/merchantRepository';

@Module({
  imports: [TypeOrmModule.forFeature([EnderecosMerchant])],
  controllers: [EnderecosMerchantController],
  providers: [EnderecosMerchantService, EnderecoMerchantRepository, MerchantsService, MerchantRepository],
})
export class EnderecosMerchantModule { }
