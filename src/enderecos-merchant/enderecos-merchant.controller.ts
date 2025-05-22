import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { EnderecosMerchantService } from './enderecos-merchant.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/admins/admin.decorator';
import { Merchant } from 'src/database/entities/merchant.entity';
import { CreateEnderecosMerchantDto } from './dtos/endereco.create.dto';
import { UpdateEnderecosMerchantDto } from './dtos/enderecos.update.dto';

@UseGuards(AuthGuard)
@Controller('enderecos-merchant')
export class EnderecosMerchantController {
  constructor(private readonly enderecosMerchantService: EnderecosMerchantService) { }

  @Post("create")
  async Create(@User() merchant: Merchant, @Body() createEnderecoDto: CreateEnderecosMerchantDto) {
    return await this.enderecosMerchantService.create(merchant, createEnderecoDto);
  }

  @Delete(":id")
  async Delete(@User() merchant: Merchant, @Param("id") id: string) {
    return await this.enderecosMerchantService.remove(merchant, id);
  }

  @Get("enderecos")
  async GetAll(@User() merchant: Merchant) {
    return await this.enderecosMerchantService.retornaEnderecos(merchant);
  }

  @Get("enderecos/:id")
  async GetById(@User() merchant: Merchant, @Param("id") id: string) {
    return await this.enderecosMerchantService.retornaEnderecoPorId(merchant, id);
  }

  @Patch("enderecos/:id")
  async Update(@User() merchant: Merchant, @Param("id") id: string, @Body() updateEnderecoDto: UpdateEnderecosMerchantDto) {
    return await this.enderecosMerchantService.update(merchant, id, updateEnderecoDto);
  }

}
