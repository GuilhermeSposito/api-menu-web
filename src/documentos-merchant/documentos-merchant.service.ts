import { Injectable } from '@nestjs/common';
import { DocumentoMerchantRepository } from './documento.repository';

@Injectable()
export class DocumentosMerchantService {
    constructor(private readonly documentosMerchantRepository: DocumentoMerchantRepository) { }
}
