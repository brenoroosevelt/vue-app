export default class Pessoa {
  constructor(id, nome) {
    this._id = id;
    this._nome = nome;
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

  toBackend() {
    return { id: this._id, nome: this._nome}
  }

  static fromBackend(data) {
    return new Pessoa(data.id, data.nome)
  }
}
