<template>
  <div class="contacts-view">
    <AppHeader title="ຜູ້ຕິດຕໍ່" variant="red">
      <template #right>
        <button class="icon-btn" @click="addContact">
          <UserPlus :size="20" />
        </button>
      </template>
    </AppHeader>

    <div class="search-box">
      <SearchBar v-model="contactsStore.searchQuery" placeholder="ຄົ້ນຫາຜູ້ຕິດຕໍ່..." />
    </div>

    <div class="contacts-list">
      <ContactItemComponent
        v-for="contact in contactsStore.filteredContacts"
        :key="contact.id"
        :contact="contact"
        @click="openContactProfile(contact)"
        @chat="startChat(contact)"
        @call="callContact(contact)"
      />

      <EmptyState
        v-if="contactsStore.filteredContacts.length === 0"
        title="ບໍ່ພົບຜູ້ຕິດຕໍ່"
        description="ບໍ່ພົບຜູ້ຕິດຕໍ່ທີ່ກົງກັບຄຳຄົ້ນຫາ"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { UserPlus } from 'lucide-vue-next';
import { useContactsStore } from '../stores/contacts';
import { useChatStore } from '../stores/chat';
import type { UserProfile } from '../types/user';

import AppHeader from '../components/common/AppHeader.vue';
import SearchBar from '../components/common/SearchBar.vue';
import ContactItemComponent from '../components/contacts/ContactItem.vue';
import EmptyState from '../components/common/EmptyState.vue';

const router = useRouter();
const contactsStore = useContactsStore();
const chatStore = useChatStore();

function addContact() {
  alert('ເພີ່ມຜູ້ຕິດຕໍ່ໃໝ່');
}

function openContactProfile(_contact: UserProfile) {
  router.push('/profile');
}

function startChat(_contact: UserProfile) {
  chatStore.setActiveChat('c1');
  router.push('/chat/c1');
}

function callContact(contact: UserProfile) {
  alert(`ກຳລັງໂທຫາ ${contact.name}`);
}
</script>

<style scoped>
.contacts-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.search-box {
  padding: 12px 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
}

.contacts-list {
  flex: 1;
  overflow-y: auto;
}

.icon-btn {
  background: none;
  border: none;
  color: #ffffff;
  padding: 4px;
  cursor: pointer;
}
</style>
