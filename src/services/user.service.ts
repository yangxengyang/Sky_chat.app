import { ApiService } from './api';
import { mockUsers, currentUser } from '../data/users';
import type { UserProfile } from '../types/user';


export class UserService {
  static async getCurrentUser(): Promise<UserProfile> {
    return ApiService.get(currentUser);
  }

  static async getContacts(): Promise<UserProfile[]> {
    return ApiService.get(mockUsers);
  }

  static async getUserById(id: string): Promise<UserProfile | undefined> {
    const user = mockUsers.find((u) => u.id === id);
    return ApiService.get(user);
  }
}
