<template>
  <!-- <NavBarVue></NavBarVue> -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form @submit.prevent="signup">
          <h1>Sign Up</h1>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="account.username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="account.password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              v-model="account.phone"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="text-center text-lg-start mt-4 pt-2">
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Have an account?
              <a href="#!" class="link-danger"
                ><router-link to="/signin">Sign In</router-link></a
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
// import NavBarVue from "@/components/NavBar.vue";
import AccountService from "@/services/account.service";
export default {
  components: {
    // NavBarVue,
  },
  name: "SignIn",
  data() {
    return {
      account: {
        username: "",
        password: "",
        phone: "",
        role: 1,
      },
    };
  },
  methods: {
    async signup() {
      const accountService = new AccountService();
      const data = await accountService.signUp(this.account);
      if (data.message === "Create successfully") {
        alert("Register successfully!");
        this.$router.push({ name: "movieapp" });
      }
    },
  },
};
</script>
