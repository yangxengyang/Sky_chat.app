<template>
  <div class="profile-view">
    <!-- Header bar -->
    <AppHeader title="" show-back variant="white" @back="router.back()">
      <template #right>
        <button class="icon-btn" @click="editProfile">
          <MoreVertical :size="20" />
        </button>
      </template>
    </AppHeader>

    <div class="profile-content">
      <!-- Profile Card Info -->
      <div class="profile-card">
        <Avatar
          :src="authStore.user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'"
          :alt="authStore.user?.name"
          :size="100"
          show-online
          is-online
        />
        <h2 class="user-name">{{ authStore.user?.name || 'ເສດຖາວົງ' }}</h2>
        <span class="user-phone">{{ authStore.user?.phone || '+856 20 1234 5678' }}</span>
        <span class="online-status-badge">ອອນໄລນ໌</span>
      </div>

      <!-- Quick Action Buttons -->
      <div class="action-buttons-row">
        <button class="action-card-btn" @click="makeAudioCall">
          <div class="btn-icon-circle">
            <Phone :size="22" />
          </div>
          <span>ໂທ</span>
        </button>

        <button class="action-card-btn" @click="makeVideoCall">
          <div class="btn-icon-circle">
            <Video :size="22" />
          </div>
          <span>ວິດີໂອ</span>
        </button>

        <button class="action-card-btn" @click="startChat">
          <div class="btn-icon-circle">
            <MessageSquare :size="22" />
          </div>
          <span>ຂໍ້ຄວາມ</span>
        </button>
      </div>

      <!-- Settings Menu List -->
      <SettingSection>
        <SettingItem
          title="ແບ່ງປັນລາຍຊື່"
          @click="shareContact"
        >
          <template #icon>
            <Share2 :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ສື່ ແລະ ໄຟລ໌"
          value="234 >"
          @click="router.push('/chats/media')"
        >
          <template #icon>
            <Image :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ການຕັ້ງຄ່າແຊັດ"
          @click="router.push('/settings')"
        >
          <template #icon>
            <MessageSquare :size="18" />
          </template>
        </SettingItem>

        <SettingItem
          title="ບັນທຶກຂໍ້ມູນ"
          @click="saveInfo"
        >
          <template #icon>
            <Bookmark :size="18" />
          </template>
        </SettingItem>
      </SettingSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { MoreVertical, Phone, Video, MessageSquare, Share2, Image, Bookmark } from 'lucide-vue-next';
import { useAuthStore } from '../stores/auth';
import AppHeader from '../components/common/AppHeader.vue';
import Avatar from '../components/common/Avatar.vue';
import SettingSection from '../components/settings/SettingSection.vue';
import SettingItem from '../components/settings/SettingItem.vue';

const router = useRouter();
const authStore = useAuthStore();

function makeAudioCall() {
  alert('ກຳລັງເລີ່ມການໂທສຽງ...');
}

function makeVideoCall() {
  alert('ກຳລັງເລີ່ມການໂທວິດີໂອ...');
}

function startChat() {
  router.push('/chat/c1');
}

function shareContact() {
  alert('ແບ່ງປັນຂໍ້ມູນຜູ້ຕິດຕໍ່');
}

function saveInfo() {
  alert('ບັນທຶກຂໍ້ມູນສຳເລັດ');
}

function editProfile() {
  alert('ແກ້ໄຂໂປຣໄຟລ໌');
}
</script>

<style scoped>
.profile-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.profile-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 24px;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px 28px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 16px;
}

.user-name {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 12px;
}

.user-phone {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

.online-status-badge {
  font-size: 0.75rem;
  color: #10b981;
  font-weight: 600;
  margin-top: 4px;
}

.action-buttons-row {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 16px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 16px;
}

.action-card-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
}

.btn-icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
  transition: transform 0.15s;
}

.action-card-btn:active .btn-icon-circle {
  transform: scale(0.92);
}

.icon-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  padding: 4px;
  cursor: pointer;
}
</style>
