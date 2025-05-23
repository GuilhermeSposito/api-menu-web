import { Test, TestingModule } from '@nestjs/testing';
import { TelefonesMerchantController } from './telefones-merchant.controller';
import { TelefonesMerchantService } from './telefones-merchant.service';

describe('TelefonesMerchantController', () => {
  let controller: TelefonesMerchantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelefonesMerchantController],
      providers: [TelefonesMerchantService],
    }).compile();

    controller = module.get<TelefonesMerchantController>(TelefonesMerchantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
