import { Controller } from '@nestjs/common';
import { EnderecosMerchantService } from './enderecos-merchant.service';

@Controller('enderecos-merchant')
export class EnderecosMerchantController {
  constructor(private readonly enderecosMerchantService: EnderecosMerchantService) {}
}
