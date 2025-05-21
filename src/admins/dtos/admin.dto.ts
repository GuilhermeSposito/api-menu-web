import { IsEmail, IsNotEmpty } from "class-validator";

export class AdminDto {
    @IsNotEmpty({ message: "O campo email deve ser informado" })
    @IsEmail({}, { message: "Envie um email valido" })
    email: string;

    @IsNotEmpty({ message: "O campo senha deve ser informado" })
    senha: string;
}