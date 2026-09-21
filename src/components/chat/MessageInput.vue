<template>
  <div class="message-input-bar">
    <button class="action-btn" @click="toggleEmoji">
      <Smile :size="22" />
    </button>

    <div class="input-container">
      <input
        v-model="text"
        type="text"
        placeholder="ພິມຂໍ້ຄວາມ..."
        class="chat-input"
        @keyup.enter="handleSend"
      />
      <button class="action-btn-inner" @click="triggerImage">
        <Image :size="20" />
      </button>
      <button class="action-btn-inner" @click="triggerCamera">
        <Camera :size="20" />
      </button>
    </div>

    <button class="send-btn" @click="handleSend">
      <Send v-if="text.trim()" :size="18" />
      <Mic v-else :size="18" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Smile, Image, Camera, Send, Mic } from 'lucide-vue-next';

const text = ref('');

const emit = defineEmits<{
  (e: 'send', text: string): void;
  (e: 'sendVoice'): void;
  (e: 'sendImage', url: string): void;
}>();

function handleSend() {
  if (text.value.trim()) {
    emit('send', text.value.trim());
    text.value = '';
  } else {
    emit('sendVoice');
  }
}

function toggleEmoji() {
  text.value += ' 😊 ';
}

function triggerImage() {
  const sampleImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80'
  ];
  const picked = sampleImages[Math.floor(Math.random() * sampleImages.length)];
  emit('sendImage', picked);
}

function triggerCamera() {
  triggerImage();
}
</script>

<style scoped>
.message-input-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  position: relative;
  z-index: 30;
}

.action-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.action-btn:hover {
  color: var(--primary-color);
}

.input-container {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  border-radius: var(--radius-full);
  padding: 0 14px;
  gap: 6px;
  border: 1px solid var(--border-color);
}

.chat-input {
  width: 100%;
  height: 40px;
  border: none;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 0.92rem;
  color: var(--text-primary);
}

.action-btn-inner {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn-inner:hover {
  color: var(--text-primary);
}

.send-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background-color: var(--primary-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(211, 47, 47, 0.35);
  transition: transform 0.15s, background-color 0.2s;
}

.send-btn:active {
  transform: scale(0.92);
}
</style>
