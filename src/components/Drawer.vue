<script setup lang="ts">
  import CartItemList from './CartItemList.vue'
  import DrawerHead from './DrawerHead.vue'
  import CartEnd from './CartEnd.vue'
  import { inject } from 'vue'

  const isSuccessOrder = inject('isSuccessOrder', false)

</script>

<template>
  <!-- overlay -->
  <div class="fixed top-0 left-0 h-full w-full bg-black opacity-60 z-10"></div>
  <!-- drawer -->
  <div
    v-if="!isSuccessOrder"
    class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col justify-between"
  >
    <DrawerHead />
    <CartItemList />
    <CartEnd />
  </div>

  <div
    v-if="isSuccessOrder"
    class="bg-white w-56 fixed z-20 p-8 flex justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl text-2xl font-semibold gap-4"
  ><img
      src="/checked.svg"
      alt="checked"
    >Success!</div>
</template>
