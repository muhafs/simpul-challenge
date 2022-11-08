<template>
	<div class="fixed bottom-[27px] right-[24px] flex min-h-[68px] min-w-[68px] flex-col-reverse items-center sm:flex-row-reverse">
		<!-- Quick -->
		<QuickButton v-if="selectedButton == 'quick'" @click="toggleBtn()" />

		<!-- Sub Quick -->
		<SubQuickButton v-else-if="selectedButton == 'inbox'" @to-quick="selectedButton = 'quick'">
			<div class="primary-button bg-indicator-purple" @click="toggleBtn()">
				<img src="@/assets/Inbox_light.svg" alt="Inbox light logo" />
			</div>
		</SubQuickButton>

		<SubQuickButton v-else-if="selectedButton == 'task'" @to-quick="selectedButton = 'quick'">
			<div class="primary-button bg-indicator-orange" @click="toggleBtn()">
				<img src="@/assets/Task_light.svg" alt="Task light logo" />
			</div>
		</SubQuickButton>

		<!-- Menu -->
		<Transition name="fade" mode="in-out">
			<QuickMenu :is-quick="selectedButton" v-show="isButtonHidden && selectedButton != 'inbox'" @click="selectedButton = 'inbox'">
				<template #title>Inbox</template>

				<img src="@/assets/Inbox.svg" alt="inbox logo" />
			</QuickMenu>
		</Transition>

		<Transition name="fade" mode="in-out">
			<QuickMenu :is-quick="selectedButton" v-show="isButtonHidden && selectedButton != 'task'" @click="selectedButton = 'task'">
				<template #title>Task</template>

				<img src="@/assets/Task.svg" alt="Task logo" />
			</QuickMenu>
		</Transition>
	</div>

	<!-- Modal -->
	<!-- h-[737px] w-[734px] -->
	<div class="fixed bottom-[110px] right-[34px] h-[75vh] w-[50%] bg-white py-[24px] px-[32px]" v-show="selectedButton != 'quick'">
		<template v-if="selectedButton == 'inbox'">
			<SearchBar />

			<GroupInterface />
			<PrivateInterface />
		</template>
		<template v-else-if="selectedButton == 'task'"> task </template>
	</div>
</template>

<script setup>
	import QuickButton from '@/components/QuickButton.vue';
	import SubQuickButton from '@/components/SubQuickButton.vue';
	import QuickMenu from '@/components/QuickMenu.vue';

	import SearchBar from '@/components/SearchBar.vue';
	import GroupInterface from '@/components/GroupInterface.vue';
	import PrivateInterface from '@/components/PrivateInterface.vue';

	import { ref, onMounted } from 'vue';

	defineEmits(['toQuick']);

	const isButtonHidden = ref(false);
	const selectedButton = ref('quick');

	function toggleBtn() {
		isButtonHidden.value = !isButtonHidden.value;
	}
</script>

<style scoped></style>
