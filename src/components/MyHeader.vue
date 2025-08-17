<script setup lang="ts">
	import { inject } from 'vue'
	const toggleDrawer = inject<() => void>('toggleDrawer')
	defineProps<{ totalPrice: number }>()
</script>

<template>
	<header class="flex items-center justify-between border-b border-slate-300 p-10">
		<div class="flex items-center gap-4">
			<img
				src="/logo.png"
				alt="Sneakers logo"
				class="w-10"
			/>
			<div>
				<h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
				<p class="text-slate-400">Магазин найкращих кросівок</p>
			</div>
		</div>
		<ul class="flex items-center gap-10">
			<li
				@click="toggleDrawer"
				class="flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-300 cursor-pointer"
			>
				<img
					src="/cart.svg"
					alt="cart"
				/>
				<b> {{ totalPrice }} грн.</b>
			</li>
			<li class="flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-300 cursor-pointer">
				<img
					src="/heart.svg"
					alt="Favorite"
				/>
				<p>Закладки</p>
			</li>
			<li class="flex items-center gap-2 text-slate-500 hover:text-black transition-all duration-300 cursor-pointer">
				<img
					src="/profile.svg"
					alt="profile"
				/>
				<p>Профіль</p>
			</li>
		</ul>
	</header>
</template>
