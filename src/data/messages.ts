import type { Message } from '../types/message';


export const mockMessages: Record<string, Message[]> = {
  c1: [
    {
      id: 'm1',
      chatId: 'c1',
      senderId: 'u1',
      senderName: 'ຄອບຄົວ ❤️',
      timestamp: '21:15',
      type: 'text',
      text: 'ສະບາຍດີເຈົ້າ',
      status: 'read',
      isSelf: false
    },
    {
      id: 'm2',
      chatId: 'c1',
      senderId: 'u0',
      timestamp: '21:16',
      type: 'text',
      text: 'ສະບາຍດີເດີ',
      status: 'read',
      isSelf: true
    },
    {
      id: 'm3',
      chatId: 'c1',
      senderId: 'u1',
      timestamp: '21:20',
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      caption: 'ງາມຫຼາຍໆ',
      status: 'read',
      isSelf: false
    },
    {
      id: 'm4',
      chatId: 'c1',
      senderId: 'u0',
      timestamp: '21:22',
      type: 'text',
      text: 'ໄປຮ່ວມກັບບໍ?',
      status: 'read',
      isSelf: true
    },
    {
      id: 'm5',
      chatId: 'c1',
      senderId: 'u1',
      timestamp: '21:24',
      type: 'voice',
      audioUrl: 'https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg',
      durationSeconds: 12,
      status: 'read',
      isSelf: false
    }
  ],
  c3: [
    {
      id: 'mg1',
      chatId: 'c3',
      senderId: 'u2',
      senderName: 'ອາທອນ',
      timestamp: '16:10',
      type: 'text',
      text: 'ເວລາອອກພິມກັບ?',
      status: 'read',
      isSelf: false
    },
    {
      id: 'mg2',
      chatId: 'c3',
      senderId: 'u0',
      senderName: 'ເສດຖາວົງ',
      timestamp: '16:12',
      type: 'text',
      text: 'ໄດ້ເລີຍ 👍',
      status: 'read',
      isSelf: true
    },
    {
      id: 'mg3',
      chatId: 'c3',
      senderId: 'u5',
      senderName: 'ອີ້',
      timestamp: '16:15',
      type: 'image',
      imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
      caption: 'ອັນນີ້ໄປທ່ຽວກັນບໍ?',
      status: 'read',
      isSelf: false
    },
    {
      id: 'mg4',
      chatId: 'c3',
      senderId: 'u6',
      senderName: 'ນ້ອງຕາ',
      timestamp: '16:22',
      type: 'text',
      text: 'ດີເລີຍ',
      status: 'read',
      isSelf: false
    }
  ]
};
