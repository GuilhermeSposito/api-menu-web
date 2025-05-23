import { IsNotEmpty, IsString } from "class-validator";
import { Merchant } from "src/database/entities/merchant.entity";

export class CreateTelefoneDto {
    ddd: string;

    @IsNotEmpty()
    @IsString()
    numero: string;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    merchant: Merchant

}