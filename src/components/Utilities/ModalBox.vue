<template>
	<!-- Figma : h-[737px] w-[734px] -->
	<div class="fixed bottom-[110px] right-[34px] h-[75vh] w-[50%] overflow-y-auto rounded-[5px] bg-white p-[18px] overflow-x-hidden scrollbar-thin scrollbar-thumb-border-gray scrollbar-thumb-rounded-full" v-show="menu.currentMenu != 'quick'">
		<!-- Inbox -->
		<template v-if="menu.currentMenu == 'inbox'"> Inbox </template>

		<!-- Task -->
		<TaskInterface v-else-if="menu.currentMenu == 'task'" />
	</div>
</template>

<script setup>
	import TaskInterface from '@/components/Task/TaskInterface.vue';

	import { useMenuStore } from '@/stores/menu.js';

	const menu = useMenuStore();
</script>
