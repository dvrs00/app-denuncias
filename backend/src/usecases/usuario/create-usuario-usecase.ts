import { Usuario } from "../../domain/usuario/entity/usuario";
import { UsuarioGateway } from "../../domain/usuario/gateway/usuario-gateway";
import { Usecase } from "../usecases"

export type CreateUsuarioInputDto = {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
    fotoPerfil: URL
}

export type CreateUsuarioOutputDto = {
    id: string;
}

export class CreateUsuarioUseCase implements Usecase<CreateUsuarioInputDto, CreateUsuarioOutputDto>{
    private constructor(private readonly usuarioGateway: UsuarioGateway){}

    public static create(usuarioGateway: UsuarioGateway){
        return new CreateUsuarioUseCase(usuarioGateway);
    }

    public async execute({nome, email, senha, dataNascimento, fotoPerfil}: CreateUsuarioInputDto): Promise<CreateUsuarioOutputDto>{
        const aUsuario = Usuario.create(nome, email, senha, dataNascimento, fotoPerfil);

        await this.usuarioGateway.save(aUsuario);

        const output: CreateUsuarioOutputDto = {
            id: aUsuario.id
        }

        return output;
    }
}