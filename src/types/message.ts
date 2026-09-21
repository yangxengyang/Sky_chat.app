export type MessageType = 'text' | 'image' | 'file' | 'voice' | 'system';
export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';

export interface BaseMessage {
  id: string;
  chatId: string;
  senderId: string;
  senderName?: string;
  senderAvatar?: string;
  timestamp: string;
  status: MessageStatus;
  type: MessageType;
  isSelf?: boolean;
}

export interface TextMessage extends BaseMessage {
  type: 'text';
  text: string;
}

export interface ImageMessageData extends BaseMessage {
  type: 'image';
  imageUrl: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface FileMessageData extends BaseMessage {
  type: 'file';
  fileName: string;
  fileSize: string;
  fileUrl: string;
  extension: string;
}

export interface VoiceMessageData extends BaseMessage {
  type: 'voice';
  audioUrl: string;
  durationSeconds: number;
}

export type Message = TextMessage | ImageMessageData | FileMessageData | VoiceMessageData;
