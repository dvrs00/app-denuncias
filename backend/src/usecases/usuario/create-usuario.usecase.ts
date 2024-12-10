import { Usuario } from "../../domain/usuario/entity/usuario";
import { UsuarioGateway } from "../../domain/usuario/gateway/usuario.gateway";
import { Usecase } from "../usercases"

export type CreateUsuarioInputDto = {
    nome: string;
    email: string;
    senha: string;
}

export type CreateUsuarioOutputDto = {
    id: string;
}

export class CreateUsuarioUseCase implements Usecase<CreateUsuarioInputDto, CreateUsuarioOutputDto>{
    private constructor(private readonly usuarioGateway: UsuarioGateway){}

    public static create(usuarioGateway: UsuarioGateway){
        return new CreateUsuarioUseCase(usuarioGateway);
    }

    public async execute({nome, email,senha}: CreateUsuarioInputDto): Promise<CreateUsuarioOutputDto>{
        const aUsuario = Usuario.create(nome, email, senha);

        await this.usuarioGateway.save(aUsuario);

        const output: CreateUsuarioOutputDto = {
            id: aUsuario.id
        }

        return output;
    }
}