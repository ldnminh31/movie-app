<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form @submit.prevent="signin">
          <h1>Sign In</h1>
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
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="account.password"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="text-center text-lg-start mt-4 pt-2">
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <a href="#!" class="link-danger">
                <router-link to="/signup">Register</router-link>
              </a>
            </p>
          </div>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import AccountService from "@/services/account.service";
import { useMainStore } from "@/store";
export default {
  name: "SignIn",
  data() {
    return {
      account: {
        username: "",
        password: "",
      },
    };
  },
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  methods: {
    async signin() {
      const accountService = new AccountService();
      const data = await accountService.signIn(this.account);
      if (data.message === "Login successfully") {
        this.mainStore.$state = {
          user_id: data.user_id,
          username: data.username,
          role: data.role,
        };
        this.$router.push({ name: "movieapp" });
      } else if (data.message === "Wrong password") {
        alert("Type your password again");
      } else if (data.message === "Username is invalid") {
        alert("Your username is invalid!");
      } else {
        alert("Dont try to hack my web bro !!!");
      }
    },
  },
};
</script>
