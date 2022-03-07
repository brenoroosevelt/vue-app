export default class Pessoa {
  constructor(id, nome, created_at) {
    this.id = id
    this.nome = nome
    this.created_at = created_at
  }

  static fromData(data) {
    return new Pessoa(data.id, data.nome, data.created_at)
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

  /**
   * @return Date
   */
  get created_at() {
    //return this._created_at.toLocaleString('pt-Br')
    return this._created_at
  }

  /**
   *
   * @param value string|Date
   */
  set created_at(value) {
    this._created_at = value instanceof Date ? value : new Date(Date.parse(value));
  }
}
