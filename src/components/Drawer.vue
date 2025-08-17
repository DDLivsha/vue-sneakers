<script setup lang="ts">
import CartItemList from './CartItemList.vue';
import DrawerHead from './DrawerHead.vue';

</script>

<template>
   <!-- overlay -->
   <div class="fixed top-0 left-0 h-full w-full bg-black opacity-60 z-10 "></div>
   <!-- drawer -->
   <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <DrawerHead />
      <CartItemList/>
   </div>
</template>