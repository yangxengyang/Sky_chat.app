<template>
  <div class="setting-section">
    <h3 v-if="title" class="section-title">{{ title }}</h3>
    <div class="section-card">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<style scoped>
.setting-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
  padding: 0 16px 8px;
}

.section-card {
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
</style>
