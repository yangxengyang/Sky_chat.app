<template>
  <div class="settings-view">
    <AppHeader title="ການຕັ້ງຄ່າ" variant="red" />

    <div class="settings-content">
      <!-- Profile Header Summary -->
      <div class="user-profile-bar" @click="router.push('/profile')">
        <Avatar
          :src="authStore.user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'"
          :alt="authStore.user?.name"
          :size="56"
        />
        <div class="user-meta">
          <h3 class="user-name">{{ authStore.user?.name || 'ເສດຖາວົງ' }}</h3>
          <span class="user-phone">{{ authStore.user?.phone || '+856 20 1234 5678' }}</span>
        </div>
        <ChevronRight :size="20" class="chevron" />
      </div>

      <!-- Settings List Sections -->
      <SettingSection>
        <SettingItem
          title="ບັນຊີ"
          subtitle="ໂປຣໄຟລ໌ ແລະ ຂໍ້ມູນສ່ວນຕົວ"
          @click="router.push('/profile')"
        >
          <template #icon>
            <User :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ຄວາມປອດໄພ"
          subtitle="ຄວາມລຶບ ແລະ ຄວາມປອດໄພ"
          @click="router.push('/settings/privacy')"
        >
          <template #icon>
            <ShieldCheck :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ການແຈ້ງເຕືອນ"
          subtitle="ສຽງ ແລະ ການແຈ້ງເຕືອນ"
          @click="router.push('/settings/notifications')"
        >
          <template #icon>
            <Bell :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ຮູບແບບ"
          subtitle="ສີ ແລະ Theme ຂອງແອັບ"
          @click="router.push('/settings/theme')"
        >
          <template #icon>
            <Palette :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ພາສາ"
          value="ລາວ"
          @click="toggleLanguage"
        >
          <template #icon>
            <Globe :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ຕິດຕໍ່ຊ່ວຍເຫຼືອ & ກ່ຽວກັບ"
          @click="router.push('/settings/about')"
        >
          <template #icon>
            <HelpCircle :size="18" />
          </template>
        </SettingItem>
      </SettingSection>

      <!-- Logout Action -->
      <div class="logout-section">
        <button class="logout-btn" @click="handleLogout">
          <LogOut :size="18" />
          <span>ອອກຈາກລະບົບ</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { User, ShieldCheck, Bell, Palette, Globe, HelpCircle, LogOut, ChevronRight } from 'lucide-vue-next';
import { useAuthStore } from '../../stores/auth';
import AppHeader from '../../components/common/AppHeader.vue';
import Avatar from '../../components/common/Avatar.vue';
import SettingSection from '../../components/settings/SettingSection.vue';
import SettingItem from '../../components/settings/SettingItem.vue';

const router = useRouter();
const authStore = useAuthStore();

function toggleLanguage() {
  alert('ປ່ຽນພາສາ (ລາວ / English)');
}

async function handleLogout() {
  if (confirm('ທ່ານຕ້ອງການອອກຈາກລະບົບແທ້ບໍ?')) {
    await authStore.logout();
    router.push('/login');
  }
}
</script>

<style scoped>
.settings-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.settings-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 24px;
}

.user-profile-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  margin-bottom: 16px;
}

.user-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.user-phone {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.chevron {
  color: var(--text-muted);
}

.logout-section {
  padding: 16px;
}

.logout-btn {
  width: 100%;
  height: 48px;
  border-radius: var(--radius-md);
  border: 1px solid #fee2e2;
  background-color: #fef2f2;
  color: #dc2626;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background-color: #fde8e8;
}
</style>
