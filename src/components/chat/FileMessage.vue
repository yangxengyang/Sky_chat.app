<template>
  <div class="file-msg-box">
    <div class="file-icon-box">
      <FileText :size="24" />
    </div>
    <div class="file-info">
      <span class="file-name">{{ fileName }}</span>
      <span class="file-size">{{ fileSize }} • {{ extension.toUpperCase() }}</span>
    </div>
    <a :href="fileUrl || '#'" class="download-btn" target="_blank" download>
      <Download :size="18" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { FileText, Download } from 'lucide-vue-next';

withDefaults(
  defineProps<{
    fileName: string;
    fileSize: string;
    extension?: string;
    fileUrl?: string;
  }>(),
  {
    extension: 'pdf'
  }
);
</script>

<style scoped>
.file-msg-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: var(--radius-md);
  min-width: 220px;
}

.file-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--primary-light);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.file-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.file-name {
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-size {
  font-size: 0.72rem;
  opacity: 0.75;
}

.download-btn {
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
  transition: background 0.2s;
}

.download-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
