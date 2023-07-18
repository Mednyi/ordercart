import { defineStore } from 'pinia'

export const useOrderStore = defineStore('orderStore', {
  state: () => {
    return {
      order: {
        customerId,
        cart: [],
        total: 0,
        discounts: [],
        services: [],
        discountsTotal: 0,
        delivery: {
            address: '',
            zoneId: '',
            dateTime: ''
        }
      }
    }
  },
  submitOrder: (payload) => {

  }
})