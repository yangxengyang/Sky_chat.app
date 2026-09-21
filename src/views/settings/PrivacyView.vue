<template>
  <div class="privacy-view">
    <AppHeader title="ຄວາມປອດໄພ" show-back variant="red" @back="router.back()" />

    <div class="privacy-content">
      <SettingSection title="ຄວາມລຶບສ່ວນຕົວ">
        <SettingItem title="ຄວາມລຶບ" subtitle="ຈັດການຄວາມລຶບຂໍ້ມູນຂອງທ່ານ">
          <template #icon>
            <Lock :size="18" />
          </template>
        </SettingItem>

        <SettingItem title="ຜູ້ທີ່ສາມາດເຫັນຂໍ້ມູນຂອງຂ້ອຍ" value="ທຸກຄົນ">
          <template #icon>
            <Eye :size="18" />
          </template>
        </SettingItem>
      </SettingSection>

      <SettingSection title="ການປ້ອງກັນບັນຊີ">
        <ToggleItem
          v-model="appLock"
          title="ການລັອກດ້ວຍລະຫັດ"
          subtitle="ລັອກແອັບດ້ວຍ Touch ID / Face ID"
        />

        <SettingItem title="ລະຫັດຜ່ານສອງຊັ້ນ" value="ປິດຢູ່">
          <template #icon>
            <KeyRound :size="18" />
          </template>
        </SettingItem>

        <SettingItem title="ປ່ຽນລະຫັດຜ່ານ">
          <template #icon>
            <ShieldCheck :size="18" />
          </template>
        </SettingItem>
      </SettingSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Lock, Eye, KeyRound, ShieldCheck } from 'lucide-vue-next';
import AppHeader from '../../components/common/AppHeader.vue';
import SettingSection from '../../components/settings/SettingSection.vue';
import SettingItem from '../../components/settings/SettingItem.vue';
import ToggleItem from '../../components/settings/ToggleItem.vue';

const router = useRouter();
const appLock = ref(true);
</script>

<style scoped>
.privacy-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.privacy-content {
  flex: 1;
  overflow-y: auto;
  padding-top: 12px;
}
</style>
