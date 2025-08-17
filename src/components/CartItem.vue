<script setup lang="ts">
	import type { SneakersItem } from './CardList.vue';

	interface Props extends SneakersItem {
		removeFromCart: (item: SneakersItem) => void
	}

	const props = defineProps<Props>()
</script>

<template>
	<div class="border border-slate-100 p-4 rounded-xl flex gap-4 items-center shadow-sm">
		<img
			class="w-16 h-16"
			:src="imageUrl"
			:alt="title"
		/>
		<div class="flex justify-between gap-2 items-end flex-grow">
			<div>
				<p>{{ title }}</p>
				<b>{{ price }} грн.</b>
			</div>
			<img
				class="cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300"
				src="/close.svg"
				alt="close"
				@click="() => removeFromCart(props )"
			/>
		</div>
	</div>
</template>

<style scoped></style>
