import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', () => {
	// Data
	const isDropDown = ref(false);
	const selectedOption = ref('My Tasks');

	const todoList = ref([
		{ title: 'Close off Case #012920- RODRIGUES, Amiguel', description: 'hello world', isDone: false, dateline: '22/12/2023', isDetailShowed: false },
		{ title: 'some title', description: 'hello world', isDone: false, dateline: '22/12/2023', isDetailShowed: false },
		{ title: 'some title', description: 'hello world', isDone: false, dateline: '22/12/2023', isDetailShowed: false },
		{ title: 'some title', description: 'hello world', isDone: false, dateline: '22/12/2023', isDetailShowed: false },
	]);

	// Computed Data

	// Methods
	function addTodo() {
		todoList.value.push({ title: '', description: '', isDone: false, dateline: '', isDetailShowed: true });

		console.log(todoList.value);
	}

	return { isDropDown, selectedOption, todoList, addTodo };
});
