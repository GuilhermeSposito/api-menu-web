import { IsNotEmpty, IsString } from "class-validator";
import { Merchant } from "src/database/entities/merchant.entity";

export class UpdateDocumentoDto {

    @IsNotEmpty()
    cnpj: string;

    @IsString()
    inscricaoEstadual: string;

    @IsString()
    cnae: string;

    @IsString()
    inscricaoMunicipal: string;
}