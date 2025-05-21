import { HttpException, HttpStatus, Injectable, NotAcceptableException } from '@nestjs/common';
import { AdminRepository } from './adminRepository';
import { AdminDto } from './dtos/admin.dto';
import { Admin } from 'src/database/entities/admin.entity';
import { hash as bcryptHashAsync, compare } from 'bcrypt'


@Injectable()
export class AdminsService {
    constructor(private readonly adminsRepository: AdminRepository) { }

    async Create(adminDto: AdminDto) {
        const adminEncontrado: Admin | null = await this.adminsRepository.findOne({
            where: { email: adminDto.email }
        })

        if (adminEncontrado)
            throw new HttpException("email já existe", HttpStatus.BAD_REQUEST)

        const hashSenha: string = await bcryptHashAsync(adminDto.senha, 10)

        const novoAdmin: Admin = await this.adminsRepository.create({
            email: adminDto.email,
            senha: hashSenha
        })

        await this.adminsRepository.save(novoAdmin)
    }

    async ExisteAdmin(adminEnviado: { email: string }): Promise<boolean> {
        return await this.adminsRepository.exists({ where: { email: adminEnviado.email } })
    }

    async verificaSenha(AdminEnviado: { email: string, senha: string }): Promise<boolean> {
        const AdminEncontrado: Admin | null = await this.adminsRepository.findOne({ where: { email: AdminEnviado.email } });

        if (AdminEncontrado)
            return await compare(AdminEnviado.senha, AdminEncontrado?.senha)
        else
            return false
    }

    async RetornaAdmin(emailEnviado: string): Promise<Admin> {
        return await this.adminsRepository.findOne({ where: { email: emailEnviado } }) ?? { id: "", email: "", senha: "", isAdmin: false }
    }

    async retornaAdminLogado(admin: Admin) {
        return admin
    }
}
