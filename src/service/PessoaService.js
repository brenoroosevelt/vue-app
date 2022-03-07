import { http } from '../http-common'
import { FIRST_PAGE, DEFAULT_LIMIT, DEFAULT_DIRECTION, Paginator } from '../paginator'
import Pessoa from '../model/Pessoa'

const ENDPOINT = '/pessoas'
const ofId = (id) => `${ENDPOINT}/${id}`

export default class PessoaService {
  static newPaginator(page = FIRST_PAGE, limit = DEFAULT_LIMIT, sort = 'nome', direction = DEFAULT_DIRECTION) {
    return (new Paginator(ENDPOINT, page, limit, sort, direction)).setParser((d) => Pessoa.fromData(d))
  }

  static async get(id) {
    const { data } = await http.get(ofId(id))
    return Pessoa.fromData(data)
  }

  static async create(pessoa) {
    const postData = {
      nome: pessoa.nome
    }
    const { data } = await http.post(ENDPOINT, postData)
    return Pessoa.fromData(data)
  }
}
