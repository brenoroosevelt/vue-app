import { object, string, number, date } from 'yup';

export default class Pessoa {
  constructor(id, nome, created_at, mais) {
    this.id = id
    this.nome = nome
    this.created_at = created_at

    required(mais, 'required field `mais` is missing')
  }

  static schema() {
    return object({
      id: string().uuid().nullable(),
      name: string().required(),
      age: number().required().positive().integer(),
      email: string().email(),
      website: string().url().nullable(),
      createdOn: date().default(() => new Date()),
    });
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
   * @param value integer|string|Date
   */
  set created_at(value) {
    this._created_at = value instanceof Date ? value : new Date(value);
  }
}
