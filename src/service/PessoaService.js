import { http } from '../http-common'
import Paginator from '../paginator'

const ENDPOINT = '/pessoas/'

export default class PessoaService {
  static newPaginator(page = 1, limit = 15, sort = 'nome', sortDirection = 'asc') {
    return new Paginator(ENDPOINT, page, limit, sort, sortDirection)
  }
}
