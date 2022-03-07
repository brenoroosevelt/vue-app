import { object, string, number, date } from 'yup';

export default class Pessoa {
  constructor(id, nome, created_at, mais) {
    this.id = id
    this.nome = nome
    this.created_at = created_at

    // required(mais, 'required field `mais` is missing')
  }

  static schema() {
    return object({
      id: string().uuid().nullable(),
      nome: string().required(),
      // age: number().required().positive().integer(),
      // email: string().email(),
      // website: string().url().nullable(),
      //created_at: date().default(() => new Date()),
      created_at: date().required()
    });
  }

  static async fromData(data) {
    const schema = Pessoa.schema()
    try {
      const parsed = schema.cast(data)
      const pessoa = await schema.validate(parsed, { strict: true })
      console.log(pessoa)

      return new Pessoa(pessoa.id, pessoa.nome, pessoa.created_at)
    } catch (error) {
      console.log(error)
    }
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
