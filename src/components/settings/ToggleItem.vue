<template>
  <div class="toggle-item-row" @click="toggle">
    <div class="item-text">
      <span class="title">{{ title }}</span>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>

    <div class="switch" :class="{ active: modelValue }">
      <div class="switch-handle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  title: string;
  subtitle?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

function toggle() {
  emit('update:modelValue', !props.modelValue);
}
</script>

<style scoped>
.toggle-item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
}

.item-text {
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

.switch {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background-color: #e5e7eb;
  position: relative;
  transition: background-color 0.2s;
}

.switch.active {
  background-color: var(--primary-color);
}

.switch-handle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.switch.active .switch-handle {
  transform: translateX(20px);
}
</style>
