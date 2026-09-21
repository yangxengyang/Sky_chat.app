import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { UserProfile } from '../types/user';

import { currentUser } from '../data/users';
import { AuthService } from '../services/auth.service';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserProfile | null>(currentUser);
  const token = ref<string | null>('mock-token-active');
  const isAuthenticated = computed(() => !!user.value && !!token.value);

  async function login(phoneOrEmail: string, pass: string) {
    const res = await AuthService.login(phoneOrEmail, pass);
    token.value = res.token;
    user.value = res.user;
  }

  async function register(name: string, phone: string) {
    const res = await AuthService.register(name, phone);
    token.value = res.token;
    user.value = res.user;
  }

  async function logout() {
    await AuthService.logout();
    user.value = null;
    token.value = null;
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    register,
    logout
  };
});
