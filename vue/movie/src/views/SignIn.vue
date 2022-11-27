<template>
  <NavBarVue></NavBarVue>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form @submit.prevent="submit">
          <h1>Sign In</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="text-center text-lg-start mt-4 pt-2">
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <a href="#!" class="link-danger"
                ><router-link to="/signup">Register</router-link></a
              >
            </p>
          </div>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
<script>
import NavBarVue from "@/components/NavBar.vue";
export default {
  components: {
    NavBarVue,
  },
  methods: {
    submit() {
      this.$router.push({ name: 'movieapp' })
    }
  }
};
</script>
