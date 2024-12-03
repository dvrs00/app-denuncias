class UsuarioModel {
  final int idUsuario;
  final String nome;
  final String email;
  final String senhaHash;
  final String dataCadastro;

  UsuarioModel({
    required this.idUsuario,
    required this.nome,
    required this.email,
    required this.senhaHash,
    required this.dataCadastro,
  });

  // Método toMap
  Map<String, dynamic> toMap() {
    return {
      'idUsuario': idUsuario,
      'nome': nome,
      'email': email,
      'senhaHash': senhaHash,
      'dataCadastro': dataCadastro,
    };
  }

  // Método fromMap
  static UsuarioModel fromMap(Map<String, dynamic> map) {
    return UsuarioModel(
      idUsuario: map['idUsuario'],
      nome: map['nome'],
      email: map['email'],
      senhaHash: map['senhaHash'],
      dataCadastro: map['dataCadastro'],
    );
  }
}
