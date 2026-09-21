<template>
  <span class="call-type-indicator" :class="status">
    <PhoneIncoming v-if="status === 'incoming'" :size="14" />
    <PhoneOutgoing v-else-if="status === 'outgoing'" :size="14" />
    <PhoneMissed v-else :size="14" />
  </span>
</template>

<script setup lang="ts">
import { PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-vue-next';
import type { CallStatus } from '../../types/call';


defineProps<{
  status: CallStatus;
}>();
</script>

<style scoped>
.call-type-indicator {
  display: inline-flex;
  align-items: center;
}

.incoming {
  color: #10b981;
}

.outgoing {
  color: #3b82f6;
}

.missed {
  color: #ef4444;
}
</style>
