<script setup lang="ts">
import CardList from './components/CardList.vue';
import MyHeader from './components/MyHeader.vue';
</script>

<template>
   <div class="w-4/5 mx-auto min-h-screen bg-slate-100 rounded-xl shadow-xl mt-14">
      <MyHeader />
      <div class="p-10">
         <h2 class="text-3xl font-bold">Усі кросівки</h2>
         <CardList />
      </div>
   </div>
</template>

<style scoped></style>
