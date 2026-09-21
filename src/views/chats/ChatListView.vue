<template>
  <div class="chat-list-view">
    <!-- Header -->
    <AppHeader title="RedChat" variant="red">
      <template #left>
        <div class="header-brand">
          <Menu :size="22" class="menu-icon" />
          <h1 class="brand-name">RedChat</h1>
        </div>
      </template>

      <template #right>
        <button class="icon-btn" @click="router.push('/profile')">
          <QrCode :size="20" />
        </button>
        <button class="icon-btn" @click="router.push('/contacts')">
          <SquarePen :size="20" />
        </button>
      </template>
    </AppHeader>

    <!-- Search & Filter Bar -->
    <div class="search-filter-section">
      <SearchBar v-model="chatStore.searchQuery" placeholder="ຄົ້ນຫາ..." />

      <div class="filter-tabs">
        <button
          v-for="tab in filterTabs"
          :key="tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- Chat List Items -->
    <div class="chat-items-container">
      <ChatItemComponent
        v-for="chat in filteredList"
        :key="chat.id"
        :item="chat"
        @click="openChat(chat)"
      />

      <EmptyState
        v-if="filteredList.length === 0"
        title="ບໍ່ພົບລາຍການສົນທະນາ"
        description="ລອງຄົ້ນຫາຊື່ໃໝ່ ຫຼື ເລີ່ມຕົ້ນສົນທະນາ"
      />
    </div>

    <!-- Floating Action Button for New Chat -->
    <button class="fab-btn" @click="router.push('/contacts')">
      <PenSquare :size="22" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Menu, QrCode, SquarePen, PenSquare } from 'lucide-vue-next';
import { useChatStore } from '../../stores/chat';
import type { ChatItem } from '../../types/chat';

import AppHeader from '../../components/common/AppHeader.vue';
import SearchBar from '../../components/common/SearchBar.vue';
import ChatItemComponent from '../../components/chat/ChatItem.vue';
import EmptyState from '../../components/common/EmptyState.vue';

const router = useRouter();
const chatStore = useChatStore();

type TabType = 'all' | 'groups' | 'status';

const activeTab = ref<TabType>('all');

const filterTabs: { id: TabType; label: string }[] = [
  { id: 'all', label: 'ທັງໝົດ' },
  { id: 'groups', label: 'ກຸ່ມ' },
  { id: 'status', label: 'ສະຖານະ' }
];


const filteredList = computed(() => {
  let list = chatStore.filteredChats;
  if (activeTab.value === 'groups') {
    return list.filter((c) => c.type === 'group');
  }
  return list;
});

function openChat(chat: ChatItem) {
  chatStore.setActiveChat(chat.id);
  if (chat.type === 'group') {
    router.push(`/group/${chat.id}`);
  } else {
    router.push(`/chat/${chat.id}`);
  }
}
</script>

<style scoped>
.chat-list-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  position: relative;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-icon {
  cursor: pointer;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
}

.search-filter-section {
  padding: 12px 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-tabs {
  display: flex;
  gap: 8px;
}

.tab-btn {
  padding: 6px 16px;
  border-radius: var(--radius-full);
  border: none;
  background-color: var(--bg-color);
  color: var(--text-secondary);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
}

.tab-btn.active {
  background-color: var(--primary-color);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.25);
}

.chat-items-container {
  flex: 1;
  overflow-y: auto;
}

.fab-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(211, 47, 47, 0.4);
  z-index: 30;
  transition: transform 0.2s;
}

.fab-btn:active {
  transform: scale(0.92);
}

.icon-btn {
  background: none;
  border: none;
  color: #ffffff;
  padding: 4px;
  cursor: pointer;
}
</style>
