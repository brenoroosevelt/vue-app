<template>
  <div>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="layers"></span>
                  Integrations
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-0 mb-2">
            <h1 class="h4">Membros da Loja</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
<!--          <cats></cats>-->
          <dogs></dogs>
<!--          <h2>Section title</h2>-->
          <div>
              <b-card no-body title="Title" header-tag="header" footer-tag="footer">
<!--                <template #header>-->
<!--                  <h6 class="mb-0">Header Slot</h6>-->
<!--                </template>-->
                <b-list-group flush>
                  <b-list-group-item href="#">
                    <div class="d-flex justify-content-start align-items-sm-stretch flex-wrap w-100">
                      <div>
                        <b-avatar class="mr-3" src="https://bootdey.com/img/Content/avatar/avatar7.png"></b-avatar>
                        @fulano
                        <strong class="text-gray-dark">Full Name</strong>
                      </div>
                      <div>
                        dois
                      </div>


                    </div>
                  </b-list-group-item>
                  <b-list-group-item href="#">
                    <div class="item d-flex justify-content-between align-items-center">
                    <b-avatar class="mr-3" src="https://bootdey.com/img/Content/avatar/avatar7.png"></b-avatar>
                    <div class="">
                      <h3 class="h5 mb-0">Lorem Ipsum Dolor</h3>
                      <small>Posted on 5th June 2017 by Frank Williams.</small>
                    </div>
                    <a href="#" class="">Follow</a>

                    </div>
                  </b-list-group-item>
                  <b-list-group-item href="#">
                    <b-avatar class="mr-3" src="https://bootdey.com/img/Content/avatar/avatar6.png"></b-avatar>
                    <span class="mr-auto">J. Circlehead</span>
                    <b-badge>5</b-badge>
                  </b-list-group-item>
                </b-list-group>

                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style="cursor:pointer;" v-on:click="">
                      <td>1,001</td>
                      <td>Lorem</td>
                      <td>ipsum</td>
                      <td>dolor</td>
                      <td>sit</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>amet</td>
                      <td>consectetur</td>
                      <td>adipiscing</td>
                      <td>elit</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Integer</td>
                      <td>nec</td>
                      <td>odio</td>
                      <td>Praesent</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>libero</td>
                      <td>Sed</td>
                      <td>cursus</td>
                      <td>ante</td>
                    </tr>
                    <tr>
                      <td>1,004</td>
                      <td>dapibus</td>
                      <td>diam</td>
                      <td>Sed</td>
                      <td>nisi</td>
                    </tr>
                    <tr>
                      <td>1,005</td>
                      <td>Nulla</td>
                      <td>quis</td>
                      <td>sem</td>
                      <td>at</td>
                    </tr>
                    <tr>
                      <td>1,006</td>
                      <td>nibh</td>
                      <td>elementum</td>
                      <td>imperdiet</td>
                      <td>Duis</td>
                    </tr>
                    <tr>
                      <td>1,007</td>
                      <td>sagittis</td>
                      <td>ipsum</td>
                      <td>Praesent</td>
                      <td>mauris</td>
                    </tr>
                    <tr>
                      <td>1,008</td>
                      <td>Fusce</td>
                      <td>nec</td>
                      <td>tellus</td>
                      <td>sed</td>
                    </tr>
                    <tr>
                      <td>1,009</td>
                      <td>augue</td>
                      <td>semper</td>
                      <td>porta</td>
                      <td>Mauris</td>
                    </tr>
                    <tr>
                      <td>1,010</td>
                      <td>massa</td>
                      <td>Vestibulum</td>
                      <td>lacinia</td>
                      <td>arcu</td>
                    </tr>
                    <tr>
                      <td>1,011</td>
                      <td>eget</td>
                      <td>nulla</td>
                      <td>Class</td>
                      <td>aptent</td>
                    </tr>
                    <tr>
                      <td>1,012</td>
                      <td>taciti</td>
                      <td>sociosqu</td>
                      <td>ad</td>
                      <td>litora</td>
                    </tr>
                    <tr>
                      <td>1,013</td>
                      <td>torquent</td>
                      <td>per</td>
                      <td>conubia</td>
                      <td>nostra</td>
                    </tr>
                    <tr>
                      <td>1,014</td>
                      <td>per</td>
                      <td>inceptos</td>
                      <td>himenaeos</td>
                      <td>Curabitur</td>
                    </tr>
                    <tr>
                      <td>1,015</td>
                      <td>sodales</td>
                      <td>ligula</td>
                      <td>in</td>
                      <td>libero</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <b-card-text>Header and footers using slots.</b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
                <template #footer>
                  <em>Footer Slot</em>
                </template>
              </b-card>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Cats from "./Cats";
import Dogs from "./Dogs";

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}
export default {
  name: 'App',
  components: { Cats, Dogs },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
</style>
