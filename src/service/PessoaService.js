import { http } from '../common/http-common'
import { FIRST_PAGE, DEFAULT_LIMIT, DEFAULT_DIRECTION, Paginator } from '../common/paginator'
import Pessoa from '../model/Pessoa'

const endpoint = '/pessoas'
const endpointOfId = (id) => `${endpoint}/${id}`

export default class PessoaService {
  static newPaginator(page = FIRST_PAGE, limit = 2, sort = 'nome', direction = DEFAULT_DIRECTION) {
    return (new Paginator(endpoint, page, limit, sort, direction))
      .setParser((d) => Pessoa.fromData(d))
  }

  static async get(id) {
    return http.get(endpointOfId(id)).then((response) => Pessoa.fromData(response.data))
  }

  static async create(data) {
    const postData = {
      nome: data.nome
    }

    return http.post(endpoint, postData).then((response) => Pessoa.fromData(response.data))
  }
}
