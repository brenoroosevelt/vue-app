<template>
  <div>
    <div v-on:keyup.enter="applyFilters">
      <input type="text" v-model="form.nome">
      <button @click="applyFilters">Filter</button>
    </div>
    <table>
      <thead>
      <tr>
        <th @click="sort('nome')">Name</th>
        <th @click="sort('age')">Age</th>
        <th @click="sort('breed')">Breed</th>
        <th @click="sort('gender')">Gender</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items">
        <td>{{item.nome}}</td>
        <td>{{item.created_at}}</td>
        <td>---</td>
        <td>---</td>
      </tr>
      </tbody>
    </table>
    <p>
      <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button>
    </p>
    debug: isLoading= {{isLoading}}, filters={{filter}}, sort={{sorting}}, pagination={{pagination}}
  </div>
</template>

<script>
// https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios
import axios from 'axios';
import qs from 'qs'

export default {
  name: "Dogs",
  data () {
    return {
      items: [],
      sorting: {
        field: 'nome',
        direction: 'asc',
      },
      pagination: {
        page: 1,
        limit: 3,
        total_pages: 0,
        total_results: 0,
        next_page: 0,
        previous_page: 0,
      },
      form: {
        nome: null
      },
      filter: {
        nome: null,
      },
      isLoading: false
    }
  },
  mounted: function() {
    this.loadItems()
  },
  methods:{
    queryParams: function () {
      let params = {
        filter: this.filter,
        page: this.pagination.page,
        limit: this.pagination.limit,
        sort: {},
      };

      params.sort[this.sorting.field] = this.sorting.direction

      return params;
    },
    loadItems: function () {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true
      axios.get('http://localhost:8080/pessoas', {
        params: this.queryParams(),
        paramsSerializer: params => {
          return qs.stringify(params /*, {encodeValuesOnly: true} */)
        }
      }).then(res => {
          this.items = res.data.data
          this.pagination = res.data.pagination
          // console.log(res)
        }).finally(() => this.isLoading = false)
    },
    applyFilters: function () {
      this.filter = Object.assign({}, this.form);
      this.pagination.page = 1
      this.loadItems()
    },
    sort: function (field) {
      if (field === this.sorting.field) {
        this.sorting.direction = this.sorting.direction === 'asc' ? 'desc' : 'asc'
      } else {
        this.sorting.field = field;
        this.sorting.direction = 'asc'
        this.pagination.page = 1
      }

      this.loadItems()
    },
    nextPage: function() {
      if (this.pagination.next_page) {
        this.page(this.pagination.next_page)
        this.pagination.page = this.pagination.next_page
        this.loadItems()
      }
    },
    prevPage: function() {
      if (this.pagination.previous_page) {
        this.page(this.pagination.previous_page)
      }
    },
    page: function(n) {
      this.pagination.page = n
      this.loadItems()
    }
  },
  computed:{
    // sortedDogs:function() {
    //   return this.cats.sort((a,b) => {
    //     let modifier = 1;
    //     if(this.currentSortDir === 'desc') modifier = -1;
    //     if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
    //     if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
    //     return 0;
    //   }).filter((row, index) => {
    //     let start = (this.currentPage - 1) * this.pageSize;
    //     let end = this.currentPage * this.pageSize;
    //     if (index >= start && index < end) return true;
    //   });
    // }
  }
}
</script>

<style scoped>

</style>
