<script setup lang="ts">

   defineProps<{ count: number }>()
   const emit = defineEmits<{ (e: 'increment'): void }>()
</script>

<template>
   <div @click="() => { emit('increment') }">sdafsdf</div>

   <div>{{ count }}</div>
</template>

<style scoped></style>