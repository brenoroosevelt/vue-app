<template>
  <div>
    <div v-on:keyup.enter="filter">
      <input type="text" v-model="form.nome">
      <button @click="filter">Filters</button>
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
    <pre>
isLoading = {{isLoading}},
filters = {{form}},
    </pre>

  </div>
</template>

<script>
// https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios
import Paginator from './paginator';

export default {
  name: "Dogs",
  data () {
    return {
      isLoading: false,
      paginator: new Paginator('/pessoas', 1, 3, 'nome', 'asc'),
      items: [],
      form: {
        nome: null
      }
    }
  },
  mounted: function() {
    this.loadItems()
  },
  methods:{
    loadItems: function () {
      if (this.isLoading) {
        return;
      }

      this.paginator.paginate()
        .then(res => {
        this.items = res
      }).finally(() => this.isLoading = false)
    },
    filter: function () {
      this.paginator.setFilters(this.form).setPage(1)
      this.loadItems()
    },
    sort: function (field) {
      this.paginator.orderBy(field)
      this.loadItems()
    },
    nextPage: function() {
      if (this.paginator.hasNext()) {
        this.paginator.setNext(this.form)
        this.loadItems()
      }
    },
    prevPage: function() {
      if (this.paginator.hasPrev()) {
        this.paginator.setPrev(this.form)
        this.loadItems()
      }
    },
    page: function(n) {
      this.paginator.setPage(n)
      this.loadItems()
    }
  },
  computed:{
  }
}
</script>

<style scoped>

</style>
