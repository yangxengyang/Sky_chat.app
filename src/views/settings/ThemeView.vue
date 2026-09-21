<template>
  <div class="theme-view">
    <AppHeader title="ຮູບແບບ" show-back variant="red" @back="router.back()" />

    <div class="theme-content">
      <SettingSection title="ເລືອກຮູບແບບສີ">
        <div
          v-for="t in themes"
          :key="t.id"
          class="theme-option-row"
          @click="selectTheme(t.id)"
        >
          <div class="theme-left">
            <span class="color-dot" :style="{ backgroundColor: t.color }"></span>
            <span class="theme-label">{{ t.label }}</span>
          </div>

          <Check v-if="themeStore.currentTheme === t.id" :size="20" class="check-icon" />
          <span v-else class="radio-circle"></span>
        </div>
      </SettingSection>

      <!-- Live Preview Container -->
      <div class="preview-section">
        <h3 class="preview-title">ຕົວຢ່າງຮູບແບບ</h3>
        <div class="preview-box">
          <div class="preview-msg left">
            <span>ຂໍ້ຄວາມ</span>
          </div>
          <div class="preview-msg right">
            <span>ຂໍ້ຄວາມ</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Check } from 'lucide-vue-next';
import { useThemeStore, ThemeMode } from '../../stores/theme';
import AppHeader from '../../components/common/AppHeader.vue';
import SettingSection from '../../components/settings/SettingSection.vue';

const router = useRouter();
const themeStore = useThemeStore();

const themes: { id: ThemeMode; label: string; color: string }[] = [
  { id: 'red', label: 'ສີແດງ', color: '#d32f2f' },
  { id: 'dark', label: 'ມຶດ / ດຳ', color: '#1e1e1e' },
  { id: 'light', label: 'ສີຂາວ', color: '#ffffff' }
];

function selectTheme(mode: ThemeMode) {
  themeStore.setTheme(mode);
}
</script>

<style scoped>
.theme-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.theme-content {
  flex: 1;
  overflow-y: auto;
  padding-top: 12px;
}

.theme-option-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
}

.theme-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.color-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.theme-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

.check-icon {
  color: var(--primary-color);
}

.radio-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
}

.preview-section {
  padding: 20px 16px;
}

.preview-title {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.preview-box {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.preview-msg {
  padding: 8px 14px;
  border-radius: 16px;
  font-size: 0.88rem;
  max-width: 60%;
}

.preview-msg.left {
  background-color: var(--bubble-other-bg);
  color: var(--bubble-other-text);
  align-self: flex-start;
}

.preview-msg.right {
  background-color: var(--bubble-self-bg);
  color: var(--bubble-self-text);
  align-self: flex-end;
}
</style>
