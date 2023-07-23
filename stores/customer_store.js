import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customerStore', {
  state: () => {
    return {
      customer: {},
      isAuthenticated: false
    }
  },
  actions: {
    async SIGN_ON (payload) {
      const result = {
        ...this.customer,
        _id: '2342werf454364rtyhdfgh'
      };
      this.customer = result;
      this.isAuthenticated = true;
    }
  }
})