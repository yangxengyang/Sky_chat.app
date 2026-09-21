<template>
  <div class="register-view animate-fade-in">
    <div class="header-section">
      <div class="logo-box">
        <MessageCircle :size="38" />
      </div>
      <h1 class="app-title">RedChat</h1>
      <p class="sub-title">ສ້າງບັນຊີໃຫມ່</p>
    </div>

    <form class="form-section" @submit.prevent="handleRegister">
      <AppInput
        v-model="name"
        label="ຊື່ຜູ້ໃຊ້"
        placeholder="ປ້ອນຊື່ ແລະ ນາມສະກຸນ"
      >
        <template #icon>
          <User :size="18" />
        </template>
      </AppInput>

      <AppInput
        v-model="phone"
        label="ເບີໂທລະສັບ"
        placeholder="ປ້ອນເບີໂທລະສັບ"
      >
        <template #icon>
          <Phone :size="18" />
        </template>
      </AppInput>

      <AppInput
        v-model="password"
        type="password"
        label="ລະຫັດຜ່ານ"
        placeholder="ປ້ອນລະຫັດຜ່ານ"
      >
        <template #icon>
          <Lock :size="18" />
        </template>
      </AppInput>

      <AppInput
        v-model="confirmPassword"
        type="password"
        label="ຢືນຢັນລະຫັດຜ່ານ"
        placeholder="ປ້ອນລະຫັດຜ່ານອີກຄັ້ງ"
      >
        <template #icon>
          <Lock :size="18" />
        </template>
      </AppInput>

      <AppButton full-width size="lg" :loading="loading" type="submit">
        ສ້າງບັນຊີ
      </AppButton>
    </form>

    <div class="login-prompt">
      <span>ມີບັນຊີແລ້ວ?</span>
      <router-link to="/login" class="login-link">ເຂົ້າສູ່ລະບົບ</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessageCircle, User, Phone, Lock } from 'lucide-vue-next';
import { useAuthStore } from '../../stores/auth';
import AppInput from '../../components/common/AppInput.vue';
import AppButton from '../../components/common/AppButton.vue';

const router = useRouter();
const authStore = useAuthStore();

const name = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);

async function handleRegister() {
  if (!name.value || !phone.value) {
    alert('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ');
    return;
  }
  loading.value = true;
  await authStore.register(name.value, phone.value);
  loading.value = false;
  router.push('/chats');
}
</script>

<style scoped>
.register-view {
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--card-bg);
}

.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.logo-box {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 8px 20px rgba(211, 47, 47, 0.3);
}

.app-title {
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--primary-color);
}

.sub-title {
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
}

.login-prompt {
  display: flex;
  justify-content: center;
  gap: 6px;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.login-link {
  color: var(--primary-color);
  font-weight: 700;
  text-decoration: none;
}
</style>
