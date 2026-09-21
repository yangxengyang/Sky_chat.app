import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import AuthLayout from '../layouts/AuthLayout.vue';
import MainLayout from '../layouts/MainLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '/splash',
        name: 'Splash',
        component: () => import('../views/auth/SplashView.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/LoginView.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/RegisterView.vue')
      }
    ]
  },
  {
    path: '/app',
    component: MainLayout,
    children: [
      {
        path: '/chats',
        name: 'ChatList',
        component: () => import('../views/chats/ChatListView.vue')
      },
      {
        path: '/chat/:id',
        name: 'PrivateChat',
        component: () => import('../views/chats/PrivateChatView.vue')
      },
      {
        path: '/group/:id',
        name: 'GroupChat',
        component: () => import('../views/chats/GroupChatView.vue')
      },
      {
        path: '/chats/media',
        name: 'ChatMedia',
        component: () => import('../views/chats/MediaView.vue')
      },
      {
        path: '/chats/files',
        name: 'ChatFiles',
        component: () => import('../views/chats/FileView.vue')
      },
      {
        path: '/calls',
        name: 'Calls',
        component: () => import('../views/CallsView.vue')
      },
      {
        path: '/status',
        name: 'Status',
        component: () => import('../views/StatusView.vue')
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('../views/ContactsView.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/ProfileView.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/settings/SettingsView.vue')
      },
      {
        path: '/settings/privacy',
        name: 'SettingsPrivacy',
        component: () => import('../views/settings/PrivacyView.vue')
      },
      {
        path: '/settings/notifications',
        name: 'SettingsNotifications',
        component: () => import('../views/settings/NotificationsView.vue')
      },
      {
        path: '/settings/theme',
        name: 'SettingsTheme',
        component: () => import('../views/settings/ThemeView.vue')
      },
      {
        path: '/settings/about',
        name: 'SettingsAbout',
        component: () => import('../views/settings/AboutView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
