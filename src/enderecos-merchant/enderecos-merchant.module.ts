import { Module } from '@nestjs/common';
import { EnderecosMerchantService } from './enderecos-merchant.service';
import { EnderecosMerchantController } from './enderecos-merchant.controller';

@Module({
  controllers: [EnderecosMerchantController],
  providers: [EnderecosMerchantService],
})
export class EnderecosMerchantModule {}
