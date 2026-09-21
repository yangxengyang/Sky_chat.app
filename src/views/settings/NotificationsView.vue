<template>
  <div class="notifications-view">
    <AppHeader title="ການແຈ້ງເຕືອນ" show-back variant="red" @back="router.back()" />

    <div class="notif-content">
      <SettingSection title="ການແຈ້ງເຕືອນຂໍ້ຄວາມ">
        <ToggleItem
          v-model="msgNotif"
          title="ຂໍ້ຄວາມ"
          subtitle="ແຈ້ງເຕືອນເມື່ອມີຂໍ້ຄວາມໃໝ່"
        />

        <ToggleItem
          v-model="soundNotif"
          title="ສຽງແຈ້ງເຕືອນ"
          subtitle="ຫຼິ້ນສຽງເມື່ອມີການແຈ້ງເຕືອນ"
        />

        <ToggleItem
          v-model="vibrateNotif"
          title="ສັ່ນ"
          subtitle="ສັ່ນເຕືອນເມື່ອມີຂໍ້ຄວາມ"
        />

        <ToggleItem
          v-model="lockNotif"
          title="ແຈ້ງເຕືອນໂໝດໜ້າຈໍ"
          subtitle="ສະແດງການແຈ້ງເຕືອນເທິງໜ້າຈໍລັອກ"
        />
      </SettingSection>

      <SettingSection title="ສຽງ ແລະ ສັ່ນ">
        <SettingItem
          title="ສຽງແຈ້ງເຕືອນ"
          value="ພິເສດມາດຕະຖານ"
          @click="selectRingtone"
        />
      </SettingSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppHeader from '../../components/common/AppHeader.vue';
import SettingSection from '../../components/settings/SettingSection.vue';
import SettingItem from '../../components/settings/SettingItem.vue';
import ToggleItem from '../../components/settings/ToggleItem.vue';

const router = useRouter();

const msgNotif = ref(true);
const soundNotif = ref(true);
const vibrateNotif = ref(true);
const lockNotif = ref(true);

function selectRingtone() {
  alert('ເລືອກສຽງແຈ້ງເຕືອນ');
}
</script>

<style scoped>
.notifications-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.notif-content {
  flex: 1;
  overflow-y: auto;
  padding-top: 12px;
}
</style>
