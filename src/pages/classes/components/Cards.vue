<template>
  <div ref="visible" class="animate__animated animate__fadeIn mt-[-5rem] flex items-center justify-center rounded-lg bg-gray-100 pt-[4rem] w-full" v-if="visible">
    <div class="grid grid-cols-1 mb-auto mt-4 gap-8 p-4 px-auto lg:grid-cols-3 sm:grid-cols-2 max-w-[1440px]">
      <Card
        v-for="(day, index) in data" :key="day.name" :day="day" :index="index"
        :class="{ 'col-span-1 lg:col-span-1 justify-self-center': lastRowSingleItem && index === data.length - 1 }"
        class="min-w-[300px] max-w-[350px] max-h-[350px] min-h-[300px] w-full transition-transform duration-300 ease-in-out"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Card from './Card.vue';
import timetableData from '~/constant/timetableConstant';
import 'animate.css';

const data = ref(timetableData);
const visible = ref(true);

const lastRowSingleItem = computed(() => {
  return data.value.length % 3 === 1;
});
</script>
