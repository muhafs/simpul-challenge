<template>
	<div class="secondary-button relative mt-[26px] bg-primary-light hover:bg-opacity-80 sm:ml-[26px] sm:mt-0">
		<div class="absolute -left-[50px] text-white sm:left-1/2 sm:-top-8 sm:-translate-x-1/2" v-show="isQuick == 'quick'">
			<slot name="title">Title</slot>
		</div>

		<slot>
			<span class="font-bold text-primary-blue">Logo</span>
		</slot>
	</div>
</template>

<script setup>
	defineProps({
		isQuick: String,
	});
</script>
