<script setup lang="ts">
   import { inject } from 'vue'
   const { totalPrice, vatPrice } = inject<{ totalPrice: number, vatPrice: number }>('prices', { totalPrice: 0, vatPrice: 0 })
   const createOrder = inject<() => void>('createOrder', () => {})
   const isCreateOrder = inject<boolean>('isCreateOrder', false)
</script>

<template>
   <div class="flex flex-col gap-4 my-6">
      <div class="flex items-end gap-2">
         <span>Всього:</span>
         <div class="border-b border-slate-200 h-[1px] flex-1 border-dashed"></div>
         <b>{{ totalPrice }} грн</b>
      </div>
      <div class="flex items-end gap-2">
         <span>Податок(5%):</span>
         <div class="border-b border-slate-200 h-[1px] flex-1 border-dashed"></div>
         <b>{{ vatPrice.toFixed(0) }} грн</b>
      </div>
   </div>
   <button
      class="bg-lime-500 w-full rounded-xl py-3 text-white flex items-center justify-between gap-4 cursor-pointer disabled:bg-slate-400 disabled:cursor-auto active:bg-lime-700 hover:bg-lime-600 transition-all duration-300 px-4"
      :disabled="totalPrice === 0 || isCreateOrder"
      @click="createOrder"
   >
      <span></span> {{ isCreateOrder ? 'Оформлюється...' : 'Оформити замовлення' }}
      <img
         src="/arrow-next.svg"
         alt="next to pay"
      />
   </button>
</template>

<style scoped></style>
