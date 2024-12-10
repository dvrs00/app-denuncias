import { Usuario } from "../entity/usuario";

export interface UsuarioGateway {
    save(usuario: Usuario): Promise<void>;
    list(): Promise<Usuario[]>;
}