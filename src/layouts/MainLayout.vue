<template>
  <div class="main-layout">
    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <!-- Bottom navigation rendered on primary view routes -->
    <BottomNavigation v-if="showBottomNav" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BottomNavigation from '../components/navigation/BottomNavigation.vue';

const route = useRoute();

const showBottomNav = computed(() => {
  const mainPaths = ['/chats', '/status', '/calls', '/settings', '/contacts'];
  return mainPaths.includes(route.path);
});
</script>

<style scoped>
.main-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  position: relative;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(12px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
