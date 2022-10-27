import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', () => {
  const menuOpen = ref(false);

  function openMenu() {
    menuOpen.value = true;
  }

  function closeMenu() {
    menuOpen.value = false;
  }

  function toggleMenu() {
    menuOpen.value = !menuOpen.value;
  }

  return {
    menuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
});
