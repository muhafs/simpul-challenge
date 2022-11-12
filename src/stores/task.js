import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', () => {
	// Data
	const isDropDown = ref(false);
	const selectedOption = ref('My Tasks');

	const todoList = ref([
		{ id: 1, title: 'Close off Case #012920- RODRIGUES, Amiguel', description: 'hello world', isDone: false, dateline: '22/12/2023' },
		{ id: 2, title: 'some title', description: 'hello world', isDone: false, dateline: '22/12/2023' },
		{ id: 3, title: 'some title', description: 'hello world', isDone: false, dateline: '22/12/2023' },
		{ id: 4, title: 'some title', description: 'hello world', isDone: false, dateline: '22/12/2023' },
	]);

	// Computed Data

	// Methods

	return { isDropDown, selectedOption, todoList };
});
