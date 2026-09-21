<template>
  <div class="call-item">
    <Avatar :src="item.userAvatar" :alt="item.userName" :size="48" />

    <div class="call-info">
      <h4 class="user-name">{{ item.userName }}</h4>
      <div class="sub-row">
        <CallTypeIcon :status="item.callStatus" />
        <span class="time-label">{{ item.timestamp }}</span>
        <span v-if="item.duration" class="duration-label">({{ item.duration }})</span>
      </div>
    </div>

    <button class="call-action-btn" @click="emit('call')">
      <Phone v-if="item.callType === 'audio'" :size="20" />
      <Video v-else :size="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Phone, Video } from 'lucide-vue-next';
import type { CallItem as CallItemType } from '../../types/call';

import Avatar from '../common/Avatar.vue';
import CallTypeIcon from './CallTypeIcon.vue';

defineProps<{
  item: CallItemType;
}>();

const emit = defineEmits<{
  (e: 'call'): void;
}>();
</script>

<style scoped>
.call-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
}

.call-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.sub-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.call-action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.call-action-btn:hover {
  background-color: rgba(16, 185, 129, 0.2);
}
</style>
