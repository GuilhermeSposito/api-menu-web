import { BadRequestException, Injectable } from '@nestjs/common';
import { DocumentoMerchantRepository } from './documento.repository';
import { DocumentoMerchant } from 'src/database/entities/documento.merchant.entity';
import { Merchant } from 'src/database/entities/merchant.entity';
import { CreateDocumentoDto } from './dtos/create-documento.dto';
import { MerchantsService } from 'src/merchants/merchants.service';
import { ReturnSuccess } from 'src/utils/return.sucess.api';
import { v4 as uuid, validate as IsUUID } from 'uuid';
import { UpdateDocumentoDto } from './dtos/update-documento.dto';

@Injectable()
export class DocumentosMerchantService {
    constructor(private readonly documentosMerchantRepository: DocumentoMerchantRepository, private readonly merchantService: MerchantsService) { }

    async create(merchant: Merchant, documentoDto: CreateDocumentoDto) {
        //se chegou aqui o token é valido
        const newDoc = this.documentosMerchantRepository.create(documentoDto);
        const MerchantRetornado = await this.merchantService.retornaMerchant(merchant.email)
        newDoc.merchant = MerchantRetornado;

        await this.documentosMerchantRepository.save(newDoc)


        return new ReturnSuccess(201, true, "documento criado com sucesso")
    }

    async remove(merchant: Merchant, idDoDocumento: string) {
        if (!IsUUID(idDoDocumento))
            throw new BadRequestException("uuid invalido")

        const documento: DocumentoMerchant | null = await this.documentosMerchantRepository.findOne({ where: { id: idDoDocumento, merchant: { id: merchant.id } } })

        if (!documento) {
            return new ReturnSuccess(404, false, "documento não encontrado")
        }

        await this.documentosMerchantRepository.remove(documento)
        return new ReturnSuccess(200, true, "documento removido com sucesso")
    }

    async getAll(merchant: Merchant) {
        const documentos: DocumentoMerchant[] = await this.documentosMerchantRepository.find({ where: { merchant: { id: merchant.id } } })

        if (documentos.length == 0) {
            return new ReturnSuccess(404, false, "nenhum documento encontrado")
        }

        return documentos
    }

    async update(merchant: Merchant, idDoDocumento: string, documentoDto: UpdateDocumentoDto) {
        if (!IsUUID(idDoDocumento))
            throw new BadRequestException("uuid invalido")

        const documento: DocumentoMerchant | null = await this.documentosMerchantRepository.findOne({ where: { id: idDoDocumento, merchant: { id: merchant.id } } })

        if (!documento) {
            return new ReturnSuccess(404, false, "documento não encontrado")
        }

        await this.documentosMerchantRepository.update(documento.id, documentoDto)
        return new ReturnSuccess(200, true, "documento atualizado com sucesso")
    }
}
