import { Module } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { MerchantsController } from './merchants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from 'src/database/entities/merchant.entity';
import { MerchantRepository } from './merchantRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  controllers: [MerchantsController],
  providers: [MerchantsService, MerchantRepository],
})
export class MerchantsModule { }
