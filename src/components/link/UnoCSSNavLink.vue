<script setup lang="ts">
import { computed, ref, watch, reactive, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

interface MenuItem {
  name: string;
  to: string;
}

const rawMenuItems: MenuItem[] = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Classes", to: "/classes" },
  { name: "Contact", to: "/contact" },
  // { name: "Updates", to: "/updates" },
  { name: "FAQ", to: "/faq" },
];

const menuItems = reactive(rawMenuItems);

const mobileMenuOpen = ref(false);
const isMobile = computed(() => window.innerWidth < 768);

function updateIsMobile() {
  if (!isMobile.value) {
    mobileMenuOpen.value = false;
  }
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

onMounted(() => {
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});

watch(
  isMobile,
  (value) => {
    if (value) {
      mobileMenuOpen.value = false;
    }
  },
  { immediate: true }
);

const $route = useRoute();

watch(
  () => $route.path,
  (newPath) => {
    if (newPath === "/" || newPath === "/home") {
      const index = menuItems.findIndex((item) => item.name === "Home");
      if (index !== -1) menuItems.splice(index, 1);
    } else {
      const index = menuItems.findIndex((item) => item.name === "Home");
      if (index === -1) menuItems.unshift({ name: "Home", to: "/" });
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="navbar-container">
    <div v-if="!isMobile" class="navbar-links hidden md:flex">
      <RouterLink v-for="item in menuItems" :key="item.name" :to="item.to"
        class="transition duration-300 ease-in-out btn btn-ghost hover:bg-base-200 hover:text-primary" :class="{
          'border-b-2 border-primary text-primary': item.to === $route.path,
        }">
        {{ item.name }}
      </RouterLink>
    </div>
    <!-- Mobile Hamburger Icon, rendered only on mobile -->
    <div v-if="isMobile" class="mobile-menu-icon md:hidden" @click="toggleMobileMenu">
      <span :class="{ open: mobileMenuOpen }" />
    </div>
    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click.self="toggleMobileMenu">
        <div class="mobile-menu-links">
          <RouterLink v-for="item in menuItems" :key="`mobile-${item.name}`" :to="item.to" class="mobile-menu-item"
            @click="toggleMobileMenu">
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.navbar-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.navbar-links {
  display: flex;
  gap: 1rem;
}

.mobile-menu-icon {
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  z-index: 60;
}

.mobile-menu-icon span,
.mobile-menu-icon span::before,
.mobile-menu-icon span::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.mobile-menu-icon span::before {
  transform: translateY(-6px);
}

.mobile-menu-icon span::after {
  transform: translateY(6px);
}

.mobile-menu-icon span.open {
  background-color: transparent;
}

.mobile-menu-icon span.open::before {
  transform: translateY(0) rotate(45deg);
}

.mobile-menu-icon span.open::after {
  transform: translateY(0) rotate(-45deg);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9001;
}

.mobile-menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-menu-item {
  margin: 0.5rem 0;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  transition: background-color 0.3s ease-in-out;
}

.mobile-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
