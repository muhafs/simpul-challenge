<template>
	<!-- Figma : h-[737px] w-[734px] -->
	<div class="fixed bottom-[110px] right-[34px] h-[75vh] w-[50%] rounded-[5px] bg-white" v-show="menu.currentMenu != 'quick'">
		<!-- default my-[24px] px-[32px] -->
		<!-- Inbox -->
		<template v-if="menu.currentMenu == 'inbox'">
			<!-- <SearchBar />

			<GroupInterface />
			<PrivateInterface /> -->

			<GroupChat />
		</template>

		<!-- Task -->
		<template v-else-if="menu.currentMenu == 'task'"> task </template>
	</div>
</template>

<script setup>
	import SearchBar from '@/components/Inbox/SearchBar.vue';
	import GroupInterface from '@/components/Inbox/GroupInterface.vue';
	import PrivateInterface from '@/components/Inbox/PrivateInterface.vue';

	import GroupChat from '@/components/Inbox/Group/GroupChat.vue';

	import { useMenuStore } from '@/stores/menu.js';

	const menu = useMenuStore();
</script>
