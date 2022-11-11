import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', () => {
	// Data
	const isMenuOpen = ref(false);
	const currentMenu = ref('task');

	// Computed

	// Methods
	function toggleMenu() {
		isMenuOpen.value = !isMenuOpen.value;
	}

	return { isMenuOpen, currentMenu, toggleMenu };
});
