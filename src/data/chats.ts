import type { ChatItem } from '../types/chat';


export const mockChats: ChatItem[] = [
  {
    id: 'c1',
    name: 'ຄອບຄົວ ❤️',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    type: 'private',
    unreadCount: 3,
    lastMessage: {
      text: 'ສະບາຍດີ',
      timestamp: '21:45'
    },
    updatedAt: '21:45',
    online: true,
    pinned: true,
    phone: '+856 20 9988 7766'
  },
  {
    id: 'c2',
    name: 'ມິດສະພອນ',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    type: 'private',
    unreadCount: 1,
    lastMessage: {
      text: 'ມາທັນບໍ?',
      timestamp: '20:12'
    },
    updatedAt: '20:12',
    online: true,
    pinned: true,
    phone: '+856 20 5544 3322'
  },
  {
    id: 'c3',
    name: 'ກຸ່ມໝູ່ເພື່ອນ (5)',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80',
    type: 'group',
    unreadCount: 5,
    lastMessage: {
      text: 'ອັນນີ້ໄປທ່ຽວກັນບໍ?',
      timestamp: '18:30'
    },
    updatedAt: '18:30',
    memberCount: 5,
    members: ['u0', 'u1', 'u2', 'u5', 'u6'],
    description: 'ກຸ່ມສົນທະນາໝູ່ເພື່ອນ ມຊ'
  },
  {
    id: 'c4',
    name: 'ວົງກວາມ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    type: 'private',
    unreadCount: 0,
    lastMessage: {
      text: '📄 ເອກະສານ.pdf',
      timestamp: '16:20'
    },
    updatedAt: '16:20',
    online: false,
    phone: '+856 20 7766 5544'
  },
  {
    id: 'c5',
    name: 'ອ້າຍລາມ',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    type: 'private',
    unreadCount: 0,
    lastMessage: {
      text: 'ສະບາຍດີເດີ',
      timestamp: '14:05'
    },
    updatedAt: '14:05',
    online: false,
    phone: '+856 20 6655 4433'
  },
  {
    id: 'c6',
    name: 'ນ້ອງຕາ',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    type: 'private',
    unreadCount: 0,
    lastMessage: {
      text: 'ໄດ້ແລ້ວ 👍',
      timestamp: '12:32'
    },
    updatedAt: '12:32',
    online: true,
    phone: '+856 20 4433 2211'
  }
];
