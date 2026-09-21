<template>
  <div class="media-view">
    <AppHeader title="ສື່ ແລະ ຮູບພາບ" show-back variant="white" @back="router.back()" />

    <div class="media-grid">
      <div v-for="(img, idx) in sampleMedia" :key="idx" class="media-card">
        <img :src="img" alt="Media" class="media-img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppHeader from '../../components/common/AppHeader.vue';

const router = useRouter();

const sampleMedia = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
];
</script>

<style scoped>
.media-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg);
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  padding: 8px;
  overflow-y: auto;
}

.media-card {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-sm);
}

.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
