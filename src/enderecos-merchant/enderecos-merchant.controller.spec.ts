import { Test, TestingModule } from '@nestjs/testing';
import { EnderecosMerchantController } from './enderecos-merchant.controller';
import { EnderecosMerchantService } from './enderecos-merchant.service';

describe('EnderecosMerchantController', () => {
  let controller: EnderecosMerchantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnderecosMerchantController],
      providers: [EnderecosMerchantService],
    }).compile();

    controller = module.get<EnderecosMerchantController>(EnderecosMerchantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
