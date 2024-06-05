<template>
  <div class="mx-auto flex flex-col items-center justify-center pb-[8rem] pt-[10rem] text-center container space-y-8">
    <h3 class="text-2xl text-gray-900  md:text-5xl">
      What Our Clients Say
    </h3>
    <Carousel 
      v-model="currentSlide" 
      :items-to-show="calculateItemsToShow"
      center-mode 
      class="w-full" 
      :navigation-enabled="false" 
      :pagination-enabled="true"
    >
      <Slide v-for="(testimonial, index) in testimonials" :key="testimonial.id">
        <div
          class="testimonial-content"
          :class="getTestimonialClass(index)"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
        >
          <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
          <footer class="testimonial-author">— {{ testimonial.author }}</footer>
        </div>
      </Slide>
    </Carousel>
    <div class="navigation">
      <button class="btn-prev" @click="prevSlide">Prev</button>
      <span class="pagination-container">{{ `${currentSlide + 1} / ${testimonials.length}` }}</span>
      <button class="btn-next" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import testimonials from "~/constant/reviewConstant";
import "vue3-carousel/dist/carousel.css";

const currentSlide = ref(1);
const mouseoverIndex = ref(null);

const calculateItemsToShow = computed(() => {
  return window.innerWidth < 768 ? 1 : window.innerWidth >= 768 && window.innerWidth < 1200 ? 2 : 3;
});

function getTestimonialClass(index: number) {
  return {
    'active': index === mouseoverIndex.value || (!mouseoverIndex.value && index === currentSlide.value),
    'hover-effect': index === mouseoverIndex.value,
  };
}

function handleMouseEnter(index: number) {
  mouseoverIndex.value = index;
}

function handleMouseLeave() {
  mouseoverIndex.value = null;
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length;
}
</script>

<style scoped>
.carousel-container {
  max-width: 1200px; 
  width: 90vw;
  margin: auto;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.testimonial-content {
  padding: 1.5rem; 
  margin: 1rem; 
  height: 300px;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  text-align: center;
}

.testimonial-content.active, .testimonial-content.hover-effect {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.testimonial-content:not(.active) {
  transform: scale(0.95); 
}


.navigation {
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 1rem;
  gap: 1rem; 
}

.btn-prev, .btn-next {
  border: none;
  background-color: #666; 
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.pagination-container {
  color: #666;
  margin: 0 1rem; 
}
</style>