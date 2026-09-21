<template>
  <div class="contact-item-row" @click="emit('click')">
    <Avatar :src="contact.avatar" :alt="contact.name" :size="48" :show-online="true" :is-online="contact.status === 'online'" />

    <div class="contact-info">
      <h4 class="contact-name">{{ contact.name }}</h4>
      <span class="contact-bio">{{ contact.bio || contact.phone }}</span>
    </div>

    <div class="contact-actions">
      <button class="action-btn" @click.stop="emit('chat')">
        <MessageSquare :size="18" />
      </button>
      <button class="action-btn" @click.stop="emit('call')">
        <Phone :size="18" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MessageSquare, Phone } from 'lucide-vue-next';
import type { UserProfile } from '../../types/user';

import Avatar from '../common/Avatar.vue';

defineProps<{
  contact: UserProfile;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
  (e: 'chat'): void;
  (e: 'call'): void;
}>();
</script>

<style scoped>
.contact-item-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.2s;
}

.contact-item-row:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.contact-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.contact-bio {
  font-size: 0.78rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: var(--primary-light);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s;
}

.action-btn:hover {
  transform: scale(1.08);
}
</style>
