import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';
import { AuthReponseDto } from './dto/auth.dto';
import { LoginDto } from './dto/user.dto.login';
import { Admin } from 'src/database/entities/admin.entity';
import { MessageEvent } from 'http';
import { MerchantRepository } from 'src/merchants/merchantRepository';
import { MerchantsService } from 'src/merchants/merchants.service';
import { Merchant } from 'src/database/entities/merchant.entity';

@Injectable()
export class AuthService {
    private jwtExpiresInSeconds: number;
    constructor(private readonly adminService: AdminsService, private readonly jwtService: JwtService, private readonly configService: ConfigService, private readonly merchantRepository: MerchantRepository, private readonly merchantService: MerchantsService) {
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
            const verificaSenha: boolean = await this.merchantService.verificaSenhaMerchant(loginDto)

            if (!verificaSenha)
                throw new UnauthorizedException({ status: false, message: "email ou senha incorreto" })

            const { senha, ...Merchant }: Merchant = await this.merchantService.retornaMerchant(loginDto.email)
            const payload = { Merchant, isAdmin: false }
            const token = this.jwtService.sign(payload, {
                secret: this.configService.get<string>('JWT_SECRET'),
                expiresIn: this.jwtExpiresInSeconds
            })

            return {
                sucess: true,
                token: token,
                expiresIn: this.jwtExpiresInSeconds
            }
        }
    }
}
