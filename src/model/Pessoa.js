export default class Pessoa {
  constructor(id, nome, created_at) {
    this._id = undefined;
    this._nome = undefined;
    this._created_at = undefined;

    this.id = id
    this.nome = nome
    this._created_at = created_at
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

  get created_at() {
    return this._created_at;
  }

  set created_at(value) {
    this._created_at = value;
  }
}
