import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ChatItem } from '../types/chat';
import type { Message } from '../types/message';

import { ChatService } from '../services/chat.service';
import { mockChats } from '../data/chats';
import { mockMessages } from '../data/messages';

export const useChatStore = defineStore('chat', () => {
  const chats = ref<ChatItem[]>(mockChats);
  const activeChatId = ref<string | null>('c1');
  const messagesMap = ref<Record<string, Message[]>>(mockMessages);
  const searchQuery = ref('');

  const activeChat = computed(() => chats.value.find((c) => c.id === activeChatId.value));
  const activeMessages = computed(() => (activeChatId.value ? messagesMap.value[activeChatId.value] || [] : []));

  const filteredChats = computed(() => {
    if (!searchQuery.value.trim()) return chats.value;
    const q = searchQuery.value.toLowerCase();
    return chats.value.filter((c) => c.name.toLowerCase().includes(q));
  });

  function setActiveChat(id: string) {
    activeChatId.value = id;
    const found = chats.value.find((c) => c.id === id);
    if (found) {
      found.unreadCount = 0;
    }
  }

  async function sendMessage(text: string, type: 'text' | 'image' | 'voice' | 'file' = 'text', payload?: any) {
    if (!activeChatId.value) return;
    const newMsg: Message = {
      id: `m_${Date.now()}`,
      chatId: activeChatId.value,
      senderId: 'u0',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      type,
      isSelf: true,
      text,
      ...payload
    } as Message;


    if (!messagesMap.value[activeChatId.value]) {
      messagesMap.value[activeChatId.value] = [];
    }
    messagesMap.value[activeChatId.value].push(newMsg);

    const chat = chats.value.find((c) => c.id === activeChatId.value);
    if (chat) {
      chat.lastMessage = { text: type === 'text' ? text : `[${type}]`, timestamp: newMsg.timestamp };
      chat.updatedAt = newMsg.timestamp;
    }

    await ChatService.sendMessage(newMsg);
  }

  return {
    chats,
    activeChatId,
    activeChat,
    activeMessages,
    searchQuery,
    filteredChats,
    setActiveChat,
    sendMessage
  };
});
