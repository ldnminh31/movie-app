<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container" style="padding: 70px 0px; margin-bottom: 50px;">
    <h1 class="display-1"><b class="h1-title" style="color: #497174">Search and Explore</b></h1>
    <h1 class="display-1"><b class="h1-title" style="color: #497174"> Movies</b></h1>
    <p class="h5">
      You can search for a movie by name movie and
      <b>remember to click the button</b>
    </p>
    <div class="row">
      <div class="col-5 input-search">
        <input type="text" class="form-control" placeholder="Search Movies" />
      </div>
      <div class="col button-search">
        <button>Search</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.h1-title {
  font-weight: 600;
}
.input-search input {
  width: 100%;
  height: 50px;
  border-radius: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0px 10px;
}

.button-search button {
  margin-left: 20px;
  width: 15%;
  height: 50px;
  border-radius: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #497174;
  color: #fff;
}
.button-search button:hover {
  background-color: #325c5f;
}
</style>
