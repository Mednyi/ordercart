<template>
    <main class="order_page">
        <section class="order--cart">
            <CartItem v-for="cartItem in cartStore.cart" :cartItem="cartStore"/>
        </section>
        <section>
            <h2>Customer</h2>
            <input v-model="customerStore.customer.name" placeholder="name"/>
            <input v-model="customerStore.customer.email" type="email" placeholder="email"/>
            <input v-model="customerStore.customer.phone" type="tel" placeholder="phone"/>
        </section>
        <section>
            <h2>Delivery</h2>
            <input v-model="orderStore.order.delivery.address" placeholder="address"/>
        </section>
        <section>
            <button @click="checkout">Checkout</button>
        </section>
        <section v-show="showPopup" class="popup">
            <input v-model="authCode" type="number" placeholder="code"/>
            <button @click="signOn">Checkout</button>
        </section>
    </main>
</template>

<script setup>
import { useCartStore } from '~/stores/cart_store';
import { useOrderStore } from '~/stores/order_store';
import { useCustomerStore } from '~/stores/customer_store';
const cartStore = useCartStore();
const orderStore = useOrderStore();
const customerStore = useCustomerStore();
const showPopup = ref(false);
const authCode = ref('');
const checkout = async () => {
    if (!customerStore.isAuthenticated) {
        showPopup.value = true;
    }
};
const signOn = async () => {
    await customerStore.SIGN_ON(authCode.value);
    showPopup.value = false;
    await orderStore.submitOrder();
};
</script>

<style scoped>
.order--cart {
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 20px;
}
</style>
