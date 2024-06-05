<script setup lang="ts">
import { RouterLink } from "vue-router";
import Socials from "./components/Socials/index.vue";
import ThemeChange from "./components/ThemeChange/index.vue";
import LocalesChange from "./components/LocalesChange/index.vue";
import UnoCSSNavLink from "~/components/link/UnoCSSNavLink.vue";

// import UnoCSSIconButton from "~/components/icon/UnoCSSIconButton.vue";
defineOptions({
  name: "Navbar",
});
const isMobile = computed(() => window.innerWidth < 768);
</script>

<template>
  <div class="sticky top-0 z-30 h-16 w-full flex justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100">
    <nav class="mx-auto max-w-7xl navbar container">
      <div class="flex flex-1 items-center justify-between lg:gap-2 md:gap-1">
        <RouterLink to="/" aria-current="page" aria-label="Homepage" class="btn btn-ghost">
          <div class="inline-flex items-center text-lg text-primary transition-all duration-200 md:text-3xl">
            <span class="text-accent">Off The&nbsp;</span>
            <span class="text-base-content">Floor</span>
          </div>
        </RouterLink>
        <UnoCSSNavLink />
        <div v-if="!isMobile" class="flex items-center gap-4">
          <!-- <ThemeChange /> -->
          <!-- <LocalesChange /> -->
          <Socials />
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-links .btn {
  transition: all 0.3s ease-in-out;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #555;
}
.navbar-links .btn:hover {
  background-color: #f0f0f0;
}
.mobile-menu-icon span {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #333;
  position: relative;
  transition: background-color 0.3s ease-in-out;
}
.mobile-menu-icon span::before,
.mobile-menu-icon span::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: transform 0.3s ease-in-out;
}
.mobile-menu-icon span::before {
  top: -10px;
}
.mobile-menu-icon span::after {
  top: 10px;
}
.mobile-menu-icon span.open {
  background-color: transparent;
}
.mobile-menu-icon span.open::before {
  transform: rotate(45deg) translate(5px, 5px);
}
.mobile-menu-icon span.open::after {
  transform: rotate(-45deg) translate(7px, -7px);
}
.mobile-menu-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mobile-menu-item {
  font-size: 1.25rem;
  color: #000;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
