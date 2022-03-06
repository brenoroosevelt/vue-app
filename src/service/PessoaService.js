import { http } from '../http-common'

const getPessoa = (id) =>
  async (id) => {
    await http.get('/pessoas' + id);
  };

export { PessoaService }
