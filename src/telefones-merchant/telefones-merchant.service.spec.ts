import { Test, TestingModule } from '@nestjs/testing';
import { TelefonesMerchantService } from './telefones-merchant.service';

describe('TelefonesMerchantService', () => {
  let service: TelefonesMerchantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelefonesMerchantService],
    }).compile();

    service = module.get<TelefonesMerchantService>(TelefonesMerchantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
