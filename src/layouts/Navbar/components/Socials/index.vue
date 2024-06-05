<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import UnoCSSIconButton from "~/components/Icon/UnoCSSIconButton.vue";

interface SocialInfo {
  label: string;
  icon: string;
  url: string;
}

const socials: SocialInfo[] = [
  { label: "Twitter", icon: "i-mdi-twitter", url: "https://twitter.com/" },
  { label: "Facebook", icon: "i-mdi-facebook", url: "https://facebook.com/" },
  {
    label: "Instagram",
    icon: "i-mdi-instagram",
    url: "https://instagram.com/",
  },
  { label: "YouTube", icon: "i-mdi-youtube", url: "https://youtube.com/" },
];

const showDropdown = ref(false);
const activeButton = ref(false);

function toggleDropdown(event) {
  // stop da propagacao do evento
  activeButton.value = !activeButton.value;
  showDropdown.value = activeButton.value;
  event.stopPropagation();
}

function handleDocumentClick(event) {
  if (!event.target.closest(".dropdown")) {
    showDropdown.value = false;
    activeButton.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>

<template>
  <div class="relative dropdown dropdown-end">
    <div tabindex="0" class="btn btn-square btn-ghost" @click="toggleDropdown">
      <UnoCSSIconButton
        icon="i-tabler-brand-telegram"
        class="mb-n2 mt-2 scale-150 transition-transform"
        :class="{ 'rotate-180': showDropdown || activeButton }"
      />
    </div>
    <Transition name="dropdown-fade">
      <ul
        v-show="showDropdown || activeButton"
        class="dropdown-content scrollbar absolute right-0 top-full mt-2 h-auto max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl rounded-box"
      >
        <li
          v-for="social in socials"
          :key="social.label"
          class="menu-item rounded-lg"
        >
          <a
            :href="social.url"
            class="flex items-center justify-between p-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div class="grow text-sm font-bold">
              {{ social.label }}
            </div>
            <UnoCSSIconButton :icon="social.icon" />
          </a>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}
.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f7f4ed;
}
.scrollbar::-webkit-scrollbar-thumb {
  background: #e0cbcb;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}
.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.3s ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
}
.dropdown-fade-enter-to,
.dropdown-fade-leave-from {
  opacity: 1;
}
.transition-transform {
  transition: transform 0.3s ease;
}
.rotate-180 {
  transform: rotate(180deg);
}
.mb-n2,
.mt-2 {
  margin-bottom: -0.5rem;
  margin-top: 0.5rem;
}
.menu-item {
  transition: background-color 0.3s ease-in-out;
}
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
