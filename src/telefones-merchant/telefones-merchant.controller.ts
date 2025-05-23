import { Body, Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { TelefonesMerchantService } from './telefones-merchant.service';
import { User } from 'src/admins/admin.decorator';
import { Merchant } from 'src/database/entities/merchant.entity';
import { CreateTelefoneDto } from './dtos/create-telefone.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('telefones-merchant')
export class TelefonesMerchantController {
  constructor(private readonly telefonesMerchantService: TelefonesMerchantService) { }

  @Post("create")
  async createTelefone(@User() merchant: Merchant, @Body() createTelefoneDto: CreateTelefoneDto) {
    return await this.telefonesMerchantService.create(merchant, createTelefoneDto)
  }

  @Delete("delete/:id")
  async deleteTelefone(@User() merchant: Merchant, @Param("id") telefone: string) {
    return await this.telefonesMerchantService.remove(merchant, telefone)
  }
}
