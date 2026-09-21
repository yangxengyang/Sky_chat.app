<template>
  <div class="image-msg-box">
    <img
      :src="imageUrl"
      alt="Message image"
      class="msg-img"
      @click="openPreview = true"
    />
    <p v-if="caption" class="img-caption">{{ caption }}</p>

    <!-- Image Lightbox Modal -->
    <Teleport to="body">
      <div v-if="openPreview" class="image-lightbox" @click="openPreview = false">
        <button class="close-btn" @click="openPreview = false">
          <X :size="24" />
        </button>
        <img :src="imageUrl" alt="Preview" class="lightbox-img" />
        <p v-if="caption" class="lightbox-caption">{{ caption }}</p>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { X } from 'lucide-vue-next';

defineProps<{
  imageUrl: string;
  caption?: string;
}>();

const openPreview = ref(false);
</script>

<style scoped>
.image-msg-box {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 260px;
}

.msg-img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: transform 0.2s;
}

.msg-img:hover {
  transform: scale(1.02);
}

.img-caption {
  font-size: 0.88rem;
  line-height: 1.3;
}

.image-lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox-img {
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-md);
}

.lightbox-caption {
  color: #ffffff;
  margin-top: 12px;
  font-size: 1rem;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
