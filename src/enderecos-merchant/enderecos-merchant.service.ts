import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { EnderecosMerchant } from 'src/database/entities/enderecos.merchant.entity';
import { EnderecoMerchantRepository } from './enderecos.merchant.repository';
import { Merchant } from 'src/database/entities/merchant.entity';
import { MerchantsService } from 'src/merchants/merchants.service';
import { CreateEnderecosMerchantDto } from './dtos/endereco.create.dto';
import { Cidades } from 'src/database/entities/cidade.entity';
import { ReturnSuccess } from 'src/utils/return.sucess.api';
import { UpdateEnderecosMerchantDto } from './dtos/enderecos.update.dto';
import { v4 as uuid, validate as IsUUID } from 'uuid';

@Injectable()
export class EnderecosMerchantService {
    constructor(private readonly enderecosMerchantRepository: EnderecoMerchantRepository, private readonly merchantService: MerchantsService) { }


    async create(merchant: Merchant, enderecoDto: CreateEnderecosMerchantDto) {
        const newEndereco: EnderecosMerchant = this.enderecosMerchantRepository.create(enderecoDto)
        const cidade: Cidades = new Cidades()
        cidade.id = 1
        cidade.numCidade = 3548906
        cidade.descricao = "São Carlos"


        newEndereco.merchant = await this.merchantService.retornaMerchant(merchant.email);
        newEndereco.cidade = cidade

        await this.enderecosMerchantRepository.save(newEndereco)

        return new ReturnSuccess(HttpStatus.CREATED, true, "endereco criado com sucesso")
    }

    async remove(merchant: Merchant, idDoEndereco: string) {
        const endereco: EnderecosMerchant | null = await this.enderecosMerchantRepository.findOne({ where: { id: idDoEndereco, merchant: { id: merchant.id } } })
        if (!endereco) {
            return new ReturnSuccess(HttpStatus.NOT_FOUND, false, "endereco não encontrado")
        }
        await this.enderecosMerchantRepository.remove(endereco)
        return new ReturnSuccess(HttpStatus.OK, true, "endereco removido com sucesso")
    }

    async retornaEnderecos(merchant: Merchant) {
        const enderecos: EnderecosMerchant[] = await this.enderecosMerchantRepository.find({ where: { merchant: { id: merchant.id } }, relations: ["cidade"] })

        if (!enderecos) {
            return new ReturnSuccess(HttpStatus.NOT_FOUND, false, "nenhum endereco encontrado")
        }

        return enderecos
    }

    async retornaEnderecoPorId(merchant: Merchant, idDoEndereco: string) {
        if (!IsUUID(idDoEndereco)) {
            throw new BadRequestException("uuid informado não é valido")
        }

        const endereco: EnderecosMerchant | null = await this.enderecosMerchantRepository.findOne({ where: { id: idDoEndereco, merchant: { id: merchant.id } }, relations: ["cidade"] })
        if (!endereco) {
            return new ReturnSuccess(HttpStatus.NOT_FOUND, false, "endereco não encontrado")
        }
        return endereco
    }

    async update(merchant: Merchant, idDoEndereco: string, enderecoDto: UpdateEnderecosMerchantDto) {

        if (!IsUUID(idDoEndereco)) {
            throw new BadRequestException("uuid informado não é valido")
        }

        const endereco: EnderecosMerchant | null = await this.enderecosMerchantRepository.findOne({ where: { id: idDoEndereco, merchant: { id: merchant.id } } })
        if (!endereco) {
            return new ReturnSuccess(HttpStatus.NOT_FOUND, false, "endereco não encontrado")
        }

        const newEndereco: EnderecosMerchant = this.enderecosMerchantRepository.create(enderecoDto)
        const cidade: Cidades = new Cidades()
        cidade.id = 1
        cidade.numCidade = 3548906
        cidade.descricao = "São Carlos"


        newEndereco.merchant = await this.merchantService.retornaMerchant(merchant.email);
        newEndereco.cidade = cidade

        await this.enderecosMerchantRepository.update({ id: idDoEndereco }, newEndereco)

        return new ReturnSuccess(HttpStatus.OK, true, "endereco alterado com sucesso")
    }
}
