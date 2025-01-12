    export type UsuarioProps = {
        id: string,
        nome: string,
        email: string,
        senha: string,
        dataCadastro: Date,
        dataNascimento: Date,
        fotoPerfil: URL,
    };

    export class Usuario {
        private constructor(private readonly props: UsuarioProps) {
            this.validarEmail();
            this.validarNome();
            this.validarSenha();
        }

        public static create(nome: string, email: string, senha: string, dataNascimento: Date, fotoPerfil: URL): Usuario {
            return new Usuario({
                id: crypto.randomUUID(),
                nome,
                email,
                senha,
                dataCadastro: new Date(),
                dataNascimento,
                fotoPerfil,
            });
        }
        
        public static fromExisting(props: UsuarioProps): Usuario {
            return new Usuario(props);
        }

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

        public get dataNascimento() {
            return this.props.dataNascimento;
        }

        public get fotoPerfil(){
            return this.props.fotoPerfil;
        }

        public get senha(){
            return this.props.senha;
        }

        private validarEmail(): void {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.props.email)) {
                throw new Error("E-mail inválido!");
            }
        }

        private validarNome(): void {
            if(!this.props.nome || this.props.nome.trim().length < 3) {
                throw new Error("Nome inválido! O nome precisa ter mais de 3 caracteres.")
            }
        }

        private validarSenha(): void {
            const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
        
            if (!regex.test(this.props.senha)) {
            throw new Error('A senha deve ter pelo menos 8 caracteres, com letras maiúsculas, minúsculas, um número e um caractere especial.');
            }
        }
        
        public alterarSenha(novaSenha: string) {
            if(novaSenha === this.props.senha) {
                throw new Error("A nova senha não pode ser igual a anterior. Tente outra senha!");
            }

            this.validarSenha();
        }
    }
