<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// do a `console.log(route)` to see route attributes (fullPath, hash, params, path...)
watch(
  () => route.fullPath,
  async () => {
    window.scrollTo(0, 0);
  }
);
</script>
<template>
  <div class="container" style="padding-top: 100px"></div>
  <div class="container mt-3">
    <router-view />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,700;1,900&display=swap");

* {
  font-family: Poppins;
}

.page {
  max-width: 400px;
  margin: auto;
  box-sizing: border-box;
}
</style>
