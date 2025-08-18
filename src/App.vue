<script setup lang="ts">
   import { computed, provide, ref, watch } from 'vue'
   import Drawer from './components/Drawer.vue'
   import MyHeader from './components/MyHeader.vue'
   import axios from 'axios'
   import type { SneakersItem } from './components/CardList.vue'
   import Home from './pages/Home.vue'

   const drawerOpen = ref(false)
   const cart = ref<SneakersItem[]>([])
   provide('cart', cart)
   const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
   const vatPrice = computed(() => totalPrice.value * 0.05)
   provide('prices', { totalPrice, vatPrice })
   const isCreateOrder = ref(false)
   provide('isCreateOrder', isCreateOrder)
   const isSuccessOrder = ref(false)
   provide('isSuccessOrder', isSuccessOrder)






   //========ADD TO FAVORITE & ADD TO CART==========

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

   let timeoutId: ReturnType<typeof setTimeout> | null = null

   function triggerSuccess() {
      if (timeoutId) {
         clearTimeout(timeoutId)
      }

      isSuccessOrder.value = true

      timeoutId = setTimeout(() => {
         isSuccessOrder.value = false
         toggleDrawer()
         timeoutId = null
      }, 1500)
   }

   //=======ORDER==========
   const createOrder = async () => {
      try {
         isCreateOrder.value = true
         await axios.post(`${import.meta.env.VITE_API_URL}/orders`, {
            items: cart.value,
            totalPrice: totalPrice.value
         })
         cart.value = []
         triggerSuccess()
      } catch (error) {
         console.log(error)
      } finally {
         isCreateOrder.value = false
      }
   }
   provide('createOrder', createOrder)

   watch(cart, () => {
      localStorage.setItem('cart', JSON.stringify(cart.value))
   }, { deep: true })

</script>

<template>
   <Drawer v-if="drawerOpen" />
   <div class="w-4/5 mx-auto bg-slate-100 rounded-xl shadow-xl mt-14">
      <MyHeader :totalPrice="totalPrice" />
      <div class="p-10">
         <router-view></router-view>
      </div>
   </div>
</template>

<style scoped></style>
