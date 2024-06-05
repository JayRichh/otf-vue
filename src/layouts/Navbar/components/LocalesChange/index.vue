<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useLocalStorage } from "@vueuse/core";
import UnoCSSIconButton from "~/components/Icon/UnoCSSIconButton.vue";
import { languagesNameList } from "~/composables/language";

const storedLocale = useLocalStorage("locale", "en");
const { availableLocales, locale } = useI18n();
locale.value = storedLocale.value;

const showDropdown = ref(false);

const dropdown = ref<HTMLElement | null>(null);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function changeLocales(lang: string) {
  locale.value = lang;
  storedLocale.value = lang;
  showDropdown.value = false;
}

function getLanguageNativeName(lang: string): string {
  if (!lang) {
    return "undefined";
  }
  return languagesNameList.find(item => item.code === lang)?.nativeName || lang;
}

function closeDropdown() {
  showDropdown.value = false;
}

function handleOutsideClick(event: MouseEvent) {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    closeDropdown();
  }
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>

<template>
  <div ref="dropdown" class="dropdown" @click="toggleDropdown">
    <div tabindex="0" class="btn btn-square btn-ghost">
      <UnoCSSIconButton icon="i-tabler-world mb-n2 mt-2" :class="{ 'icon-float': showDropdown }" />
      <UnoCSSIconButton icon="i-tabler-chevron-down" :class="{ 'icon-rotate': showDropdown }" />
    </div>
    <Transition name="fade">
      <ul v-show="showDropdown" class="dropdown-content scrollbar absolute right-0 top-full mt-2 h-auto max-h-96 w-52 bg-base-200 text-base-content shadow-2xl rounded-box">
        <li v-for="lang in availableLocales" :key="lang" :class="{ 'menu-item-active': lang === locale }">
          <button class="btn btn-ghost btn-block" @click.stop="changeLocales(lang)">
            {{ getLanguageNativeName(lang) }}
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.icon-animation {
  transition: transform 0.3s ease;
}
.icon-float {
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.25rem);
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  z-index: 10;
  margin-top: 0.5rem;
}

.dropdown:hover .dropdown-content,
.dropdown:focus-within .dropdown-content {
  display: block;
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

.menu-item-active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>

<style>
.icon-rotate {
  transform: rotate(180deg);
}
</style>
