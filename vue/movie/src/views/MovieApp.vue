<template>
  <NavBarVue />
  <SearchVue />
  <hr />
</template>
<style>
* {
  background-color: #eff5f5;
}
.title {
  margin-top: 20px;
  width: 8%;
  font-weight: bold;
  background-color: #eb6440;
  color: #eff5f5;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 1.2rem;
}
</style>
<script>
import NavBarVue from "../components/NavBar.vue";
import SearchVue from "../components/Search.vue";

export default {
  components: {
    NavBarVue,
    SearchVue,
  },
};
</script>
