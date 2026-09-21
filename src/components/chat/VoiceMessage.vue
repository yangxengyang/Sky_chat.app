<template>
  <div class="voice-msg-box" :class="{ 'is-self': isSelf }">
    <button class="play-btn" @click="togglePlay">
      <Play v-if="!isPlaying" :size="16" class="icon" />
      <Pause v-else :size="16" class="icon" />
    </button>

    <div class="waveform-container">
      <div class="bars">
        <span
          v-for="bar in 16"
          :key="bar"
          class="wave-bar"
          :style="{ height: getBarHeight(bar) + 'px' }"
          :class="{ active: isPlaying && bar <= activeBarCount }"
        ></span>
      </div>
      <span class="voice-duration">0:{{ durationSeconds < 10 ? '0' + durationSeconds : durationSeconds }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import { Play, Pause } from 'lucide-vue-next';

withDefaults(
  defineProps<{
    audioUrl?: string;
    durationSeconds?: number;
    isSelf?: boolean;
  }>(),
  {
    durationSeconds: 12,
    isSelf: false
  }
);

const isPlaying = ref(false);
const activeBarCount = ref(0);
let timer: any = null;

function togglePlay() {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    activeBarCount.value = 0;
    timer = setInterval(() => {
      activeBarCount.value = (activeBarCount.value + 1) % 17;
      if (activeBarCount.value === 16) {
        isPlaying.value = false;
        clearInterval(timer);
      }
    }, 400);
  } else {
    clearInterval(timer);
  }
}

function getBarHeight(index: number) {
  const heights = [8, 14, 22, 12, 18, 24, 16, 10, 20, 26, 14, 18, 22, 10, 16, 12];
  return heights[index - 1] || 12;
}

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.voice-msg-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: var(--radius-md);
  min-width: 180px;
}

.play-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}

.is-self .play-btn {
  background-color: #ffffff;
  color: var(--primary-color);
}

.waveform-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.bars {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 28px;
}

.wave-bar {
  width: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  transition: height 0.2s, background-color 0.2s;
}

.is-self .wave-bar {
  background-color: rgba(255, 255, 255, 0.5);
}

.is-self .wave-bar.active {
  background-color: #ffffff;
}

.wave-bar.active {
  background-color: var(--primary-color);
}

.voice-duration {
  font-size: 0.68rem;
  opacity: 0.8;
}
</style>
