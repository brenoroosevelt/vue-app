import Model from './Model'

export default class Pessoa extends Model {
  constructor(id, nome) {
    this._id = id;
    this._nome = nome;
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
