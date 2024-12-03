class DenunciaModel {
  final int idDenuncia;
  final int idUsuarioAutor;
  final String titulo;
  final String mensagem;
  final String localizacao;
  final String status;
  final String dataCriacao;
  final String dataUltimaAtualizacao;

  DenunciaModel({
    required this.idDenuncia,
    required this.idUsuarioAutor,
    required this.titulo,
    required this.mensagem,
    required this.localizacao,
    required this.status,
    required this.dataCriacao,
    required this.dataUltimaAtualizacao,
  });

  Map<String, dynamic> toMap() {
    return {
      'idDenuncia': idDenuncia,
      'idUsuarioAutor': idUsuarioAutor,
      'titulo': titulo,
      'mensagem': mensagem,
      'localizacao': localizacao,
      'status': status,
      'dataCriacao': dataCriacao,
      'dataUltimaAtualizacao': dataUltimaAtualizacao,
    };
  }

  static DenunciaModel fromMap(Map<String, dynamic> map) {
    return DenunciaModel(
      idDenuncia: map['idDenuncia'],
      idUsuarioAutor: map['idUsuarioAutor'],
      titulo: map['titulo'],
      mensagem: map['mensagem'],
      localizacao: map['localizacao'],
      status: map['status'],
      dataCriacao: map['dataCriacao'],
      dataUltimaAtualizacao: map['dataUltimaAtualizacao'],
    );
  }
}
