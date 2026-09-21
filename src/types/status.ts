export interface StatusStory {
  id: string;
  type: 'image' | 'video' | 'text';
  content: string;
  timestamp: string;
  caption?: string;
  isViewed?: boolean;
}

export interface UserStatusItem {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  timestamp: string;
  stories: StatusStory[];
  hasUnread: boolean;
  isSelf?: boolean;
}
