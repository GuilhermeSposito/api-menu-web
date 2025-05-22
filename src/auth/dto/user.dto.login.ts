import { IsBoolean, IsNotEmpty } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    senha: string

    is_admin: boolean
}