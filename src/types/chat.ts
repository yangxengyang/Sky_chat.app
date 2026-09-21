import type { Message } from './message';


export type ChatType = 'private' | 'group';

export interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  type: ChatType;
  unreadCount: number;
  lastMessage?: Message | { text: string; timestamp: string };
  updatedAt: string;
  online?: boolean;
  memberCount?: number;
  members?: string[];
  pinned?: boolean;
  isMuted?: boolean;
  phone?: string;
  description?: string;
}
