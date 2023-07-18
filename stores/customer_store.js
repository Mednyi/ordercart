import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customerStore', {
  state: () => {
    return {
      customer: {
        name: '',
        email: '',
        phone: '',
        addresses: []
      }
    }
  }
})