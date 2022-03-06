export default class Pessoa {
  constructor(id, nome) {
    this._id = undefined;
    this._nome = undefined;

    this.id = id
    this.nome = nome
  }

  static fromBackEnd(data) {
    return new Pessoa(data.id, data.nome)
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get nome() {
    return this._nome;
  }

  set nome(value) {
    this._nome = value;
  }
}
