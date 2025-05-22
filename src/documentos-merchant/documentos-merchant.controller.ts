import { Controller } from '@nestjs/common';
import { DocumentosMerchantService } from './documentos-merchant.service';

@Controller('documentos-merchant')
export class DocumentosMerchantController {
  constructor(private readonly documentosMerchantService: DocumentosMerchantService) {}
}
