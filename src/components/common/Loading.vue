<template>
  <div class="loading-container">
    <div class="spinner-ring"></div>
    <span v-if="text" class="loading-text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  gap: 12px;
}

.spinner-ring {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(211, 47, 47, 0.15);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 0.9s linear infinite;
}

.loading-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
