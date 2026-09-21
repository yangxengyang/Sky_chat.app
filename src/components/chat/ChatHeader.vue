<template>
  <header class="chat-header">
    <div class="left-section">
      <button class="icon-btn" @click="emit('back')">
        <ChevronLeft :size="24" />
      </button>

      <div class="user-meta" @click="emit('clickProfile')">
        <Avatar
          :src="avatar"
          :alt="title"
          :size="40"
          :show-online="type === 'private'"
          :is-online="online"
        />

        <div class="titles">
          <h2 class="name">{{ title }}</h2>
          <span class="status-sub">{{ subtitleText }}</span>
        </div>
      </div>
    </div>

    <div class="right-section">
      <button class="icon-btn" @click="emit('audioCall')">
        <Phone :size="20" />
      </button>
      <button class="icon-btn" @click="emit('videoCall')">
        <Video :size="20" />
      </button>
      <button class="icon-btn" @click="emit('moreOptions')">
        <MoreVertical :size="20" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ChevronLeft, Phone, Video, MoreVertical } from 'lucide-vue-next';
import Avatar from '../common/Avatar.vue';

const props = withDefaults(
  defineProps<{
    title: string;
    avatar: string;
    type?: 'private' | 'group';
    online?: boolean;
    memberCount?: number;
  }>(),
  {
    type: 'private',
    online: false
  }
);

const emit = defineEmits<{
  (e: 'back'): void;
  (e: 'clickProfile'): void;
  (e: 'audioCall'): void;
  (e: 'videoCall'): void;
  (e: 'moreOptions'): void;
}>();

const subtitleText = computed(() => {
  if (props.type === 'group') {
    return `${props.memberCount || 5} ສມາຊິກ`;
  }
  return props.online ? 'ອອນໄລນ໌' : 'ອັອບໄລນ໌';
});
</script>

<style scoped>
.chat-header {
  height: 60px;
  background-color: var(--header-bg);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  position: relative;
  z-index: 40;
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.2);
}

.left-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.titles {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
}

.status-sub {
  font-size: 0.72rem;
  opacity: 0.85;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon-btn {
  background: none;
  border: none;
  color: #ffffff;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
}

.icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
