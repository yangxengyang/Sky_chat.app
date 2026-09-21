<template>
  <div class="private-chat-view">
    <!-- Header -->
    <ChatHeader
      :title="chat?.name || 'ຄອບຄົວ ❤️'"
      :avatar="chat?.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'"
      type="private"
      :online="chat?.online"
      @back="router.back()"
      @click-profile="router.push('/profile')"
      @audio-call="startCall('audio')"
      @video-call="startCall('video')"
      @more-options="openOptions"
    />

    <!-- Chat Messages Scroll Area -->
    <div ref="messagesBox" class="messages-container">
      <MessageBubble
        v-for="msg in messages"
        :key="msg.id"
        :message="msg"
      />
    </div>

    <!-- Message Input Bar -->
    <MessageInput
      @send="handleSendText"
      @send-image="handleSendImage"
      @send-voice="handleSendVoice"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useChatStore } from '../../stores/chat';
import ChatHeader from '../../components/chat/ChatHeader.vue';
import MessageBubble from '../../components/chat/MessageBubble.vue';
import MessageInput from '../../components/chat/MessageInput.vue';

const router = useRouter();
const route = useRoute();
const chatStore = useChatStore();

const messagesBox = ref<HTMLElement | null>(null);

const chatId = computed(() => (route.params.id as string) || 'c1');
const chat = computed(() => chatStore.chats.find((c) => c.id === chatId.value) || chatStore.chats[0]);
const messages = computed(() => chatStore.activeMessages);

onMounted(() => {
  chatStore.setActiveChat(chatId.value);
  scrollToBottom();
});

function scrollToBottom() {
  nextTick(() => {
    if (messagesBox.value) {
      messagesBox.value.scrollTop = messagesBox.value.scrollHeight;
    }
  });
}

async function handleSendText(text: string) {
  await chatStore.sendMessage(text, 'text');
  scrollToBottom();
}

async function handleSendImage(url: string) {
  await chatStore.sendMessage('', 'image', { imageUrl: url, caption: 'ຮູບພາບສົ່ງ' });
  scrollToBottom();
}

async function handleSendVoice() {
  await chatStore.sendMessage('', 'voice', {
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg',
    durationSeconds: 15
  });
  scrollToBottom();
}

function startCall(type: 'audio' | 'video') {
  alert(`ກຳລັງໂທ ${type === 'audio' ? 'ສຽງ' : 'ວິດີໂອ'} ຫາ ${chat.value?.name}...`);
}

function openOptions() {
  alert('ຕົວເລືອກເພີ່ມເຕີມ');
}
</script>

<style scoped>
.private-chat-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
}
</style>
