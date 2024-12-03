class Denuncia {
  final int idDenuncia;
  final int idUsuarioAutor;
  final String titulo;
  final String mensagem;
  final String localizacao;
  final String status;
  final DateTime dataCriacao;
  final DateTime dataUltimaAtualizacao;

  Denuncia({
    required this.idDenuncia,
    required this.idUsuarioAutor,
    required this.titulo,
    required this.mensagem,
    required this.localizacao,
    required this.status,
    required this.dataCriacao,
    required this.dataUltimaAtualizacao,
  });
}
