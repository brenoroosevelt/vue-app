import Pessoa from '../model/Pessoa';

export default class PessoaService {

  get(id: string): Pessoa {
    return {
      id: '',
      nome: ''
    };
  }
}
