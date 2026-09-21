import { ApiService } from './api';
import { mockChats } from '../data/chats';
import { mockMessages } from '../data/messages';
import type { ChatItem } from '../types/chat';
import type { Message } from '../types/message';


export class ChatService {
  static async fetchChats(): Promise<ChatItem[]> {
    return ApiService.get(mockChats);
  }

  static async fetchMessages(chatId: string): Promise<Message[]> {
    const list = mockMessages[chatId] || [];
    return ApiService.get(list);
  }

  static async sendMessage(message: Partial<Message>): Promise<Message> {
    const newMsg: Message = {
      id: `m_${Date.now()}`,
      chatId: message.chatId || 'c1',
      senderId: message.senderId || 'u0',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      type: message.type || 'text',
      isSelf: true,
      text: (message as any).text || '',
      imageUrl: (message as any).imageUrl,
      caption: (message as any).caption,
      audioUrl: (message as any).audioUrl,
      durationSeconds: (message as any).durationSeconds,
      fileName: (message as any).fileName,
      fileSize: (message as any).fileSize,
      fileUrl: (message as any).fileUrl,
      extension: (message as any).extension
    } as Message;

    if (!mockMessages[newMsg.chatId]) {
      mockMessages[newMsg.chatId] = [];
    }
    mockMessages[newMsg.chatId].push(newMsg);

    return ApiService.post(message, newMsg);
  }
}
