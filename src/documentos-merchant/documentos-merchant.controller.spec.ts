import { Test, TestingModule } from '@nestjs/testing';
import { DocumentosMerchantController } from './documentos-merchant.controller';
import { DocumentosMerchantService } from './documentos-merchant.service';

describe('DocumentosMerchantController', () => {
  let controller: DocumentosMerchantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentosMerchantController],
      providers: [DocumentosMerchantService],
    }).compile();

    controller = module.get<DocumentosMerchantController>(DocumentosMerchantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
