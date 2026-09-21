<template>
  <Teleport to="body">
    <div v-if="status" class="status-viewer-overlay">
      <!-- Story Progress Bars -->
      <div class="progress-bar-container">
        <div
          v-for="(story, idx) in status.stories"
          :key="story.id"
          class="progress-track"
        >
          <div
            class="progress-fill"
            :style="{ width: idx < currentIndex ? '100%' : idx === currentIndex ? progress + '%' : '0%' }"
          ></div>
        </div>
      </div>

      <!-- Story Header -->
      <div class="story-header">
        <div class="user-meta">
          <Avatar :src="status.userAvatar" :alt="status.userName" :size="36" />
          <div class="info">
            <span class="name">{{ status.userName }}</span>
            <span class="time">{{ currentStory?.timestamp }}</span>
          </div>
        </div>
        <button class="close-btn" @click="emit('close')">
          <X :size="24" />
        </button>
      </div>

      <!-- Story Content -->
      <div class="story-body" @click="nextStory">
        <img :src="currentStory?.content" :alt="currentStory?.caption" class="story-media" />
        <div v-if="currentStory?.caption" class="story-caption-box">
          <p class="caption-text">{{ currentStory.caption }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue';
import { X } from 'lucide-vue-next';
import type { UserStatusItem } from '../../types/status';

import Avatar from '../common/Avatar.vue';

const props = defineProps<{
  status: UserStatusItem | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const currentIndex = ref(0);
const progress = ref(0);
let timer: any = null;

const currentStory = computed(() => props.status?.stories[currentIndex.value]);

watch(
  () => props.status,
  (val) => {
    if (val) {
      currentIndex.value = 0;
      startProgress();
    } else {
      stopProgress();
    }
  },
  { immediate: true }
);

function startProgress() {
  stopProgress();
  progress.value = 0;
  timer = setInterval(() => {
    progress.value += 2;
    if (progress.value >= 100) {
      nextStory();
    }
  }, 100);
}

function stopProgress() {
  if (timer) clearInterval(timer);
}

function nextStory() {
  if (!props.status) return;
  if (currentIndex.value < props.status.stories.length - 1) {
    currentIndex.value++;
    startProgress();
  } else {
    emit('close');
  }
}

onUnmounted(() => {
  stopProgress();
});
</script>

<style scoped>
.status-viewer-overlay {
  position: fixed;
  inset: 0;
  background-color: #000000;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.progress-bar-container {
  display: flex;
  gap: 6px;
  padding: 12px 16px 4px;
}

.progress-track {
  flex: 1;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #ffffff;
  transition: width 0.1s linear;
}

.story-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  color: #ffffff;
}

.user-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 0.95rem;
  font-weight: 600;
}

.time {
  font-size: 0.72rem;
  opacity: 0.75;
}

.close-btn {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 4px;
}

.story-body {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.story-media {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.story-caption-box {
  position: absolute;
  bottom: 40px;
  left: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  padding: 12px 18px;
  border-radius: var(--radius-md);
  color: #ffffff;
  text-align: center;
}

.caption-text {
  font-size: 1rem;
}
</style>
