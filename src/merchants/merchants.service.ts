import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { MerchantRepository } from './merchantRepository';
import { MerchantDto } from './dtos/merchant.create.dto';
import { Admin } from 'src/database/entities/admin.entity';
import { compare, hash as cryptPasswordAsync } from 'bcrypt';
import { Merchant } from 'src/database/entities/merchant.entity';
import { LoginDto } from 'src/auth/dto/user.dto.login';

@Injectable()
export class MerchantsService {
    constructor(private readonly merchantRepository: MerchantRepository) { }

    async createMerchant(merchantDto: MerchantDto, admin: Admin) {
        if (!admin.isAdmin)
            throw new UnauthorizedException({ success: false, message: "esse admin não esta autorizado a criar merchants" })

        const merchantExiste = await this.merchantRepository.findOne({ where: { email: merchantDto.email } });
        if (merchantExiste)
            throw new HttpException("merchant já cadastrado com esse cnpj", HttpStatus.BAD_REQUEST);

        const hashSenha: string = await cryptPasswordAsync(merchantDto.senha, 10)
        merchantDto.senha = hashSenha;

        //criar cidades repository para poder inserir a cidade dinamicamente

        const newMerchant = await this.merchantRepository.create({
            email: merchantDto.email,
            senha: merchantDto.senha,
            razaoSocial: merchantDto.razaoSocial,
            ImagemLogo: merchantDto.ImagemLogo,
            NomeFantasia: merchantDto.NomeFantasia,
            celular: merchantDto.celular,
            telefone: merchantDto.telefone,
            marcaDepartamento: merchantDto.marcaDepartamento,
            legendaDoVoluma: merchantDto.legendaDoVoluma
        })
        if (!newMerchant)
            throw new HttpException("erro interno ao criar merchant", HttpStatus.INTERNAL_SERVER_ERROR);

        await this.merchantRepository.save(newMerchant);

        return {
            status: HttpStatus.CREATED,
            sucess: true,
            message: "sucesso ao criar merchant"
        }

    }

    async verificaSenhaMerchant(emailEsenha: LoginDto): Promise<boolean> {
        const merchantEncontrado: Merchant | null = await this.merchantRepository.findOne({ where: { email: emailEsenha.email } });

        if (!merchantEncontrado)
            return false;

        return await compare(emailEsenha.senha, merchantEncontrado.senha)
    }

    async retornaMerchant(emailMerchant: string): Promise<Merchant> {
        const merchant: Merchant | null = await this.merchantRepository.findOne({ where: { email: emailMerchant }, relations: ['enderecos_merchant', 'enderecos_merchant.cidade'] });

        return merchant ?? new Merchant()
    }

}
