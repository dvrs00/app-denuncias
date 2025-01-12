import { UsuarioAutenticateDto } from "../../../dto/usuario/UsuarioAutenticateDto";
import { UsuarioDto } from "../../../dto/usuario/UsuarioDto";

export interface UsuarioGateway {
    save(data: UsuarioDto): Promise<void>;
    autenticate(data: UsuarioAutenticateDto): Promise<Number>;
    list(): Promise<UsuarioDto[]>;
    verifyDuplicatedEmail(email: string): Promise<boolean>;
}
