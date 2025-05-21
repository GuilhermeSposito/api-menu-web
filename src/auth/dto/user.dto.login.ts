import { IsBoolean, IsNotEmpty } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    senha: string

    @IsBoolean()
    is_admin: boolean
}