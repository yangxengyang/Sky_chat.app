export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar: string;
  bio?: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: string;
  coverImage?: string;
  qrCode?: string;
  createdAt?: string;
}
