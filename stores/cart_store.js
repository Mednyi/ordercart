import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      cart: []
    }
  },
  actions: {
    ADD_TO_CART (payload) {
        const itemIndex = this.cart.findIndex((item) => item.id === payload.id);
        if (itemIndex !== -1) {
            const currentItem = this.cart[itemIndex];
            currentItem.count += 1;
            this.cart.splice(itemIndex, 1, currentItem);
        } else {
            this.cart.push({...payload, count: 1});
        }
    },
    REMOVE_FROM_CART (payload, full) {
        const itemIndex = this.cart.findIndex((item) => item.id === payload.id);
        if (itemIndex !== -1) {
            if (full || this.cart[itemIndex].count === 1) {
                this.cart.splice(itemIndex, 1);
                return;
            }
            const currentItem = this.cart[itemIndex];
            currentItem.count -= 1;
            this.cart.splice(itemIndex, 1, currentItem);
            return;
        }
    }
  }
});