<template>
  <div class="calls-view">
    <AppHeader title="ການໂທ" variant="red">
      <template #right>
        <button class="icon-btn" @click="startNewCall">
          <PhoneCall :size="20" />
        </button>
      </template>
    </AppHeader>

    <div class="filter-bar">
      <button
        class="tab-btn"
        :class="{ active: callsStore.filterType === 'all' }"
        @click="callsStore.setFilter('all')"
      >
        ສາຍທັງໝົດ
      </button>
      <button
        class="tab-btn"
        :class="{ active: callsStore.filterType === 'missed' }"
        @click="callsStore.setFilter('missed')"
      >
        ສາຍບໍ່ໄດ້ຮັບ
      </button>
    </div>

    <div class="calls-list-container">
      <CallItemComponent
        v-for="call in filteredCalls"
        :key="call.id"
        :item="call"
        @call="handleCallUser(call)"
      />

      <EmptyState
        v-if="filteredCalls.length === 0"
        title="ບໍ່ມີປະວັດການໂທ"
        description="ທ່ານຍັງບໍ່ມີປະວັດການໂທໃນລະບົບ"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PhoneCall } from 'lucide-vue-next';
import { useCallsStore } from '../stores/calls';
import type { CallItem } from '../types/call';

import AppHeader from '../components/common/AppHeader.vue';
import CallItemComponent from '../components/calls/CallItem.vue';
import EmptyState from '../components/common/EmptyState.vue';

const callsStore = useCallsStore();

const filteredCalls = computed(() => {
  if (callsStore.filterType === 'missed') {
    return callsStore.callLogs.filter((c) => c.callStatus === 'missed');
  }
  return callsStore.callLogs;
});

function handleCallUser(call: CallItem) {
  alert(`ກຳລັງໂທຫາ ${call.userName} (${call.userPhone})`);
}

function startNewCall() {
  alert('ເລືອກຜູ້ຕິດຕໍ່ເພື່ອເລີ່ມການໂທໃໝ່');
}
</script>

<style scoped>
.calls-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.filter-bar {
  padding: 10px 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  gap: 8px;
}

.tab-btn {
  padding: 6px 16px;
  border-radius: var(--radius-full);
  border: none;
  background-color: var(--bg-color);
  color: var(--text-secondary);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
}

.tab-btn.active {
  background-color: var(--primary-color);
  color: #ffffff;
}

.calls-list-container {
  flex: 1;
  overflow-y: auto;
}

.icon-btn {
  background: none;
  border: none;
  color: #ffffff;
  padding: 4px;
  cursor: pointer;
}
</style>
