import { Cidades } from "src/database/entities/cidade.entity";
import { EnderecosMerchant } from "src/database/entities/enderecos.merchant.entity";

export class MerchantPayLoad {

    id: string;
    email: string;
    razaoSocial: string;
    ImagemLogo: string;
    NomeFantasia: string;
    endereco: string;
    numero: string;
    enderecos: EnderecosMerchant[]
    uf: string;
    cep: string;
    celular: string;
    telefone: string;
    cnpj: string;
    inscricaoEstadual: string;
    cnae: string;
    inscricaoMunicipal: string;
    marcaDepartamento: string;
    legendaDoVoluma: string;
    ativo: boolean;
}