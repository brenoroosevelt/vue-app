import Pessoa from '../model/Pessoa';

export default class PessoaService {

  async get(id: string): Promise<Pessoa> {
    return {
      id: '',
      nome: ''
    };
  }

  async update(id: string): Promise<Pessoa> {
    return {
      id: '',
      nome: ''
    };
  }

  delete(id: string): void {
  }
}
