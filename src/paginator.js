import { http } from './http-common'

const FIRST_PAGE = 1
const DEFAULT_LIMIT = 15
const DIRECTION = { ASC: 'asc', DESC: 'desc' }
const DEFAULT_DIRECTION = DIRECTION.ASC
const ITEMS_KEY = 'data'

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
    this._direction = Array.from(DIRECTION).includes(direction) ? direction : DEFAULT_DIRECTION
    this._filters = filter
    this._parser = (item) => item

    // values fetched in backend
    this._pagination = {
      page: this._page,   // current page
      limit: this._limit, // items per page
      total_pages: 0,     // total pages = last page
      total_results: 0,   // total items
      next_page: 0,       // next page or null
      previous_page: 0,   // previous page or null
    }
  }

  async paginate() {
    let params = {
      filter: this._filters,
      page: this._page,
      limit: this._limit,
      sort: {},
    }

    if (this._sort) {
      params.sort[this._sort] = this._direction
    }

    return http.get(this._endpoint, { params: params })
      .then((response) => {
        this._pagination = response.data.pagination
        if (this._parser instanceof Function) {
          return response.data[ITEMS_KEY].map((item) => this._parser(item))
        }

        return response.data.data
      })
  }

  setParser(callback) {
    this._parser = callback

    return this
  }

  setFilters(filters) {
    this._filters = Object.assign({}, filters)

    return this
  }

  orderBy(field, firstPage = false) {
    if (field === this._sort) {
      this._direction = this._direction === DIRECTION.ASC ? DIRECTION.DESC : DIRECTION.ASC
    } else {
      this._sort = field;
      this._direction = DEFAULT_DIRECTION
      if (firstPage) {
        this._page = FIRST_PAGE
      }
    }

    return this
  }

  setPage(page, limit) {
    this._page = page
    this._limit = limit || this._limit

    return this
  }

  setNext() {
    if (this._pagination.next_page) {
      this._page = this._pagination.next_page
    }

    return this
  }

  setPrev() {
    if (this._pagination.previous_page) {
      this._page = this._pagination.previous_page
    }

    return this
  }

  hasNext() {
    return !!this._pagination.next_page
  }

  hasPrev() {
    return !!this._pagination.previous_page
  }

  totalResults() {
    return this._pagination.total_results
  }

  lastPage() {
    return this._pagination.total_pages
  }

  perPage() {
    return this._limit
  }

  currentSort() {
    return this._sort
  }

  currentSortDirection() {
    return this._direction
  }

  currentPage() {
    return this._page
  }
}

export {
  Paginator,
  FIRST_PAGE,
  DEFAULT_LIMIT,
  DEFAULT_DIRECTION,
  DIRECTION
}
