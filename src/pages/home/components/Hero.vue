<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import "animate.css"
const router = useRouter();
const isVisible = ref(true);
function navigateToStore() {
  router.push({ name: "StoreTest" });
}

onMounted(() => console.log("Component is mounted"));
onUnmounted(() => console.log("Component unmounted"));
</script>

<template>
  <div class="photo-grid-container relative mt-[-4rem] min-h-screen flex flex-col items-center justify-center text-primary-content hero animate__animated animate__fadeIn" v-if="isVisible">
    <div class="photo-grid absolute inset-0 z-0">
      <div class="photo photo-1" />
      <div class="photo photo-2" />
      <div class="photo photo-3" />
      <div class="photo photo-4" />
      <div class="photo photo-5" />
    </div>
    <div class="header-content absolute right-0 z-10 mt-[25vh] max-w-full rounded-lg bg-black bg-opacity-50 p-8 text-right shadow-xl md:p-12">
      <h2 class="header-title mb-5 text-5xl text-white font-bold leading-tight tracking-tight">
        Welcome
      </h2>
      <p class="mb-5 text-lg text-gray-300">
        We are a fun friendly studio teaching Aerial Hoop, Aerial Silks, Pole, Sky Pole, and Trapeze for adults, children, and families.
      </p>
      <button class="btn btn-outline" @click="navigateToStore">
        More Info
      </button>
    </div>
  </div>
</template>

<style scoped>
.photo-1,
.photo-4 {
  grid-row: span 2;
}

.photo-2 {
  grid-column: 2;
  grid-row: span 3;
}

.photo-5 {
  grid-column: 3;
  grid-row: span 2;
}

.photo-1 {
  background-image: url("~/assets/trap.jpg");
}

.photo-2 {
  background-image: url("~/assets/neil.jpg");
}

.photo-3 {
  background-image: url("~/assets/silks.jpg");
  grid-row-start: 3;
}

.photo-4 {
  background-image: url("~/assets/team.jpg");
  grid-column-start: 3;
}
.photo-5 {
  background-image: url("~/assets/pole2.jpg");
  grid-row-start: 3;
}
.photo-grid-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem; /* Increased top padding for hero space */
  padding-bottom: 10rem; /* Increased bottom padding for additional space */
}

.photo-grid {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header-content {
  width: 100%; /* Full width for a modern overlay look */
  max-width: 1200px; /* Max width to maintain content readability */
  backdrop-filter: blur(10px); /* Enhanced backdrop contrast */
  border-radius: 0 0 0.5rem 0.5rem; /* Rounded corners at the bottom */
}

.btn-outline {
  border: 2px solid #ffffff;
  color: #ffffff;
  background: transparent;
  padding: 0.5rem 2rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: #ffffff;
  color: #000000;
}

.photo {
  background-size: cover;
  background-position: center;
}

/* Responsive adjustments for the photo grid */
@media (max-width: 639px) {
  .photo-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 640px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Button styling */
.btn-outline {
  border: 2px solid #ffffff;
  color: #ffffff;
  background: transparent;
  padding: 0.5rem 2rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: #ffffff;
  color: #000000;
}

/* Ensuring content is visually appealing and accessible */
.header-content {
  backdrop-filter: blur(8px); /* Enhance background contrast */
}
</style>
