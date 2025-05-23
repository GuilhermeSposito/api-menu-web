import { BadRequestException, Injectable } from '@nestjs/common';
import { TelefoneMerchantRepository } from './telefones.repository';
import { MerchantRepository } from 'src/merchants/merchantRepository';
import { Merchant } from 'src/database/entities/merchant.entity';
import { CreateTelefoneDto } from './dtos/create-telefone.dto';
import { TelefoneMerchant } from 'src/database/entities/telefone.merchant.entity';
import { ReturnSuccess } from 'src/utils/return.sucess.api';
import { MerchantsService } from 'src/merchants/merchants.service';
import { validate } from 'uuid';

@Injectable()
export class TelefonesMerchantService {
    constructor(private readonly telefoneMerchantRepository: TelefoneMerchantRepository, private readonly merchantService: MerchantsService) { }

    async create(merchant: Merchant, telefone: CreateTelefoneDto) {
        const newTelefone: TelefoneMerchant = this.telefoneMerchantRepository.create({
            tipo: telefone.tipo,
            telefone: telefone.numero
        })

        newTelefone.merchant = await this.merchantService.retornaMerchant(merchant.email);

        await this.telefoneMerchantRepository.save(newTelefone)

        return new ReturnSuccess(201, true, "telefone criado com sucesso")
    }

    async remove(merchant: Merchant, telefone: string) {
        if (!validate(telefone)) {
            throw new BadRequestException("id uuid de tipo inválido")
        }

        const telefoneMerchantPeloId: TelefoneMerchant | null = await this.telefoneMerchantRepository.findOne({ where: { id: telefone }, relations: { merchant: true } })

        if (!telefoneMerchantPeloId) {
            throw new BadRequestException("Telefone não encontrado")
        }

        const merChantValido: Merchant = await this.merchantService.retornaMerchant(merchant.email);

        if (telefoneMerchantPeloId.merchant.id !== merChantValido.id) {
            throw new BadRequestException("Esse telefone não pertence a esse merchant")
        }

        await this.telefoneMerchantRepository.remove(telefoneMerchantPeloId)
        return new ReturnSuccess(200, true, "Telefone deletado com sucesso")
    }
}
