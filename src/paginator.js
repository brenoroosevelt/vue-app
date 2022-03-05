import http from './http-common'

const FIRST_PAGE = 1
const DEFAULT_LIMIT = 15
const DEFAULT_DIRECTION = 'asc'

class Paginator {
  constructor(
    endpoint,
    page = FIRST_PAGE,
    limit = DEFAULT_LIMIT,
    sort = null,
    direction = DEFAULT_DIRECTION,
    filter = {}
  ) {
    this._endpoint = endpoint
    this._page = page
    this._limit = limit
    this._defaultLimit = limit
    this._sort = sort
    this._direction = direction
    this._filters = filter

    this._pagination = {
      page: this._page,
      limit: this._limit,
      total_pages: 0,
      total_results: 0,
      next_page: 0,
      previous_page: 0,
    }
  }

  paginate() {
    let params = {
      filter: this._filter,
      page: this._page,
      limit: this._limit,
      sort: {},
    }

    if (this._sort) {
      params.sort[this._sort] = this._direction
    }

    return http.get(this._endpoint, params: params).then((res) => this._pagination = res.data.pagination)
  }

  filter(filters) {
    this._filters = Object.assign({}, filters)

    return this.paginate()
  }

  sort(field) {
    if (field === this._sort) {
      this._direction = this._direction === 'asc' ? 'desc' : 'asc'
    } else {
      this._sort = field;
      this._direction = DEFAULT_DIRECTION
      this._page = FIRST_PAGE
    }

    return this.paginate()
  }

  getPage(page, limit) {
    this._page = page
    this._limit = limit

    return this.paginate()
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
