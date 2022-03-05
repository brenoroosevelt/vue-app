import http from './http-common'

const FIRST_PAGE = 1
const DEFAULT_LIMIT = 15
const DEFAULT_DIRECTION = 'asc'

class Paginator {
  constructor(endpoint) {
    this._endpoint = endpoint
    this._filters = {}
    this._sort = {}
    this._page = FIRST_PAGE
    this._limit = DEFAULT_LIMIT
    this._direction = DEFAULT_DIRECTION

    this._pagination = {
      page: this._page,
      limit: this._limit,
      total_pages: 0,
      total_results: 0,
      next_page: 0,
      previous_page: 0,
    }
  }

  filter(filters) {
    this._filters = Object.assign({}, filters)
    return this
  }

  sort(field) {
    if (field === this._sort) {
      this._direction = this._direction === 'asc' ? 'desc' : 'asc'
    } else {
      this._sort = field;
      this._direction = DEFAULT_DIRECTION
      this._page = FIRST_PAGE
    }

    return this
  }

  setPage(page, limit) {
    this._page = page
    this._limit = limit
    return this
  }

  paginate() {
    let params = {
      filter: this._filter,
      page: this._page,
      limit: this._limit,
      sort: {},
    }

    params.sort[this._sort] = this._direction

    return http.get(this._endpoint, params: params).then((res) => this._pagination = res.data.pagination)
  }

  getNext() {
    if (this._pagination.next_page) {
      this._page = this._pagination.next_page
    }

    return this.paginate()
  }

  getPrev() {
    if (this._pagination.previous_page) {
      this._page = this._pagination.previous_page
    }

    return this.paginate()
  }
}
