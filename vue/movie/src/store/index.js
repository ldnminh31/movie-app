import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    user_id: null,
    username: null,
    role: null,
  }),
});
