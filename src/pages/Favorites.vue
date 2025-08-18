<script setup lang="ts">
   import { ref } from 'vue';
   import Counter from '../components/Counter.vue';
import { useRouter } from 'vue-router';

   const count = ref(0)
   const increment = () => {
      count.value++
   }

   const id = useRouter().push('/asdfasdfasdf')
</script>

<template>
   Here will be favorites 
   <Counter :count="count" @increment="increment" />
</template>

<style scoped></style>