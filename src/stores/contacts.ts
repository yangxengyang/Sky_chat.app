import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { UserProfile } from '../types/user';

import { mockUsers } from '../data/users';

export const useContactsStore = defineStore('contacts', () => {
  const contacts = ref<UserProfile[]>(mockUsers.filter((u) => u.id !== 'u0'));
  const searchQuery = ref('');

  const filteredContacts = computed(() => {
    if (!searchQuery.value.trim()) return contacts.value;
    const q = searchQuery.value.toLowerCase();
    return contacts.value.filter((c) => c.name.toLowerCase().includes(q) || c.phone.includes(q));
  });

  return {
    contacts,
    searchQuery,
    filteredContacts
  };
});
