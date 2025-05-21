import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';
import { AuthReponseDto } from './dto/auth.dto';
import { LoginDto } from './dto/user.dto.login';
import { Admin } from 'src/database/entities/admin.entity';
import { MessageEvent } from 'http';

@Injectable()
export class AuthService {
    private jwtExpiresInSeconds: number;
    constructor(private readonly adminService: AdminsService, private readonly jwtService: JwtService, private readonly configService: ConfigService) {
        this.jwtExpiresInSeconds = parseInt(this.configService.get<string>("JWT_EXPIRATION")!, 10)
    }

    async signIn(loginDto: LoginDto): Promise<AuthReponseDto> {
        if (loginDto.is_admin) {
            const AdminExiste: boolean = await this.adminService.ExisteAdmin({ email: loginDto.email })

            if (!AdminExiste) {
                throw new UnauthorizedException({ success: false, message: "Email ou Senha incorreto" })
            }

            const verificaSenha: Boolean = await this.adminService.verificaSenha(loginDto)

            if (!verificaSenha)
                throw new UnauthorizedException({ success: false, message: "Email ou Senha incorreto" })

            const adminEncontrado: Admin = await this.adminService.RetornaAdmin(loginDto.email)

            const payload = { id: adminEncontrado.id, email: adminEncontrado.email, isAdmin: adminEncontrado.isAdmin }
            const token = this.jwtService.sign(payload, {
                secret: this.configService.get<string>('JWT_SECRET'),
                expiresIn: this.jwtExpiresInSeconds
            })

            return {
                sucess: true,
                token: token,
                expiresIn: this.jwtExpiresInSeconds
            }

        } else {
            throw new UnauthorizedException({}, "Email ou Senha incorreto")
        }
    }
}
