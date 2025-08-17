<script setup lang="ts">
   import { inject } from 'vue'
   import type { SneakersItem } from './CardList.vue'

   interface Props extends SneakersItem {
      addToFavorite?: (item: any) => void
      addToCart?: () => void
   }

   const props = defineProps<Props>()

</script>

<template>
   <div
      class="relative border border-slate-100 shadow-md rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-white"
   >
      <img
         @click="addToFavorite"
         :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
         alt="like empty"
         class="absolute top-8 left-8"
      />
      <img
         :src="imageUrl"
         alt="Sneaker"
      />
      <p class="mt-2">{{ title }}</p>
      <div class="flex justify-between mt-5">
         <div class="flex flex-col">
            <span class="text-slate-400">Ціна:</span>
            <b>{{ price }} грн</b>
         </div>
         <img
            @click="addToCart"
            :src="isAdded ? '/checked.svg' : '/plus.svg'"
            alt="add to cart"
         />
      </div>
   </div>
</template>
