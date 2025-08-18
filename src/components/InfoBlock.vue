<script setup lang="ts">
   defineProps({
      title: String,
      description: String,
      imageUrl: String
   })
</script>

<template>
   <div class="flex flex-col items-center flex-1 justify-center">
      <img height="70" width="70" :src="imageUrl" alt="empty cart">
      <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
      <p class="text-gray-400">{{ description }}</p>
   </div>
</template>

<style scoped>
   
</style>