<script setup lang="ts">
   import { computed, onMounted, provide, ref, watch } from 'vue'
   import CardList from './components/CardList.vue'
   import Drawer from './components/Drawer.vue'
   import MyHeader from './components/MyHeader.vue'
   import axios from 'axios'
   import type { SneakersItem } from './components/CardList.vue'
   import debounce from 'lodash/debounce'

   const items = ref<SneakersItem[]>([])
   const drawerOpen = ref(false)
   const sortBy = ref('title')
   const localSearch = ref('')
   const cart = ref<SneakersItem[]>([])
   const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
   const vatPrice = computed(() => totalPrice.value * 0.05)
   provide('prices', { totalPrice, vatPrice })

   //========DEFAULT FETCH==========
   const fetchData = async () => {
      try {

         const params: { sortBy: string, title?: string } = {
            sortBy: sortBy.value,
         }

         if (localSearch.value) {
            params.title = `*${localSearch.value}*`
         }

         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/items`, { params })

         items.value = data.map((item: SneakersItem) => ({
            ...item,
            isFavorite: false,
            isAdded: false
         }))
      } catch (error) {
         console.log(error)
      }
   }
   const fetchFavoritesData = async () => {
      try {

         const { data: favorites } = await axios.get(`${import.meta.env.VITE_API_URL}/favorites`)

         items.value = items.value.map((item: SneakersItem) => {
            const favorite = favorites.find((favorite: any) => favorite.parentId === item.id)

            if (!favorite) {
               return item
            } else {
               return {
                  ...item,
                  isFavorite: true,
                  favoriteId: favorite.id
               }
            }
         })
      } catch (error) {
         console.log(error)
      }
   }
   onMounted(async () => {
      await fetchData()
      await fetchFavoritesData()
   })

   //========FILTERS==========
   watch(sortBy, async () => {
      await fetchData()
   })

   const debouncedFetch = debounce(fetchData, 500)

   watch(localSearch, () => {
      debouncedFetch()
   })

   //========ADD TO FAVORITE & ADD TO CART==========
   const addToFavorite = async (item: SneakersItem) => {
      if (!item.isFavorite) {
         try {
            item.isFavorite = true
            const obj = {
               parentId: item.id
            }
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/favorites`, obj)
            item.favoriteId = data.id
         } catch (error) {
            console.log(error)
         }
      } else {
         try {
            item.isFavorite = false
            await axios.delete(`${import.meta.env.VITE_API_URL}/favorites/${item.favoriteId}`)
         } catch (error) {
            console.log(error)
         }
      }
   }
   const addToCart = async (item: SneakersItem) => {
      if (!item.isAdded) {
         cart.value.push(item)
         item.isAdded = true
      }
   }
   const removeFromCart = async (item: SneakersItem) => {
      if (item.isAdded) {
         cart.value = cart.value.filter((i: SneakersItem) => i.id !== item.id)
         item.isAdded = false
      }
   }
   provide('removeFromCart', removeFromCart)

   //========DRAWER==========
   const toggleDrawer = () => {
      drawerOpen.value = !drawerOpen.value
   }
   provide('toggleDrawer', toggleDrawer)
   provide('cart', cart)

</script>

<template>
   <Drawer v-if="drawerOpen" />
   <div class="w-4/5 mx-auto bg-slate-100 rounded-xl shadow-xl mt-14">
      <MyHeader :totalPrice="totalPrice" />
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

         <CardList
            :items="items"
            @addToFavorite="addToFavorite"
            @addToCart="addToCart"
         />
      </div>
   </div>
</template>

<style scoped></style>
