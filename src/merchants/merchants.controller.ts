import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { User } from 'src/admins/admin.decorator';
import { MerchantDto } from './dtos/merchant.create.dto';
import { Admin } from 'src/database/entities/admin.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { MerchantPayLoad } from './dtos/merchant.paylod.dto';

@UseGuards(AuthGuard)
@Controller('merchants')
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) { }

  @Post('create')
  async createMerchan(@User() admin: Admin, @Body() createMerchantDto: MerchantDto) {
    return await this.merchantsService.createMerchant(createMerchantDto, admin);
  }

  @Get("details")
  async detalhaMerchant(@User() merchant: MerchantPayLoad) {
    return merchant;
  }

}
