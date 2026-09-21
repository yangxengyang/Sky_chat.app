import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  const notificationsEnabled = ref(true);
  const soundEnabled = ref(true);
  const vibrationEnabled = ref(true);
  const lockScreenNotification = ref(true);
  const lastSeenVisibility = ref<'everyone' | 'contacts' | 'nobody'>('everyone');
  const profileVisibility = ref<'everyone' | 'contacts' | 'nobody'>('everyone');
  const twoFactorAuth = ref(false);
  const language = ref<'lao' | 'english'>('lao');

  return {
    notificationsEnabled,
    soundEnabled,
    vibrationEnabled,
    lockScreenNotification,
    lastSeenVisibility,
    profileVisibility,
    twoFactorAuth,
    language
  };
});
