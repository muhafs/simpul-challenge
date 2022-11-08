import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	// Data
	const count = ref(0);

	// Computed Data
	const doubleCount = computed(() => count.value * 2);

	// Methods
	function increment() {
		count.value++;
	}

	return { count, doubleCount, increment };
});
