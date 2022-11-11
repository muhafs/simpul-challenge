<template>
	<div class="flex h-full w-full flex-col justify-between">
		<header class="relative left-0 top-0 mb-[3.38px] flex min-h-[73px] w-full items-center rounded-t-[5px] border-b border-border-gray">
			<div class="flex cursor-pointer items-center pl-[29px] pr-[18.43px]">
				<img src="@/assets/arrow_back.svg" alt="back" class="h-[16px] w-[16px]" />
			</div>

			<div class="mt-[19.62px] mb-[18.44px] w-full">
				<h2 class="text-base font-bold text-primary-blue">I-589 - AMARKHIL, Obaidillah[Affirmative Filing with ZHN]</h2>
				<h3 class="text-xs font-normal text-custom-gray">3 Participant</h3>
			</div>

			<div class="ml-auto flex cursor-pointer items-center px-[21px]">
				<img src="@/assets/close.svg" alt="Close" class="h-[16px] w-[16px]" />
			</div>
		</header>

		<main class="bottom-0 h-full w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-border-gray scrollbar-thumb-rounded-full">
			<div class="mx-[29px] mt-[10px]">
				<h2 class="font-bold text-sub-chat-purple" :class="{ 'text-right': true }">You</h2>

				<div class="mt-[4.66px] flex items-start justify-between" :class="{ 'flex-row-reverse': true }">
					<div class="max-w-[66%] rounded-[5px] bg-chat-purple p-[10px]">
						<p class="text-sm font-light text-primary-dark">Hello Obaidullah</p>
						<p class="mt-[12px] text-xs font-light text-primary-dark">19:32</p>
					</div>

					<div class="mx-[9.67px] my-[4.67px] flex w-1/2 max-w-[50%]" :class="{ 'justify-end': true }">
						<img src="@/assets/more_dots.svg" alt="more" />
					</div>
				</div>
			</div>

			<div class="mx-[29px] mt-[10px]">
				<h2 class="font-bold text-sub-chat-brown">Mary Hilda</h2>

				<div class="mt-[4.66px] flex items-start justify-between">
					<div class="max-w-[66%] rounded-[5px] bg-chat-brown p-[10px]">
						<p class="text-sm font-light text-primary-dark">Hello Obaidullah</p>
						<p class="mt-[12px] text-xs font-light text-primary-dark">19:32</p>
					</div>

					<div class="mx-[9.67px] my-[4.67px] flex w-1/2 max-w-[50%]">
						<img src="@/assets/more_dots.svg" alt="more" />
					</div>
				</div>
			</div>

			<div class="mx-[29px] mt-[10px]">
				<h2 class="font-bold text-sub-chat-green">Obaidullah</h2>

				<div class="mt-[4.66px] flex items-start justify-between">
					<div class="max-w-[66%] rounded-[5px] bg-chat-green p-[10px]">
						<p class="text-sm font-light text-primary-dark">Hello</p>
						<p class="mt-[12px] text-xs font-light text-primary-dark">19:32</p>
					</div>

					<div class="mx-[9.67px] my-[4.67px] flex w-1/2 max-w-[50%]">
						<img src="@/assets/more_dots.svg" alt="more" />
					</div>
				</div>
			</div>

			<PrevMessage> </PrevMessage>

			<BlockMessage v-for="(msg, index) in chat.msgList" :key="index" :msg="msg" />

			<NewMessage />
		</main>

		<footer class="flex items-center py-[19px] px-[20px]">
			<textarea class="mr-[13px] h-[40px] flex-1 truncate rounded-[5px] border border-primary-gray px-[16px] py-[8px] text-sm shadow-none outline-none" placeholder="Type a new message"></textarea>
			<button class="grid h-[40px] w-[76px] place-items-center rounded-[5px] bg-primary-blue font-bold text-white">Send</button>
		</footer>
	</div>
</template>

<script setup>
	import BlockMessage from '@/components/Inbox/Group/BlockMessage.vue';
	import PrevMessage from '@/components/Inbox/Group/PrevMessage.vue';
	import NewMessage from '@/components/Inbox/Group/NewMessage.vue';

	import { useChatStore } from '@/stores/chat.js';
	const chat = useChatStore();
</script>
