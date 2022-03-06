import { http } from '../http-common'
import { FIRST_PAGE, DEFAULT_LIMIT, DEFAULT_DIRECTION, Paginator } from '../paginator'
import Pessoa from '../model/Pessoa'

const ENDPOINT = '/pessoas'
const ofId = (id) => `${ENDPOINT}/${id}`

export default class PessoaService {

  static newPaginator(page = FIRST_PAGE, limit = DEFAULT_LIMIT, sort = 'nome', sortDirection = DEFAULT_DIRECTION) {
    return (new Paginator(ENDPOINT, page, limit, sort, sortDirection)).setParser((d) => PessoaService.toModel(d))
  }

  static toModel(data) {
    return new Pessoa(data.id, data.nome, data.created_at)
  }

  static get(id) {
    return http.get(ofId(id))
  }

  async doany () {
    const { data } = await http.get(ENDPOINT)
    return data
  }
}
