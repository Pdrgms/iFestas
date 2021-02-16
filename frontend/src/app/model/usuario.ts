export class Usuario {
  [x: string]: any;

  idUsuario: number | undefined;
  nome: String | undefined;
  cpf: number | undefined;
  nascimento: String | undefined;
  celular: number | undefined;
  rua: String | undefined;
  numero: number | undefined;
  bairro: String | undefined;
  cidade: String | undefined;
  email: String | undefined;
  senha: String | undefined;
  nivelAcesso: number | undefined;

  constructor( idUsuario ?: number, nome ?: String, cpf ?: number, nascimento ?: String,
    celular ?: number, rua ?: String, numero ?: number, bairro ?: String, cidade ?: String,
    email ?: String, senha ?: String, nivelAcesso ?: number) {

    this.idUsuario = idUsuario;
    this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.celular = celular;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.email = email;
    this.senha = senha;
    this.nivelAcesso = nivelAcesso;

  }

}

