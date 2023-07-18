<template>
<main class="order_page">
    <section class="cart">
        <article v-for="cartItem in cartStore.cart" class="cart--item">
            <h3>{{ cartItem.name }}</h3>
            <p>{{ cartItem.price }}</p>
            <div class="cart--item_actions">
            </div>
            <div class="cart--item_actions">
            <button @click="removeFromCart(cartItem.id)">Delete</button>
            <button @click="decreaseCount(cartItem.id)">Remove</button>
            <button @click="increaseCount(cartItem.id)">Add</button>
            </div>
        </article> 
    </section>
</main>
</template>

<script setup>
import { useCartStore } from '../stores/cart_store';
const cartStore = useCartStore();
</script>