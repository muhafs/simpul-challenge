<template>
	<div class="relative mt-[26px] sm:ml-[41px] sm:mt-0">
		<div class="primary-button absolute top-0 left-[-15px] -z-10 bg-primary-dark" @click="$emit('toQuick')"></div>

		<slot>
			<div class="primary-button bg-primary-blue">
				<span class="font-bold text-white">Logo</span>
			</div>
		</slot>
	</div>
</template>

<script setup></script>
