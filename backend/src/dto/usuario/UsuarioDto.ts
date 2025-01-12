export type UsuarioDto = {
    id: string,
    nome: string,
    email: string,
    senha?: string,
    dataCadastro: Date,
    dataNascimento: Date,
    fotoPerfil: URL,
}