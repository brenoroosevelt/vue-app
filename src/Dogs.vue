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
        <th @click="sort('created_at')">Age</th>
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
import PessoaService from './service/PessoaService';

export default {
  name: "Dogs",
  data () {
    return {
      isLoading: false,
      paginator: PessoaService.newPaginator(),
      items: [],
      form: {
        nome: null
      }
    }
  },
  mounted: function() {
    this.load()
  },
  methods: {
    load: async function () {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true
      return this.paginator.paginate()
        .then((items) => this.items = items)
        .catch((error) => console.log(error))
        .finally(() => this.isLoading = false)

      // try {
      //   this.isLoading = true
      //   this.items = await this.paginator.paginate()
      // } catch (error) {
      //   console.log(error)
      // } finally {
      //   this.isLoading = false
      // }
    },
    filter: function () {
      this.paginator.setFilters(this.form).setPage(1)
      this.load()
    },
    sort: function (field) {
      this.paginator.orderBy(field)
      this.load()
    },
    nextPage: function() {
      if (this.paginator.hasNext()) {
        this.paginator.setNext()
        this.load()
      }
    },
    prevPage: function() {
      if (this.paginator.hasPrev()) {
        this.paginator.setPrev()
        this.load()
      }
    },
    page: function(n) {
      this.paginator.setPage(n)
      this.load()
    },
    limit: function(n) {
      this.paginator.setLimit(n).setPage(1)
      this.load()
    }
  },
  computed:{
  }
}
</script>

<style scoped>

</style>
