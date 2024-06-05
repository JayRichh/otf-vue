<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const showGrid = ref(true);

const router = useRouter();

function testStore() {
  router.push({ name: "StoreTest" });
}

function toggleGrid() {
  showGrid.value = !showGrid.value;
}

onMounted(() => {
  console.log("Component is mounted");
});

onUnmounted(() => {
  console.log("Compounmounted");
});
</script>

<template>
  <div class="photo-grid-container mt-[-4rem] min-h-screen text-primary-content hero">
    <div class="photo-grid">
      <div class="photo photo-1" />
      <div class="photo photo-2" />
      <div class="photo photo-3" />
      <div class="photo photo-4" />
      <div class="photo photo-5" />
    </div>
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Ayo
        </h1>
        <p class="mb-5">
          LETS GOOOOOOOOO <sup>(speed)</sup>
        </p>
        <button class="btn btn-primary" @click="testStore">
          Test Store
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*.photo-grid-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}*/

/*.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}*/

.photo {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Adjust the grid layout for different screen sizes */
.photo-grid {
  display: grid;
  gap: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 639px) {
  .photo-grid {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* Single column on extra-small devices */
  }
}

@media (min-width: 640px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr); /* Two columns on small devices */
  }
}

@media (min-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Three columns on medium devices and up */
  }
}
</style>
