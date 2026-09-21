<template>
  <header class="app-header" :class="[variant]">
    <div class="header-left">
      <button v-if="showBack" class="icon-btn" @click="emit('back')">
        <ChevronLeft :size="24" />
      </button>
      <slot name="left">
        <div v-if="title || subtitle" class="header-titles">
          <h1 class="header-title">{{ title }}</h1>
          <span v-if="subtitle" class="header-subtitle">{{ subtitle }}</span>
        </div>
      </slot>
    </div>

    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';

withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    showBack?: boolean;
    variant?: 'red' | 'white' | 'transparent';
  }>(),
  {
    showBack: false,
    variant: 'red'
  }
);

const emit = defineEmits<{
  (e: 'back'): void;
}>();
</script>

<style scoped>
.app-header {
  height: var(--header-height);
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 40;
  transition: var(--transition-fast);
}

.app-header.red {
  background-color: var(--header-bg);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.2);
}

.app-header.white {
  background-color: var(--card-bg);
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.app-header.transparent {
  background-color: transparent;
  color: #ffffff;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-titles {
  display: flex;
  flex-direction: column;
}

.header-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.2;
}

.header-subtitle {
  font-size: 0.75rem;
  opacity: 0.85;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: var(--transition-fast);
}

.icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
