import { ApiService } from './api';
import type { CallItem } from '../types/call';


export const mockCallsList: CallItem[] = [
  {
    id: 'cl1',
    userId: 'u1',
    userName: 'ຄອບຄົວ ❤️',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    userPhone: '+856 20 9988 7766',
    callType: 'video',
    callStatus: 'incoming',
    timestamp: '12:45',
    duration: '05:12'
  },
  {
    id: 'cl2',
    userId: 'u2',
    userName: 'ມິດສະພອນ',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    userPhone: '+856 20 5544 3322',
    callType: 'audio',
    callStatus: 'outgoing',
    timestamp: '10:32',
    duration: '01:45'
  },
  {
    id: 'cl3',
    userId: 'u7',
    userName: 'ແມ່',
    userAvatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80',
    userPhone: '+856 20 1122 3344',
    callType: 'audio',
    callStatus: 'incoming',
    timestamp: '09:21',
    duration: '12:00'
  },
  {
    id: 'cl4',
    userId: 'u5',
    userName: 'ອ້າຍລາມ',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    userPhone: '+856 20 6655 4433',
    callType: 'video',
    callStatus: 'missed',
    timestamp: 'Yesterday'
  },
  {
    id: 'cl5',
    userId: 'u6',
    userName: 'ນ້ອງຕາ',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    userPhone: '+856 20 4433 2211',
    callType: 'audio',
    callStatus: 'incoming',
    timestamp: '3 ມື້ກ່ອນ'
  }
];

export class CallService {
  static async fetchCalls(): Promise<CallItem[]> {
    return ApiService.get(mockCallsList);
  }
}
