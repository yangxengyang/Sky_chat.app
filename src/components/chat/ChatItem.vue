<template>
  <div class="chat-item" :class="{ unread: item.unreadCount > 0 }" @click="emit('click')">
    <Avatar
      :src="item.avatar"
      :alt="item.name"
      :size="52"
      :show-online="item.type === 'private'"
      :is-online="item.online"
    />

    <div class="chat-info">
      <div class="top-row">
        <h4 class="chat-name">{{ item.name }}</h4>
        <span class="chat-time">{{ item.updatedAt }}</span>
      </div>

      <div class="bottom-row">
        <p class="chat-preview">{{ lastMessageText }}</p>
        <span v-if="item.unreadCount > 0" class="badge-count">{{ item.unreadCount }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ChatItem as ChatItemType } from '../../types/chat';

import Avatar from '../common/Avatar.vue';

const props = defineProps<{
  item: ChatItemType;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const lastMessageText = computed(() => {
  const lm = props.item.lastMessage;
  if (!lm) return '';
  if (typeof lm === 'string') return lm;
  if ('text' in lm && lm.text) return lm.text;
  if ('caption' in lm && lm.caption) return lm.caption;
  if ('fileName' in lm && lm.fileName) return `📄 ${lm.fileName}`;
  if ('audioUrl' in lm) return '🎵 ຂໍ້ຄວາມສຽງ';
  return '';
});

</script>

<style scoped>
.chat-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background-color: var(--card-bg);
  cursor: pointer;
  transition: var(--transition-fast);
  border-bottom: 1px solid var(--border-color);
}

.chat-item:hover {
  background-color: rgba(211, 47, 47, 0.04);
}

.chat-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-name {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-time {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.chat-preview {
  font-size: 0.85rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.unread .chat-name {
  font-weight: 700;
}

.unread .chat-preview {
  color: var(--text-primary);
  font-weight: 500;
}
</style>
