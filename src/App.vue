<template>
  <div class="mobile-app-wrapper">
    <!-- Status Bar Simulation -->
    <div class="status-bar-sim">
      <span class="time-clock">{{ currentTime }}</span>
      <div class="status-icons">
        <Wifi :size="14" />
        <Battery :size="14" />
      </div>
    </div>

    <!-- App Body Router Container -->
    <div class="app-body">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Wifi, Battery } from 'lucide-vue-next';

const currentTime = ref('9:41');
let timer: any = null;

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  currentTime.value = `${hours}:${minutes}`;
}

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 10000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style>
/* Global Imports */
@import './assets/styles/main.css';
@import './assets/styles/responsive.css';
</style>
