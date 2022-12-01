<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NavBarVue></NavBarVue>
  <!-- fetch category -->

  <div class="container">
    <div class="row">
      <h2>
        Category
        <span class="badge bg-secondary">{{ this.categories.length }}</span>
      </h2>

      <div class="col md-12">
        <form @submit.prevent="addForm" v-if="this.mainStore.role == 0">
          <div class="input-group" style="width: 35%">
            <input
              style="border-radius: 0"
              type="text"
              class="form-control"
              placeholder="Category name"
              aria-label="Categoryname"
              aria-describedby="basic-addon1"
              @keyup.enter="submit"
              v-model="addValue"
            />
            <button class="btn btn-primary">Add new</button>
          </div>
        </form>
        <table
          class="table align-middle mb-0 bg-white table-bordered table-hover"
          style="margin-top: 20px"
        >
          <thead class="bg-light">
            <tr class="text-center">
              <th>ID</th>
              <th>Name</th>
              <th v-if="this.mainStore.role == 0">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="item in categories" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td v-if="this.mainStore.role == 0">
                <!-- edit -->
                <button
                  class="btn btn-primary"
                  @click="editCategory(item.id)"
                  style="margin-right: 10px"
                >
                  <!-- <i class="fa-solid fa-pen-to-square"></i> -->Edit
                </button>
                <!-- delete -->
                <button
                  class="btn btn-danger"
                  @click="deleteCategory(item.id)"
                >
                  <!-- <i class="fa-solid fa-trash"></i> -->Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


  <!-- end -->
</template>
<script>
import NavBarVue from "@/components/NavBar.vue";
import { categoryService } from "@/services/category.service";
import { useMainStore } from "@/store";
// import CategoryFormVue from "@/components/CategoryForm.vue";
export default {
  name: "CategoryList",
  components: {
    NavBarVue,
    // CategoryFormVue,
  },
  data() {
    return {
      dataCategory: {
        name: "",
        id: "",
        addValue: "",
      },
      categories: [],
    };
  },
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const categoriesList = await categoryService.getMany();
        const temparray = categoriesList.map((item) => {
          return { name: item.category_name, id: item.category_id };
        });
        this.categories = temparray;
        // alert(this.categories.length);
      } catch (error) {
        console.log(error);
      }
    },
    async addForm() {
      try {
        // console.log(this.addValue);
        this.name = this.addValue;

        const categoriesList = await categoryService.create({
          category_name: this.name,
        });
        alert("Add new category successfully!");
        this.getCategories();
      } catch (error) {
        alert("Add new category not working!");
        console.log(error);
      }
    },
    async deleteCategory(id) {
      // console.log(id);
      // this.id = id;
      try {
        const categoriesList = await categoryService.delete(id);
        // console.log("ok");
        alert("Delete successfully");
        this.getCategories();
      } catch (error) {
        alert("Category is used");
        console.log(error);
      }
    },
    async editCategory(id) {
      try {
        this.name = prompt("Enter new category name");
        if (!this.name)
          return;
        // console.log('new name: ' + this.name);
        const categoriesList = await categoryService.edit(id, {
          category_name: this.name,
        });
        alert("Edit category working successfully!");
        this.getCategories();
      } catch (error) {
        alert("Edit category not working!");

        console.log(error);
      }
    },
  },

  // start

  //end
};
</script>
<style></style>
