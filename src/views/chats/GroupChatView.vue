<template>
  <div class="group-chat-view">
    <!-- Header -->
    <ChatHeader
      :title="chat?.name || 'ກຸ່ມໝູ່ເພື່ອນ (5)'"
      :avatar="chat?.avatar || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80'"
      type="group"
      :member-count="5"
      @back="router.back()"
      @click-profile="openGroupInfo"
      @audio-call="startGroupCall('audio')"
      @video-call="startGroupCall('video')"
      @more-options="openOptions"
    />

    <!-- Message Area -->
    <div ref="messagesBox" class="messages-container">
      <MessageBubble
        v-for="msg in messages"
        :key="msg.id"
        :message="msg"
      />
    </div>

    <!-- Message Input -->
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

const chatId = computed(() => (route.params.id as string) || 'c3');
const chat = computed(() => chatStore.chats.find((c) => c.id === chatId.value) || chatStore.chats[2]);
const messages = computed(() => chatStore.messagesMap[chatId.value] || []);

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
  await chatStore.sendMessage('', 'image', { imageUrl: url, caption: 'ຮູບພາບກຸ່ມ' });
  scrollToBottom();
}

async function handleSendVoice() {
  await chatStore.sendMessage('', 'voice', {
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg',
    durationSeconds: 8
  });
  scrollToBottom();
}

function openGroupInfo() {
  alert('ຂໍ້ມູນກຸ່ມສົນທະນາ (5 ສມາຊິກ)');
}

function startGroupCall(type: 'audio' | 'video') {
  alert(`ກຳລັງເລີ່ມຕົ້ນການໂທກຸ່ມ ${type === 'audio' ? 'ສຽງ' : 'ວິດີໂອ'}`);
}

function openOptions() {
  alert('ຕົວເລືອກເພີ່ມເຕີມກຸ່ມ');
}
</script>

<style scoped>
.group-chat-view {
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
