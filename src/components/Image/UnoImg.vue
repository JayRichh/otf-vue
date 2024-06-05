<script lang="ts" setup>
import { defineProps, ref, watchEffect } from "vue";

const props = defineProps<{
  src: string;
  alt?: string;
}>();

const isLoading = ref(true);
const isError = ref(false);

function loadImage() {
  isLoading.value = true;
  fetch(props.src)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed image : ${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => {
      isLoading.value = false;
      return URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error(error);
      isError.value = true;
      isLoading.value = false;
    });
}

watchEffect(() => {
  loadImage();
});

function onImageLoad() {
  isLoading.value = false;
}

function onImageError({ target }: Event) {
  console.warn(`Image failed to load from URL: ${(target as HTMLImageElement).src}`);
  isError.value = true;
}

const alt = props.alt || "";
</script>

<template>
  <div>
    <img v-if="!isError" :src="props.src" :alt="alt" @load="onImageLoad" @error="onImageError">
    <div v-if="isLoading" class="loading-indicator">
      <div class="spinner" />
    </div>
    <div v-if="isError" class="error-message">
      Failed to load image
    </div>
  </div>
</template>

<style scoped>
.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #666;
  font-size: 1.5rem;
}

.spinner {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #888;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
