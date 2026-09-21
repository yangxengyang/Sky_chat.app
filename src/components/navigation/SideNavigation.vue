<template>
  <aside class="side-nav">
    <div class="logo-box">
      <div class="logo-icon">
        <MessageCircle :size="24" class="text-white" />
      </div>
      <span class="logo-text">RedChat</span>
    </div>

    <div class="nav-links">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="side-link"
        :class="{ active: route.path.startsWith(item.path) }"
      >
        <component :is="item.icon" :size="20" />
        <span>{{ item.label }}</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { MessageCircle, Compass, Phone, Settings, Users } from 'lucide-vue-next';

const route = useRoute();

const navItems = [
  { path: '/chats', label: 'ແຊັດ', icon: MessageCircle },
  { path: '/contacts', label: 'ຜູ້ຕິດຕໍ່', icon: Users },
  { path: '/status', label: 'ສະຖານະ', icon: Compass },
  { path: '/calls', label: 'ການໂທ', icon: Phone },
  { path: '/settings', label: 'ການຕັ້ງຄ່າ', icon: Settings }
];
</script>

<style scoped>
.side-nav {
  width: 240px;
  background-color: var(--card-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 20px 14px;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 10px 24px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.side-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: var(--transition-fast);
}

.side-link:hover, .side-link.active {
  background-color: var(--primary-light);
  color: var(--primary-color);
  font-weight: 600;
}
</style>
