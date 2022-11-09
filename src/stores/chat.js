import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useChatStore = defineStore('chat', () => {
	// Data
	const isYou = ref(false);
	const msgList = reactive([
		{
			name: 'You',
			text: "No worries. It will be completed ASAP. I've asked him yesterday.",
			time: '19:23',
			color: 'purple',
		},
		{
			name: 'Mary Hilda',
			text: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
			time: '19:25',
			color: 'brown',
		},
		{
			name: 'You',
			text: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
			time: '19:28',
			color: 'purple',
		},
		{
			name: 'Mary Hilda',
			text: 'Sure thing, Claren',
			time: '19:32',
			color: 'brown',
		},
		{
			name: 'Obaidullah Amarkhil',
			text: "Morning. I'll try to do them. Thanks",
			time: '19:40',
			color: 'green',
		},
	]);

	// Computed

	// Methods

	return { isYou, msgList };
});
