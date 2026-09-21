<template>
  <div class="setting-item-row" @click="emit('click')">
    <div v-if="$slots.icon" class="item-icon-box">
      <slot name="icon"></slot>
    </div>

    <div class="item-text">
      <span class="title">{{ title }}</span>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>

    <div class="item-right">
      <slot name="right">
        <span v-if="value" class="value-text">{{ value }}</span>
        <ChevronRight :size="18" class="chevron" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next';

defineProps<{
  title: string;
  subtitle?: string;
  value?: string;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
.setting-item-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background-color: var(--card-bg);
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s;
}

.setting-item-row:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.item-icon-box {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background-color: var(--bg-color);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

.subtitle {
  font-size: 0.76rem;
  color: var(--text-secondary);
}

.item-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.value-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.chevron {
  color: var(--text-muted);
}
</style>
