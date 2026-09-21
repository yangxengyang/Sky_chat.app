import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CallItem } from '../types/call';

import { mockCallsList } from '../services/call.service';

export const useCallsStore = defineStore('calls', () => {
  const callLogs = ref<CallItem[]>(mockCallsList);
  const filterType = ref<'all' | 'missed'>('all');

  function setFilter(type: 'all' | 'missed') {
    filterType.value = type;
  }

  return {
    callLogs,
    filterType,
    setFilter
  };
});
