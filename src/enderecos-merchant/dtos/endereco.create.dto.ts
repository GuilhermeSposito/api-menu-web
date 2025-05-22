import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateEnderecosMerchantDto {

    merchant_id: string;

    @IsNumber()
    cidade_id: number

    @IsNotEmpty()
    rua: string

    @IsNotEmpty()
    numero: string

    @IsNotEmpty()
    bairro: string

    @IsNotEmpty()
    @MaxLength(10)
    cep: string

    @IsNotEmpty()
    @MaxLength(2)
    uf: string

}