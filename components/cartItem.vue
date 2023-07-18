<template>
    <article class="cart--item">
        <h3>{{ cartItem.name }}</h3>
        <p>{{ cartItem.price }}</p>
        <p v-if="currentCartItem.count">{{ currentCartItem.count * cartItem.boxCount }}</p>
        <div class="cart--item_actions">
        <button @click="removeFromCart(cartItem)">Delete</button>
        <button @click="decreaseCount(cartItem)">Remove</button>
        <button @click="increaseCount(cartItem)">Add</button>
        </div>
    </article>
</template>

<script setup>
import { useCartStore } from '../stores/cart_store';
const props = defineProps({
    cartItem: {
        type: Object,
        required: true
    }
});
const cartStore = useCartStore();
const currentCartItem = computed(() => cartStore.cart.find((item) => item.id === props.cartItem.id) || {}); 
const removeFromCart = (cartItem) => {
  cartStore.REMOVE_FROM_CART(cartItem, true);
};
const decreaseCount = (cartItem) => {
  cartStore.REMOVE_FROM_CART(cartItem);
};
const increaseCount = (cartItem) => {
  cartStore.ADD_TO_CART(cartItem);
}
</script>

<style scoped>
.cart--item {
    border: solid 1px black;
    border-radius: 10px;
    padding: 8px;
}
</style>