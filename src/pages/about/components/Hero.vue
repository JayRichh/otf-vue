<script setup lang="ts">
const router = useRouter();

function goToClasses() {
  router.push({
    name: "Classes",
  });
}
</script>

<template>
  <div class="min-h-screen text-primary-content hero">
    <div
      class="place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay"
    />
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Welcome to OTF
        </h1>
        <p class="mb-5">
          Experience the thrill of aerial silks at an amazing height of 6 meters, perfect for beginners and advanced practitioners alike.
        </p>
        <button class="btn btn-primary" @click="goToClasses">
          View Our Classes
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('https://img.js.design/assets/Resources/background/home-bg-2.png');
  background-size: cover;
  background-position: center;
}
</style>
