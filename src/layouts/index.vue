<script setup lang="ts">
import Navbar from "./Navbar/index.vue";
import Footer from "./Footer/index.vue";

</script>

<template>
  <div class="antialiased">
    <div class="min-h-screen">
      <Navbar />
      <RouterView />
    </div>
    <footer
      class="sticky bottom-0 z-30 h-16 w-full flex justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100"
    >
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
</style>
