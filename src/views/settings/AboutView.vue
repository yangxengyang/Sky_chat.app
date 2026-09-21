<template>
  <div class="about-view">
    <AppHeader title="ກ່ຽວກັບ" show-back variant="red" @back="router.back()" />

    <div class="about-content">
      <div class="brand-hero">
        <div class="logo-circle">
          <MessageCircle :size="48" />
        </div>
        <h2 class="app-name">RedChat</h2>
        <span class="app-version">ເວີຊັ່ນ 1.0.0</span>
      </div>

      <SettingSection>
        <SettingItem title="ເງື່ອນໄຂການໃຊ້ງານ" @click="openLink('terms')">
          <template #icon>
            <FileText :size="18" />
          </template>
        </SettingItem>

        <SettingItem title="ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ" @click="openLink('privacy')">
          <template #icon>
            <Shield :size="18" />
          </template>
        </SettingItem>

        <SettingItem title="ຕິດຕໍ່ພວກເຮົາ" @click="openLink('contact')">
          <template #icon>
            <Mail :size="18" />
          </template>
        </SettingItem>
      </SettingSection>

      <div class="copyright-box">
        <p>© 2026 RedChat. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { MessageCircle, FileText, Shield, Mail } from 'lucide-vue-next';
import AppHeader from '../../components/common/AppHeader.vue';
import SettingSection from '../../components/settings/SettingSection.vue';
import SettingItem from '../../components/settings/SettingItem.vue';

const router = useRouter();

function openLink(type: string) {
  alert(`ເປີດ ${type}`);
}
</script>

<style scoped>
.about-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.about-content {
  flex: 1;
  overflow-y: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

.brand-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.logo-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  box-shadow: 0 6px 18px rgba(211, 47, 47, 0.3);
}

.app-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
}

.app-version {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.copyright-box {
  margin-top: auto;
  padding: 24px;
  text-align: center;
  font-size: 0.78rem;
  color: var(--text-muted);
}
</style>
