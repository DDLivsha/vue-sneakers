<script setup lang="ts">
interface Props {
   closeDrawer?: () => void
}

const props = defineProps<Props>()
</script>

<template>
      <div class="flex items-center mb-4 gap-5">
         <svg @click="closeDrawer"
            class="cursor-pointer rotate-180 opacity-30 hover:opacity-100 hover:-translate-x-1 transition-all duration-300"
            width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black">
            <path d="M1 7H14.7143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
         <h2 class="text-2xl font-bold">Корзина</h2>
      </div>
</template>