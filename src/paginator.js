import { http } from './http-common'

const FIRST_PAGE = 1
const DEFAULT_LIMIT = 15
const DEFAULT_DIRECTION = 'asc'

export default class Paginator {
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

  paginate() {
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
      .then((res) => {
        this._pagination = res.data.pagination
        return res.data.data
      })
  }

  setFilters(filters) {
    this._filters = Object.assign({}, filters)

    return this
  }

  orderBy(field) {
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
