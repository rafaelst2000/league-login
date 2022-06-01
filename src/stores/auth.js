import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: 'authStore',
  
  state: () => ({
    user: {
      isAuth: false,
      id: '',
      email: '',
      name: ''
    },
  }),

  getters: {  
    getUser: (state) => state.user
  },

  actions: {
    setUser(value) {
      this.user = {...value}
    },
    resetState() {
      this.$reset()
    },
  }
});