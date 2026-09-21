<template>
  <div class="status-view">
    <AppHeader title="ສະຖານະ" variant="red">
      <template #right>
        <button class="icon-btn" @click="addNewStatus">
          <Camera :size="20" />
        </button>
      </template>
    </AppHeader>

    <div class="status-scroll-content">
      <!-- My Status Section -->
      <div class="section-label">ສະຖານະຂອງຂ້ອຍ</div>
      <StatusItemComponent
        :item="myStatus"
        @click="addNewStatus"
      />

      <!-- Story Circles Preview Section -->
      <div class="section-label">ສະຖານະທີ່ຖືກເບິ່ງ</div>
      <div class="story-bubbles-row">
        <div
          v-for="s in statusStore.statusList.slice(1)"
          :key="s.id"
          class="story-bubble-item"
          @click="statusStore.openViewer(s)"
        >
          <div class="bubble-ring" :class="{ unread: s.hasUnread }">
            <Avatar :src="s.userAvatar" :alt="s.userName" :size="50" />
          </div>
          <span class="bubble-name">{{ s.userName.split(' ')[0] }}</span>
        </div>
      </div>

      <!-- Recent Status Updates List -->
      <div class="section-label">ການອັບເດດກ່ອນໜ້ານີ້</div>
      <StatusItemComponent
        v-for="item in statusStore.statusList.slice(1)"
        :key="item.id"
        :item="item"
        @click="statusStore.openViewer(item)"
      />
    </div>

    <!-- Status Story Viewer Overlay -->
    <StatusViewer
      :status="statusStore.activeViewerStatus"
      @close="statusStore.closeViewer()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Camera } from 'lucide-vue-next';
import { useStatusStore } from '../stores/status';
import AppHeader from '../components/common/AppHeader.vue';
import Avatar from '../components/common/Avatar.vue';
import StatusItemComponent from '../components/status/StatusItem.vue';
import StatusViewer from '../components/status/StatusViewer.vue';

const statusStore = useStatusStore();

const myStatus = computed(() => statusStore.statusList[0]);

function addNewStatus() {
  alert('ເລືອກຮູບພາບ ຫຼື ວິດີໂອ ເພື່ອເພີ່ມສະຖານະໃໝ່');
}
</script>

<style scoped>
.status-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.status-scroll-content {
  flex: 1;
  overflow-y: auto;
}

.section-label {
  padding: 12px 16px 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.story-bubbles-row {
  display: flex;
  gap: 14px;
  padding: 12px 16px;
  background-color: var(--card-bg);
  overflow-x: auto;
  border-bottom: 1px solid var(--border-color);
}

.story-bubble-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  flex-shrink: 0;
}

.bubble-ring {
  padding: 3px;
  border-radius: 50%;
  border: 2px solid transparent;
}

.bubble-ring.unread {
  border-color: var(--primary-color);
}

.bubble-name {
  font-size: 0.75rem;
  color: var(--text-primary);
  max-width: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-btn {
  background: none;
  border: none;
  color: #ffffff;
  padding: 4px;
  cursor: pointer;
}
</style>
