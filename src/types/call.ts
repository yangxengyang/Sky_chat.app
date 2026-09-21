export type CallType = 'audio' | 'video';
export type CallStatus = 'incoming' | 'outgoing' | 'missed';

export interface CallItem {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userPhone: string;
  callType: CallType;
  callStatus: CallStatus;
  timestamp: string;
  duration?: string;
}
