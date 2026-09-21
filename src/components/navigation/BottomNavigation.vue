<template>
  <nav class="bottom-nav">
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="nav-item"
      :class="{ active: isRouteActive(item.path) }"
    >
      <div class="icon-container">
        <component :is="item.icon" :size="22" />
        <span v-if="item.badge" class="badge-count">{{ item.badge }}</span>
      </div>
      <span class="nav-label">{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { MessageCircle, Compass, Phone, Settings } from 'lucide-vue-next';
import { useChatStore } from '../../stores/chat';
import { computed } from 'vue';

const route = useRoute();
const chatStore = useChatStore();

const unreadTotal = computed(() => {
  return chatStore.chats.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
});

const navItems = computed(() => [
  { path: '/chats', label: 'ແຊັດ', icon: MessageCircle, badge: unreadTotal.value },
  { path: '/status', label: 'ສະຖານະ', icon: Compass },
  { path: '/calls', label: 'ການໂທ', icon: Phone },
  { path: '/settings', label: 'ການຕັ້ງຄ່າ', icon: Settings }
]);

function isRouteActive(path: string) {
  if (path === '/chats' && (route.path.startsWith('/chats') || route.path.startsWith('/chat') || route.path.startsWith('/group'))) {
    return true;
  }
  return route.path.startsWith(path);
}
</script>

<style scoped>
.bottom-nav {
  height: var(--bottom-nav-height);
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  position: relative;
  z-index: 40;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 12px;
  transition: var(--transition-fast);
  flex: 1;
}

.nav-item.active {
  color: var(--primary-color);
  font-weight: 700;
}

.icon-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-count {
  position: absolute;
  top: -6px;
  right: -10px;
  font-size: 0.65rem;
  height: 16px;
  min-width: 16px;
  padding: 0 4px;
}
</style>
