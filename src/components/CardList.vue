<script setup lang="ts">
import Card from './Card.vue';
</script>

<template>
   <div class="grid grid-cols-4 gap-5 mt-8">
      <Card imageUrl="/sneakers/sneakers-1.jpg" title="Nike Air Max 270" :price="1234"/>
   </div>
</template>