<template>
    <main class="order_page">
        <section class="products">
            <CartItem v-for="productItem in productStore.products" :cartItem="productItem"/>
        </section>
    </main>
</template>

<script setup>
import { useProductStore } from '../stores/products_store';
const productStore = useProductStore();
</script>

<style scoped>
.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-auto-rows: max-content;
    grid-gap: 20px;
}
</style>
