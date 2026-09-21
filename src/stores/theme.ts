import { defineStore } from 'pinia';
import { ref } from 'vue';

export type ThemeMode = 'red' | 'dark' | 'light';

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<ThemeMode>('red');

  function setTheme(theme: ThemeMode) {
    currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  return {
    currentTheme,
    setTheme
  };
});
