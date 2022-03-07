namespace Service {
  export interface Pessoa {
    id: string,
    nome: string,
    created_at: Date
  }
}

export default class Service {
  private a: Service.Pessoa

  constructor(a: Service.Pessoa, private x: string, protected z: string) {
    this.a = a
  }

  sayHello(): string {
    return 'hello' + this.a.id
  }
}
