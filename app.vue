<template>
    <div>
      <header class="header"> 
        <div class="header--actions">
          <NuxtLink class="header--action" to="/order">
            <button class="button button-cart">
              {{ cartStore.cart.length }}
            </button>
          </NuxtLink>
        </div>
      </header>
      <NuxtPage />
    </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart_store';
const cartStore = useCartStore();
</script>

<style>
body {
  margin: 0;
}
.header {
  background-color: #000;
  color: #fff;
  height: 60px;
  display: flex;
}
.header--action {
  height: 100%;
  display: block;
}
.button-cart {
  height: 100%;
  padding: 0 8px;
  width: 120px;
  background-color: aliceblue;
  color: #000;
}
</style>
