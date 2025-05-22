import { Test, TestingModule } from '@nestjs/testing';
import { EnderecosMerchantService } from './enderecos-merchant.service';

describe('EnderecosMerchantService', () => {
  let service: EnderecosMerchantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnderecosMerchantService],
    }).compile();

    service = module.get<EnderecosMerchantService>(EnderecosMerchantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
