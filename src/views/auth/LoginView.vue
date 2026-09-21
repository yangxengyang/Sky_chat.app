<template>
  <div class="login-view animate-fade-in">
    <div class="header-section">
      <div class="logo-box">
        <MessageCircle :size="38" />
      </div>
      <h1 class="app-title">RedChat</h1>
      <p class="sub-title">ເຂົ້າສູ່ລະບົບຂອງທ່ານ</p>
    </div>

    <form class="form-section" @submit.prevent="handleLogin">
      <AppInput
        v-model="phoneOrEmail"
        label="ເບີໂທ / ອີເມວ"
        placeholder="ປ້ອນເບີໂທ ຫຼື ອີເມວ"
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

      <AppButton full-width size="lg" :loading="loading" type="submit">
        ເຂົ້າສູ່ລະບົບ
      </AppButton>
    </form>

    <div class="register-prompt">
      <span>ຍັງບໍ່ມີບັນຊີ?</span>
      <router-link to="/register" class="reg-link">ສ້າງບັນຊີ</router-link>
    </div>

    <div class="divider">
      <span>ຫຼື</span>
    </div>

    <div class="social-login-group">
      <button class="social-btn" @click="handleSocialLogin('Google')">
        <span class="social-icon">G</span>
        <span>ລົງຊື່ດ້ວຍ Google</span>
      </button>

      <button class="social-btn facebook" @click="handleSocialLogin('Facebook')">
        <span class="social-icon">f</span>
        <span>ລົງຊື່ດ້ວຍ Facebook</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessageCircle, Phone, Lock } from 'lucide-vue-next';
import { useAuthStore } from '../../stores/auth';
import AppInput from '../../components/common/AppInput.vue';
import AppButton from '../../components/common/AppButton.vue';

const router = useRouter();
const authStore = useAuthStore();

const phoneOrEmail = ref('+856 20 1234 5678');
const password = ref('123456');
const loading = ref(false);

async function handleLogin() {
  loading.value = true;
  await authStore.login(phoneOrEmail.value, password.value);
  loading.value = false;
  router.push('/chats');
}

function handleSocialLogin(provider: string) {
  alert(`ເຂົ້າສູ່ລະບົບດ້ວຍ ${provider}`);
  router.push('/chats');
}
</script>

<style scoped>
.login-view {
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
  margin-bottom: 28px;
}

.logo-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  box-shadow: 0 8px 20px rgba(211, 47, 47, 0.3);
}

.app-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
}

.sub-title {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.register-prompt {
  display: flex;
  justify-content: center;
  gap: 6px;
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.reg-link {
  color: var(--primary-color);
  font-weight: 700;
  text-decoration: none;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;

  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--border-color);
  }
  span {
    padding: 0 12px;
    font-size: 0.8rem;
    color: var(--text-muted);
  }
}

.social-login-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 46px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background-color: #ffffff;
  color: #374151;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.social-btn:hover {
  background-color: #f9fafb;
}

.social-btn.facebook {
  color: #1877f2;
}

.social-icon {
  font-weight: 800;
  font-size: 1.1rem;
}
</style>
