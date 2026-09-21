<template>
  <div class="status-item-row" @click="emit('click')">
    <div class="avatar-ring-box" :class="{ 'has-unread': item.hasUnread, 'is-self': item.isSelf }">
      <Avatar :src="item.userAvatar" :alt="item.userName" :size="52" />
      <span v-if="item.isSelf" class="add-plus-badge">
        <Plus :size="14" />
      </span>
    </div>

    <div class="status-info">
      <h4 class="user-name">{{ item.userName }}</h4>
      <span class="time-label">{{ item.timestamp }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import type { UserStatusItem } from '../../types/status';

import Avatar from '../common/Avatar.vue';

defineProps<{
  item: UserStatusItem;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
.status-item-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background-color: var(--card-bg);
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition-fast);
}

.status-item-row:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.avatar-ring-box {
  position: relative;
  border-radius: 50%;
  padding: 3px;
  border: 2px solid transparent;
}

.avatar-ring-box.has-unread {
  border-color: var(--primary-color);
}

.avatar-ring-box.is-self {
  border-color: transparent;
}

.add-plus-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--card-bg);
}

.status-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.user-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.time-label {
  font-size: 0.78rem;
  color: var(--text-secondary);
}
</style>
