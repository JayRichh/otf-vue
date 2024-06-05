<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import type { Day } from '~/constant/timetableConstant';

const props = defineProps<{ day: Day }>();
const show = ref(false);

function applyStyles() {
  const items = document.querySelectorAll<HTMLLIElement>('.card-body li');
  items.forEach(item => {
    const timeEl = item.querySelector<HTMLSpanElement>('.time');
    const infoEl = item.querySelector<HTMLSpanElement>('.info');
    const priceEl = item.querySelector<HTMLSpanElement>('.price');

    if (timeEl && infoEl && priceEl) {
      if (props.day.name === 'Sat') {
        timeEl.style.width = '25%';
        infoEl.style.width = '25%';
        priceEl.style.width = '50%';
      } else {
        timeEl.style.width = '33.33%';
        infoEl.style.width = '33.33%';
        priceEl.style.width = '33.33%';
      }
    }
  });
}

onMounted(() => {
  applyStyles();
  show.value = true;
});
</script>

<template>
  <div
    class="relative mb-auto card overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
    v-if="show"
  >
    <img
      v-if="props.day.image" :src="props.day.image"
      class="absolute right-2 top-2 h-auto w-1/4 2xl:w-1/8 lg:w-1/6 md:w-1/5 xl:w-1/7"
    >
    <div class="card-header p-2 text-base font-bold md:p-4 md:text-lg">
      {{ props.day.name }}
    </div>
    <div class="min-h-20 card-body p-1 text-sm md:p-2 md:text-base">
      <ul v-if="!props.day.closed">
        <li v-for="(session, sIndex) in props.day.sessions" :key="sIndex" class="p-1 md:p-1 flex justify-between items-center border-b border-gray-200">
          <span class="time">{{ session.time }}</span>
          <span class="info">{{ session.info }}</span>
          <span class="price" v-html="session.price.replace(/\n/g, '<br>')"></span>
        </li>
      </ul>
      <div v-if="props.day.closed" class="mt-4 text-center text-lg font-semibold">
        Closed
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  padding: 0.5rem 1rem;
}

.card-body ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.card-body li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.card-body li span {
  flex: 1;
}

.card-body li .time {
  text-align: left;
}

.card-body li .info {
  text-align: center;
}

.card-body li .price {
  text-align: right;
}

@media (max-width: 639px) {
  .card-header,
  .card-body {
    padding: 0.5rem; /* Reduced padding */
  }

  .card-img {
    max-width: 60px;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .card-header,
  .card-body {
    padding: 1rem; /* Reduced padding */
  }

  .card-img {
    max-width: 80px;
  }
}

@media (min-width: 1024px) {
  .card-header,
  .card-body {
    padding: 1.5rem; /* Reduced padding */
  }

  .card-img {
    max-width: 100px;
  }
}

.card {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-header {
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #e2e8f0;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.card-subtitle {
  font-size: 1.125rem;
  font-family: "Roboto", sans-serif;
  color: #718096;
}

.card-price {
  font-size: 1.125rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #38a169;
}

.code {
  font-family: monospace;
  background-color: #f7fafc;
  color: #e53e3e;
  padding: 0.5rem;
  border-radius: 0.375rem;
}

.pre {
  font-family: monospace;
  background-color: #f7fafc;
  overflow: auto;
  padding: 1rem;
  border-radius: 0.375rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.15s ease-in-out;
}
.btn-primary {
  background-color: #4299e1;
  color: white;
}

.btn-primary:hover {
  background-color: #3182ce;
}

.btn-secondary {
  background-color: #718096;
  color: white;
}

.btn-secondary:hover {
  background-color: #4a5568;
}

.grid-mobile {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

.grid-desktop {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
