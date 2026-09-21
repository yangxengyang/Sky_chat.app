import type { UserProfile } from '../types/user';


export const currentUser: UserProfile = {
  id: 'u0',
  name: 'ເສດຖາວົງ',
  phone: '+856 20 1234 5678',
  email: 'setthavong@redchat.la',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
  coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  bio: 'ສະບາຍດີ! ໃຊ້ງານ RedChat ຢູ່',
  status: 'online',
  qrCode: 'REDCHAT-QR-SETTHAVONG-2026'
};

export const mockUsers: UserProfile[] = [
  currentUser,
  {
    id: 'u1',
    name: 'ຄອບຄົວ ❤️',
    phone: '+856 20 9988 7766',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    bio: 'ຄອບຄົວອົບອຸ່ນ',
    status: 'online',
    lastSeen: '21:45'
  },
  {
    id: 'u2',
    name: 'ມິດສະພອນ',
    phone: '+856 20 5544 3322',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    bio: 'ສະບາຍດີ...',
    status: 'online',
    lastSeen: '20:12'
  },
  {
    id: 'u3',
    name: 'ກຸ່ມໝູ່ເພື່ອນ (5)',
    phone: '+856 20 8877 6655',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80',
    bio: 'ກຸ່ມໝູ່ເພື່ອນ ມຊ',
    status: 'online'
  },
  {
    id: 'u4',
    name: 'ວົງກວາມ',
    phone: '+856 20 7766 5544',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    bio: 'ເອກະສານ.pdf',
    status: 'offline',
    lastSeen: '16:20'
  },
  {
    id: 'u5',
    name: 'ອ້າຍລາມ',
    phone: '+856 20 6655 4433',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    bio: 'ສະບາຍດີເດີ',
    status: 'offline',
    lastSeen: '14:05'
  },
  {
    id: 'u6',
    name: 'ນ້ອງຕາ',
    phone: '+856 20 4433 2211',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    bio: 'ໄດ້ແລ້ວ 👍',
    status: 'online',
    lastSeen: '12:32'
  },
  {
    id: 'u7',
    name: 'ແມ່',
    phone: '+856 20 1122 3344',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80',
    bio: 'ຮັກລູກ',
    status: 'offline',
    lastSeen: '09:21'
  }
];
