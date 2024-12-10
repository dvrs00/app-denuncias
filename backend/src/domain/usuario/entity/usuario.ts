export type UsuarioProps = {
    id: string,
    nome: string,
    email: string,
    senha: string,
    dataCadastro: string,
}

export class Usuario {
    private constructor(private readonly props: UsuarioProps) {}

    public static create(nome: string, email: string, senha: string) {
        return new Usuario({
            id: crypto.randomUUID().toString(),
            nome,
            email,
            senha,
            dataCadastro: Date.now().toString(),
        }); 
    }

    public static with(props: UsuarioProps) {
        return new Usuario(props);
    }

     // getters 

     public get id() {
        return this.props.id;
     }

     public get nome() {
        return this.props.nome;
     }

     public get email() {
        return this.props.email;
     }

     public get dataCadastro() {
        return this.props.dataCadastro;
     }

    // regra de negócio
    
}



