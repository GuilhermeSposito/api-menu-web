import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { DocumentosMerchantService } from './documentos-merchant.service';
import { User } from 'src/admins/admin.decorator';
import { CreateDocumentoDto } from './dtos/create-documento.dto';
import { Merchant } from 'src/database/entities/merchant.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateDocumentoDto } from './dtos/update-documento.dto';

@UseGuards(AuthGuard)
@Controller('documentos-merchant')
export class DocumentosMerchantController {
  constructor(private readonly documentosMerchantService: DocumentosMerchantService) { }

  @Post('create')
  async createDoc(@User() merchant: Merchant, @Body() createDocDto: CreateDocumentoDto) {
    return await this.documentosMerchantService.create(merchant, createDocDto)
  }

  @Delete('delete/:id')
  async deleteDoc(@User() merchant: Merchant, @Param('id') idDoDocumento: string) {
    return await this.documentosMerchantService.remove(merchant, idDoDocumento)
  }

  @Get("/")
  async getAllDocs(@User() merchant: Merchant) {
    return await this.documentosMerchantService.getAll(merchant)
  }

  @Patch('update/:id')
  async updateDoc(@User() merchant: Merchant, @Param('id') idDoDocumento: string, @Body() updateDocDto: UpdateDocumentoDto) {
    return await this.documentosMerchantService.update(merchant, idDoDocumento, updateDocDto)
  }
}
