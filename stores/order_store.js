import { defineStore } from 'pinia'
import { useCartStore } from '~/stores/cart_store';

export const useOrderStore = defineStore('orderStore', {
  state: () => {
    return {
      order: {
        //customerId,
        // cart: [],
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
  submitOrder: async (payload) => {
    const cartStore = useCartStore();
    this.order.cart = cartStore.cart;
  }
})