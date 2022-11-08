<template>
	<div class="fixed bottom-[27px] right-[24px] flex min-h-[68px] min-w-[68px] flex-col-reverse items-center sm:flex-row-reverse">
		<!-- Quick -->
		<QuickButton v-if="selectedButton == 'quick'" @click="toggleBtn()" />

		<!-- Sub Quick -->
		<SubQuickButton v-else-if="selectedButton == 'inbox'" @to-quick="selectedButton = 'quick'">
			<div class="secondary-button bg-indicator-purple" @click="toggleBtn()">
				<img src="@/assets/Inbox_light.svg" alt="Inbox light logo" />
			</div>
		</SubQuickButton>

		<SubQuickButton v-else-if="selectedButton == 'task'" @to-quick="selectedButton = 'quick'">
			<div class="secondary-button bg-indicator-orange" @click="toggleBtn()">
				<img src="@/assets/Task_light.svg" alt="Task light logo" />
			</div>
		</SubQuickButton>

		<!-- Menu -->
		<Transition name="fade" mode="in-out">
			<QuickMenu v-show="isButtonHidden && selectedButton != 'inbox'" @click="selectedButton = 'inbox'">
				<template #title>Inbox</template>

				<img src="@/assets/Inbox.svg" alt="inbox logo" />
			</QuickMenu>
		</Transition>

		<Transition name="fade" mode="in-out">
			<QuickMenu v-show="isButtonHidden && selectedButton != 'task'" @click="selectedButton = 'task'">
				<template #title>Task</template>

				<img src="@/assets/Task.svg" alt="Task logo" />
			</QuickMenu>
		</Transition>
	</div>

	<!-- Modal -->
	<!-- <div class="fixed bottom-[110px] right-[34px] h-[737px] w-[734px] bg-white py-[24px] px-[32px]"> -->
	<div class="fixed top-0 right-[34px] h-[737px] w-[734px] bg-white py-[24px] px-[32px]">
		<div class="w-full">
			<div class="relative flex h-[40px] w-full items-center rounded-[5px] border border-custom-gray bg-white px-[86.32px]">
				<input class="h-full w-full outline-none placeholder:font-medium placeholder:text-custom-gray" type="text" id="search" placeholder="Search" />

				<img src="@/assets/search.svg" alt="search icon" class="inline-block" />
			</div>
		</div>

		<!-- <div class="flex w-full items-start border-b border-primary-gray py-[22px] last:border-none">
			<div
				class="relative mr-[34px] grid h-[34px] w-[34px] place-items-center rounded-full bg-person-gray after:absolute after:left-[17px] after:grid after:h-[34px] after:w-[34px] after:place-items-center after:rounded-full after:bg-primary-blue after:content-person">
				<img src="@/assets/person_gray.svg" alt="person icon" class="h-[12px] w-[12px]" />
			</div>

			<div class="flex-col">
				<div class="flex">
					<span class="mr-[16px] max-w-[414.73px] text-base font-bold text-primary-blue">101010-Naturalizition</span>
					<span class="font-light text-primary-dark">Januari 1,2022 19:23</span>
				</div>

				<div class="mt-[9.76px] text-primary-dark">
					<p class="text-sm font-bold">Cameron Phillips:</p>

					<p class="text-sm font-light">Please Checkout this out!</p>
				</div>
			</div>
		</div> -->

		<GroupChat />
	</div>
</template>

<script setup>
	import QuickButton from '@/components/QuickButton.vue';
	import SubQuickButton from '@/components/SubQuickButton.vue';
	import QuickMenu from '@/components/QuickMenu.vue';
	import GroupChat from '@/components/GroupChat.vue';
	import { ref, onMounted } from 'vue';

	defineEmits(['toQuick']);

	const isButtonHidden = ref(false);
	const selectedButton = ref('quick');

	function toggleBtn() {
		isButtonHidden.value = !isButtonHidden.value;
	}
</script>

<style scoped></style>
