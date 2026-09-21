import { ApiService } from './api';
import { currentUser } from '../data/users';
import type { UserProfile } from '../types/user';


export class AuthService {
  static async login(phoneOrEmail: string, password?: string): Promise<{ token: string; user: UserProfile }> {
    return ApiService.post({ phoneOrEmail, password }, {
      token: 'mock-jwt-token-123456',
      user: { ...currentUser, phone: phoneOrEmail.includes('+') ? phoneOrEmail : currentUser.phone }
    });
  }

  static async register(name: string, phone: string): Promise<{ token: string; user: UserProfile }> {
    return ApiService.post({ name, phone }, {
      token: 'mock-jwt-token-789012',
      user: {
        ...currentUser,
        name,
        phone
      }
    });
  }

  static async logout(): Promise<boolean> {
    return ApiService.post({}, true, 100);
  }
}
