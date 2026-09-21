<template>
  <div
    class="avatar-container"
    :style="{ width: size + 'px', height: size + 'px' }"
    :class="{ 'has-badge': showOnline }"
  >
    <img
      :src="src || fallbackImage"
      :alt="alt"
      class="avatar-img"
      @error="handleError"
    />
    <span
      v-if="showOnline"
      class="online-dot"
      :class="isOnline ? 'online' : 'offline'"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    size?: number;
    showOnline?: boolean;
    isOnline?: boolean;
  }>(),
  {
    size: 48,
    alt: 'Avatar',
    showOnline: false,
    isOnline: false
  }
);

const fallbackImage = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80';
const currentSrc = ref(props.src);

function handleError() {
  currentSrc.value = fallbackImage;
}
</script>

<style scoped>
.avatar-container {
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.online-dot {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

.online-dot.online {
  background-color: #10b981;
}

.online-dot.offline {
  background-color: #9ca3af;
}
</style>
