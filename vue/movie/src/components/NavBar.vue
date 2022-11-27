<template>
  <div class="container">
    <nav
      class="navbar navbar-expand-lg fixed-top shadow"
      style="
        /* box-shadow: 0 1rem 1rem rgba(0, 0, 0.15, 0.15); */
        background-color: #eb6440;
      "
    >
      <div class="container" style="background-color: #eb6440">
        <a class="navbar-brand" href="#" style="background-color: #eb6440">
          <router-link to="/" style="text-decoration: none">
            <h1
              style="
                color: #eff5f5;
                font-weight: bold;
                background-color: #eb6440;
              "
            >
              Vmovie
            </h1>
          </router-link></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style="background-color: #eb6440"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style="background-color: #eb6440"
                ><router-link
                  to="/"
                  class="nav-link active"
                  style="
                    font-size: 1.1rem;
                    color: #EFF5F5;
                    background-color: #eb6440;
                  "
                  >Home</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style="background-color: #eb6440"
                ><router-link
                  to="/category"
                  class="nav-link active"
                  style="
                    font-size: 1.1rem;
                    color: #EFF5F5;
                    background-color: #eb6440;
                  "
                  >Category</router-link
                ></a
              >
            </li>

            <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
          </ul>
          <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
          <router-link to="/signin" style="background-color: #eb6440"
            ><button class="display-flex button-style">
              Sign in
            </button></router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<!-- style -->
<style>
.button-style {
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
}
.button-style:hover {
  color: #fff;
  background-color: #497174;
}
</style>
