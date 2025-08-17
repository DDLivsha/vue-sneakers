<script setup lang="ts">
   import { onMounted, ref, watch } from 'vue'
   import CardList from './components/CardList.vue'
   import Drawer from './components/Drawer.vue'
   import MyHeader from './components/MyHeader.vue'
   import axios from 'axios'
   import type { SneakersItem } from './components/CardList.vue'
   import debounce from 'lodash/debounce'

   const items = ref<SneakersItem[]>([])
   const sortBy = ref('title')
   const localSearch = ref('')

   const fetchData = async () => {
      try {

         const params: { sortBy: string, title?: string } = {
            sortBy: sortBy.value,
         }

         if (localSearch.value) {
            params.title = `*${localSearch.value}*`
         }

         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/items`, { params })

         items.value = data
      } catch (error) {
         console.log(error)
      }
   }
   //========DEFAULT FETCH==========
   onMounted(async () => {
      await fetchData()
   })

   //========FILTERS==========
   watch(sortBy, async () => {
      await fetchData()
   })

   const debouncedFetch = debounce(fetchData, 500)

   watch(localSearch, () => {
      debouncedFetch()
   })

</script>

<template>
   <!-- <Drawer /> -->
   <div class="w-4/5 mx-auto bg-slate-100 rounded-xl shadow-xl mt-14">
      <MyHeader />
      <div class="p-10">
         <div class="flex items-center gap-4 justify-between">
            <h2 class="text-3xl font-bold">Усі кросівки</h2>

            <div class="flex items-center gap-4">
               <select
                  class="py-2 px-3 border border-gray-200 rounded-md outline-none"
                  name="FilterInput"
                  id="Filter"
                  v-model="sortBy"
               >
                  <option value="title">По назві</option>
                  <option value="price">По ціні (від низької)</option>
                  <option value="-price">По ціні (від високої)</option>
               </select>
               <div class="relative">
                  <img
                     class="absolute top-3 left-3"
                     src="/search.svg"
                     alt="search"
                  />
                  <input
                     type="text"
                     placeholder="Пошук..."
                     class="pr-4 pl-10 py-2 border border-gray-200 rounded-md outline-none focus:border-gray-400"
                     v-model="localSearch"
                  />
               </div>
            </div>
         </div>

         <CardList :items="items" />
      </div>
   </div>
</template>

<style scoped></style>
