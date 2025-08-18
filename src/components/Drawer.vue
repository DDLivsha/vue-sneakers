<script setup lang="ts">
	import CartItemList from './CartItemList.vue'
	import DrawerHead from './DrawerHead.vue'
	import CartEnd from './CartEnd.vue'
	import { inject } from 'vue'
	import InfoBlock from './InfoBlock.vue'

	const isSuccessOrder = inject('isSuccessOrder', false)
	const cart = inject('cart', [])
</script>

<template>
	<!-- overlay -->
	<div
		v-auto-animate
		class="fixed top-0 left-0 h-full w-full bg-black opacity-60 z-10"
	></div>
	<!-- drawer -->
	<div
		v-auto-animate
		v-if="!isSuccessOrder"
		class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col justify-between"
	>
		<DrawerHead />
		<InfoBlock
			v-auto-animate
			title="Кошик порожній"
			description="Додайте кросівки у кошик"
			imageUrl="/package-icon.png"
			v-if="cart.length === 0"
		/>
		<CartItemList v-else />
		<CartEnd v-if="cart.length > 0" />
	</div>

	<div
		v-auto-animate
		v-if="isSuccessOrder"
		class="bg-white w-56 fixed z-20 p-8 flex justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl text-2xl font-semibold gap-4"
	><img
			src="/checked.svg"
			alt="checked"
		>Success!</div>
</template>
