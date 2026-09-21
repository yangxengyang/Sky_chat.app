<template>
  <div class="not-found-view">
    <EmptyState
      title="404 - ບໍ່ພົບໜ້າທີ່ທ່ານຕ້ອງການ"
      description="ໜ້າທີ່ທ່ານກຳລັງຊອກຫາອາດຖືກລຶບ ຫຼື ຍ້າຍແລ້ວ"
    >
      <template #action>
        <AppButton @click="router.push('/chats')">ກັບຄືນໜ້າຫຼັກ</AppButton>
      </template>
    </EmptyState>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import EmptyState from '../components/common/EmptyState.vue';
import AppButton from '../components/common/AppButton.vue';

const router = useRouter();
</script>

<style scoped>
.not-found-view {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
}
</style>
