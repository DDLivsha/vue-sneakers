<script setup lang="ts">
  import { inject } from 'vue';
  import CartItem from './CartItem.vue'
  import type { SneakersItem } from './CardList.vue';

  const cart = inject<SneakersItem[]>('cart', [])
  const removeFromCart = inject<(item: SneakersItem) => void>('removeFromCart', () => {})

</script>

<template>
  <div v-auto-animate class="flex flex-col gap-4 max-h-[60dvh] flex-1 overflow-y-auto">
    <CartItem
      v-for="item in cart"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      :removeFromCart="() => removeFromCart(item)"
    />
  </div>
</template>

<style scoped></style>
