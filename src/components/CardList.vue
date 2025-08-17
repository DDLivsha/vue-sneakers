<script setup lang="ts">
   import Card from './Card.vue'

   export type SneakersItem = {
      id: number
      title: string
      price: number
      imageUrl: string
      isFavorite: boolean
      isAdded: boolean
      favoriteId?: number
   }

   interface Props {
      items: SneakersItem[]
   }
   interface Emits {
      (e: 'addToFavorite', item: SneakersItem): void
      (e: 'addToCart', item: SneakersItem): void
   }

   const props = defineProps<Props>()
   const emit = defineEmits<Emits>()

</script>

<template>
   <div class="grid grid-cols-4 gap-5 mt-8">
      <Card
         v-for="item in items"
         :key="item.id"
         :id="item.id"
         :imageUrl="item.imageUrl"
         :title="item.title"
         :price="item.price"
         :isFavorite="item.isFavorite"
         :isAdded="item.isAdded"
         :addToFavorite="() => emit('addToFavorite', item)"
         :addToCart="() => emit('addToCart', item)"
      />
   </div>
</template>
