<template>
  <div class="file-view">
    <AppHeader title="ເອກະສານ ແລະ ໄຟລ໌" show-back variant="white" @back="router.back()" />

    <div class="file-list">
      <FileMessage
        v-for="(f, i) in files"
        :key="i"
        :file-name="f.fileName"
        :file-size="f.fileSize"
        :extension="f.extension"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppHeader from '../../components/common/AppHeader.vue';
import FileMessage from '../../components/chat/FileMessage.vue';

const router = useRouter();

const files = [
  { fileName: 'ເອກະສານ_ລາຍງານ.pdf', fileSize: '2.4 MB', extension: 'pdf' },
  { fileName: 'ໃບສະເໜີລາຄາ_2026.docx', fileSize: '512 KB', extension: 'docx' },
  { fileName: 'ຮູບແບບໂຄງຮ່າງ.zip', fileSize: '14.8 MB', extension: 'zip' },
  { fileName: 'ຕາຕະລາງ_ວຽກ.xlsx', fileSize: '1.1 MB', extension: 'xlsx' }
];
</script>

<style scoped>
.file-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.file-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
