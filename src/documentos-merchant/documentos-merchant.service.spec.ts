import { Test, TestingModule } from '@nestjs/testing';
import { DocumentosMerchantService } from './documentos-merchant.service';

describe('DocumentosMerchantService', () => {
  let service: DocumentosMerchantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentosMerchantService],
    }).compile();

    service = module.get<DocumentosMerchantService>(DocumentosMerchantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
