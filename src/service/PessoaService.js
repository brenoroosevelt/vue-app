import { http } from '../common/http-common'
import { FIRST_PAGE, DEFAULT_LIMIT, DEFAULT_DIRECTION, Paginator } from '../common/paginator'
import Pessoa from '../model/Pessoa'

const endpoint = '/pessoas'
const ofId = (id) => `${endpoint}/${id}`

export default class PessoaService {
  static newPaginator(page = FIRST_PAGE, limit = DEFAULT_LIMIT, sort = 'nome', direction = DEFAULT_DIRECTION) {
    return (new Paginator(endpoint, page, limit, sort, direction)).setParser((d) => Pessoa.fromData(d))
  }

  static async get(id) {
    const { data } = await http.get(ofId(id))

    return Pessoa.fromData(data)
  }

  static async create(pessoa) {
    const postData = {
      nome: pessoa.nome
    }

    const { data } = await http.post(endpoint, postData)

    return Pessoa.fromData(data)
  }
}
