import { Module } from '@nestjs/common';
import { TelefonesMerchantService } from './telefones-merchant.service';
import { TelefonesMerchantController } from './telefones-merchant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefoneMerchant } from 'src/database/entities/telefone.merchant.entity';
import { TelefoneMerchantRepository } from './telefones.repository';
import { MerchantsService } from 'src/merchants/merchants.service';
import { MerchantRepository } from 'src/merchants/merchantRepository';

@Module({
  imports: [TypeOrmModule.forFeature([TelefoneMerchant])],
  controllers: [TelefonesMerchantController],
  providers: [TelefonesMerchantService, TelefoneMerchantRepository, MerchantsService, MerchantRepository],
})
export class TelefonesMerchantModule { }
