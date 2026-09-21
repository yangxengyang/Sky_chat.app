import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { UserStatusItem } from '../types/status';


export const mockStatuses: UserStatusItem[] = [
  {
    id: 's0',
    userId: 'u0',
    userName: 'ສະຖານະຂອງຂ້ອຍ',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
    timestamp: 'ເພີ່ມສະຖານະໃໝ່',
    stories: [],
    hasUnread: false,
    isSelf: true
  },
  {
    id: 's1',
    userId: 'u1',
    userName: 'ຄອບຄົວ ❤️',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    timestamp: '2 ຊົ່ວໂມງກ່ອນ',
    hasUnread: true,
    stories: [
      {
        id: 'st1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        caption: 'ທ່ຽວທະເລກັບຄອບຄົວ 🌊',
        timestamp: '2 ຊົ່ວໂມງກ່ອນ'
      }
    ]
  },
  {
    id: 's2',
    userId: 'u2',
    userName: 'ມິດສະພອນ',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    timestamp: '5 ຊົ່ວໂມງກ່ອນ',
    hasUnread: true,
    stories: [
      {
        id: 'st2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        caption: 'ກາເຟຍາມເຊົ້າ ☕',
        timestamp: '5 ຊົ່ວໂມງກ່ອນ'
      }
    ]
  },
  {
    id: 's3',
    userId: 'u6',
    userName: 'ນ້ອງຕາ',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    timestamp: '8 ຊົ່ວໂມງກ່ອນ',
    hasUnread: false,
    stories: [
      {
        id: 'st3',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
        caption: 'ອາຫານທ່ຽງ 🥗',
        timestamp: '8 ຊົ່ວໂມງກ່ອນ'
      }
    ]
  }
];

export const useStatusStore = defineStore('status', () => {
  const statusList = ref<UserStatusItem[]>(mockStatuses);
  const activeViewerStatus = ref<UserStatusItem | null>(null);

  function openViewer(status: UserStatusItem) {
    activeViewerStatus.value = status;
    status.hasUnread = false;
  }

  function closeViewer() {
    activeViewerStatus.value = null;
  }

  return {
    statusList,
    activeViewerStatus,
    openViewer,
    closeViewer
  };
});
