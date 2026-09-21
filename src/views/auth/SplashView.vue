<template>
  <div class="splash-container">
    <!-- Step 0: Initial Red Splash Screen -->
    <div v-if="step === 0" class="red-splash animate-fade-in" @click="step = 1">
      <div class="brand-box">
        <div class="logo-circle">
          <MessageCircle :size="54" class="logo-icon" />
        </div>
        <h1 class="brand-title">RedChat</h1>
        <p class="brand-subtitle">Connect • Chat • Together</p>
      </div>
    </div>

    <!-- Step 1: Onboarding 1 -->
    <div v-else-if="step === 1" class="onboarding-step animate-slide-up">
      <div class="illustration-box">
        <div class="illustration-circle">
          <MessageSquare :size="80" class="illust-icon" />
        </div>
      </div>
      <div class="content-box">
        <h2 class="title">ສົ່ງຂໍ້ຄວາມໄດ້ທຸກເວລາ</h2>
        <p class="desc">ເຊື່ອມຕໍ່ກັບຄົນທີ່ທ່ານຮັກ ແລະ ກຸ່ມຂອງທ່ານ</p>
      </div>

      <div class="action-footer">
        <AppButton full-width size="lg" @click="step = 2">ຕໍ່ໄປ</AppButton>
        <button class="skip-btn" @click="finishSplash">ຂ້າມ</button>
      </div>
    </div>

    <!-- Step 2: Onboarding 2 -->
    <div v-else-if="step === 2" class="onboarding-step animate-slide-up">
      <div class="illustration-box">
        <div class="illustration-circle">
          <ShieldCheck :size="80" class="illust-icon" />
        </div>
      </div>
      <div class="content-box">
        <h2 class="title">ປອດໄພ ແລະ ສ່ວນຕົວ</h2>
        <p class="desc">ຂໍ້ມູນຂອງທ່ານຈະຖືກປົກປ້ອງດ້ວຍລະບົບຄວາມປອດໄພ</p>
      </div>

      <div class="action-footer">
        <AppButton full-width size="lg" @click="finishSplash">ເລີ່ມຕົ້ນໃຊ້ງານ</AppButton>
        <button class="skip-btn" @click="finishSplash">ຂ້າມ</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessageCircle, MessageSquare, ShieldCheck } from 'lucide-vue-next';
import AppButton from '../../components/common/AppButton.vue';

const router = useRouter();
const step = ref(0);

// Auto progress splash after 2.5 seconds
setTimeout(() => {
  if (step.value === 0) {
    step.value = 1;
  }
}, 2500);

function finishSplash() {
  router.push('/login');
}
</script>

<style scoped>
.splash-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Red Splash Screen (Screen 1) */
.red-splash {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #e53935 0%, #b71c1c 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
}

.brand-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.logo-circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #d32f2f;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.brand-title {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.brand-subtitle {
  font-size: 0.95rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
}

/* Onboarding (Screens 2 & 3) */
.onboarding-step {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 24px;
}

.illustration-box {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #ffebee;
  color: #d32f2f;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-box {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 10px;
}

.desc {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.5;
}

.action-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.skip-btn {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
