class Usuario {
  final int idUsuario;
  final String nome;
  final String email;
  final String senhaHash;
  final DateTime dataCadastro;

  Usuario({
    required this.idUsuario,
    required this.nome,
    required this.email,
    required this.senhaHash,
    required this.dataCadastro,
  });
}
