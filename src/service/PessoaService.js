import { http } from '../http-common'
import Paginator from '../paginator'

const ENDPOINT = '/pessoas'
const ofId = (id) => `${ENDPOINT}/${id}`

export default class PessoaService {

  static newPaginator(page = 1, limit = 15, sort = 'nome', sortDirection = 'asc') {
    return new Paginator(ENDPOINT, page, limit, sort, sortDirection)
  }

  static get(id) {
    return http.get(ofId(id))
  }

  async doany () {
    const { data } = await http.get(ENDPOINT)
    return data
  }
}
