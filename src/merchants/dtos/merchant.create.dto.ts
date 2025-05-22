import { IsEmail, IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class MerchantDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    senha: string;

    @IsNotEmpty()
    razaoSocial: string;

    @IsNotEmpty()
    ImagemLogo: string;

    @IsNotEmpty()
    NomeFantasia: string;


    @IsNotEmpty()
    @MaxLength(20, { message: "deve ser enviado um campo com no maximo 20 caracteres" })
    celular: string;

    @IsNotEmpty()
    @MaxLength(20, { message: "deve ser enviado um campo com no maximo 20 caracteres" })
    telefone: string;


    marcaDepartamento: string;

    legendaDoVoluma: string;

}