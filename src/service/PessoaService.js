import { http } from '../http-common'
import Paginator from '../paginator'

const ENDPOINT = '/pessoas'
const ENDPOINT_ID = (id) => `${ENDPOINT}/${id}`

export default class PessoaService {
  /**
   * @param page integer
   * @param limit integer
   * @param sort string
   * @param sortDirection string
   * @return Paginator
   */
  static newPaginator(page = 1, limit = 15, sort = 'nome', sortDirection = 'asc') {
    return new Paginator(ENDPOINT, page, limit, sort, sortDirection)
  }

  /**
   * @param id string
   * @return Promise
   */
  static get(id) {
    return http.get(ENDPOINT_ID(id))
  }

  async doany () {
    const { data } = await http.get(ENDPOINT)
    return data
  }
}
