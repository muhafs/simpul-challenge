<template>
	<div class="fixed bottom-[27px] right-[24px] flex min-h-[68px] min-w-[68px] flex-col-reverse items-center sm:flex-row-reverse">
		<!-- Quick -->
		<QuickButton v-if="menu.currentMenu == 'quick'" @click="menu.toggleMenu()" />

		<!-- Sub Quick -->
		<SubQuickButton v-else-if="menu.currentMenu == 'inbox'">
			<div class="primary-button bg-indicator-purple" @click="menu.toggleMenu()">
				<img src="@/assets/Inbox_light.svg" alt="Inbox light logo" />
			</div>
		</SubQuickButton>

		<SubQuickButton v-else-if="menu.currentMenu == 'task'">
			<div class="primary-button bg-indicator-orange" @click="menu.toggleMenu()">
				<img src="@/assets/Task_light.svg" alt="Task light logo" />
			</div>
		</SubQuickButton>

		<!-- Menu -->
		<Transition name="fade" mode="in-out">
			<QuickMenu :is-quick="menu.currentMenu" v-show="menu.isMenuOpen && menu.currentMenu != 'inbox'" @click="menu.currentMenu = 'inbox'">
				<template #title>Inbox</template>

				<img src="@/assets/Inbox.svg" alt="inbox logo" />
			</QuickMenu>
		</Transition>

		<Transition name="fade" mode="in-out">
			<QuickMenu :is-quick="menu.currentMenu" v-show="menu.isMenuOpen && menu.currentMenu != 'task'" @click="menu.currentMenu = 'task'">
				<template #title>Task</template>

				<img src="@/assets/Task.svg" alt="Task logo" />
			</QuickMenu>
		</Transition>
	</div>

	<!-- Modal -->
	<ModalBox />
</template>

<script setup>
	import QuickButton from '@/components/Utilities/QuickButton.vue';
	import SubQuickButton from '@/components/Utilities/SubQuickButton.vue';
	import QuickMenu from '@/components/Utilities/QuickMenu.vue';
	import ModalBox from '@/components/Utilities/ModalBox.vue';

	import { useMenuStore } from '@/stores/menu.js';
	const menu = useMenuStore();
</script>

<style scoped></style>
