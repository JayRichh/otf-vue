<script setup lang="ts">
import Hero from "../home/components/Hero.vue";
import Testimonials from "../home/components/Testimonials.vue";
import { useHead } from '@vueuse/head';

useHead({
  title: 'OTF Aerial Fitness | Pole Fitness and Aerial Arts in Hartlepool',
  meta: [
    {
      name: 'description',
      content: 'OTF Aerial Fitness offers pole fitness, aerial hoop, silks, and trapeze training in Hartlepool. Join us for fun and fitness at impressive heights.',
    },
    {
      name: 'keywords',
      content: 'pole fitness, aerial arts, aerial silks, Hartlepool, fitness classes, gymnastics, trapeze, aerial hoop',
    },
    {
      name: 'author',
      content: 'OTF Aerial Fitness',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'theme-color',
      content: '#317EFB',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      property: 'og:title',
      content: 'OTF Aerial Fitness | Pole Fitness and Aerial Arts in Hartlepool',
    },
    {
      property: 'og:description',
      content: 'OTF Aerial Fitness offers pole fitness, aerial hoop, silks, and trapeze training in Hartlepool. Join us for fun and fitness at impressive heights.',
    },
    {
      property: 'og:image',
      content: 'https://via.placeholder.com/1200x630',
    },
    {
      property: 'og:url',
      content: 'https://yourwebsite.com',
    },
    {
      property: 'og:site_name',
      content: 'OTF Aerial Fitness',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:creator',
      content: '@OTFAerialFitness',
    },
  ],
});

// import StoreTest from "../home/components/StoreTest.vue";

defineOptions({
  name: "Home",
});
</script>

<template>
  <Hero />
  <Testimonials />
  <!-- <StoreTest /> -->
</template>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}
</style>
