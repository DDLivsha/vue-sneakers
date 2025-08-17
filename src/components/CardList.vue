<script setup lang="ts">
   import Card from './Card.vue'
   export type SneakersItem = {
      id: number
      title: string
      price: number
      imageUrl: string
   }

   interface Props {
      items: SneakersItem[]
   }

   const props = defineProps<Props>()
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
      />
   </div>
</template>
