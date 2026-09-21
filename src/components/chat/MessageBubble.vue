<template>
  <div class="message-row" :class="{ 'is-self': message.isSelf, 'has-sender-name': !!message.senderName }">
    <div class="bubble-content" :class="[message.isSelf ? 'self-bubble' : 'other-bubble']">
      <!-- Group Chat Sender Name tag -->
      <span v-if="!message.isSelf && message.senderName" class="sender-tag">
        {{ message.senderName }}
      </span>

      <!-- Text Message -->
      <p v-if="message.type === 'text'" class="text-content">
        {{ message.text }}
      </p>

      <!-- Image Message -->
      <ImageMessage
        v-else-if="message.type === 'image'"
        :image-url="(message as ImageMessageData).imageUrl"
        :caption="(message as ImageMessageData).caption"
      />

      <!-- Voice Message -->
      <VoiceMessage
        v-else-if="message.type === 'voice'"
        :audio-url="(message as VoiceMessageData).audioUrl"
        :duration-seconds="(message as VoiceMessageData).durationSeconds"
        :is-self="message.isSelf"
      />

      <!-- File Message -->
      <FileMessage
        v-else-if="message.type === 'file'"
        :file-name="(message as FileMessageData).fileName"
        :file-size="(message as FileMessageData).fileSize"
        :extension="(message as FileMessageData).extension"
        :file-url="(message as FileMessageData).fileUrl"
      />

      <!-- Meta Info: Time and Read Status -->
      <div class="bubble-meta">
        <span class="meta-time">{{ message.timestamp }}</span>
        <span v-if="message.isSelf" class="status-ticks">
          <CheckCheck v-if="message.status === 'read'" :size="14" class="tick-read" />
          <Check v-else :size="14" class="tick-sent" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, CheckCheck } from 'lucide-vue-next';
import type { Message, ImageMessageData, VoiceMessageData, FileMessageData } from '../../types/message';

import ImageMessage from './ImageMessage.vue';
import VoiceMessage from './VoiceMessage.vue';
import FileMessage from './FileMessage.vue';

defineProps<{
  message: Message;
}>();
</script>

<style scoped>
.message-row {
  display: flex;
  margin-bottom: 12px;
  width: 100%;
}

.message-row.is-self {
  justify-content: flex-end;
}

.bubble-content {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: var(--radius-lg);
  position: relative;
  box-shadow: var(--shadow-sm);
  word-break: break-word;
}

.other-bubble {
  background-color: var(--bubble-other-bg);
  color: var(--bubble-other-text);
  border-bottom-left-radius: 4px;
}

.self-bubble {
  background-color: var(--bubble-self-bg);
  color: var(--bubble-self-text);
  border-bottom-right-radius: 4px;
}

.sender-tag {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 4px;
  display: block;
}

.text-content {
  font-size: 0.93rem;
  line-height: 1.4;
  margin-bottom: 2px;
}

.bubble-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 2px;
  float: right;
  margin-left: 12px;
}

.meta-time {
  font-size: 0.68rem;
  opacity: 0.8;
}

.status-ticks {
  display: flex;
  align-items: center;
}

.tick-read {
  color: #60a5fa;
}

.tick-sent {
  opacity: 0.8;
}
</style>
