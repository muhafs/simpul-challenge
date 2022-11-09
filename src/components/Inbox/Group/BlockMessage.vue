<template>
	<div class="mx-[29px] mt-[10px]">
		<h2 :class="['font-bold', 'text-sub-chat-' + msg.color, msg.name.toLowerCase() == 'you' ? 'text-right' : '']">{{ msg.name }}</h2>

		<div :class="['mt-[4.66px] flex items-start justify-between', msg.name.toLowerCase() == 'you' ? 'flex-row-reverse' : '']">
			<div :class="['max-w-[66%] rounded-[5px] p-[10px]', 'bg-chat-' + msg.color]">
				<p class="text-sm font-light text-primary-dark">{{ msg.text }}</p>
				<p class="mt-[12px] text-xs font-light text-primary-dark">{{ msg.time }}</p>
			</div>

			<div :class="['mx-[9.67px] my-[4.67px] flex w-1/2 max-w-[50%]', msg.name.toLowerCase() == 'you' ? 'justify-end' : '']">
				<img src="@/assets/more_dots.svg" alt="more" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue';

	const props = defineProps({ msg: Object });
	const { msg } = toRefs(props);
</script>
