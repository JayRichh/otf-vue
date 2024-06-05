<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useDebounceFn } from "@vueuse/core";

const atFooter = ref(false);
const textDarken = ref(false);
const scrollY = ref(0);
const percentScrolled = ref(0);
const displayChevron = ref(false);

const debouncedHandleScroll = useDebounceFn(() => {
  scrollY.value = window.scrollY;
  percentScrolled.value
    = (scrollY.value / (document.body.scrollHeight - window.innerHeight)) * 100;

  percentScrolled.value = Math.round(percentScrolled.value);

  const footerElement = document.querySelector(".feet");
  if (footerElement) {
    const footerTop = footerElement.getBoundingClientRect().top;
    textDarken.value = footerTop < window.innerHeight;
    atFooter.value = window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
}, 24);

onMounted(() => {
  window.addEventListener("scroll", debouncedHandleScroll);
  debouncedHandleScroll(); // set state on current scroll position
});

onUnmounted(() => {
  window.removeEventListener("scroll", debouncedHandleScroll);
});

function toggleScroll() {
  const targetY = atFooter.value ? 0 : document.body.scrollHeight;
  window.scrollTo({ top: targetY, behavior: "smooth" });
  atFooter.value = !atFooter.value;
}

const textColorClass = computed(() => {
  return textDarken.value ? "text-primary-content" : "text-base-content";
});

const fadeIn = computed(() => {
  return atFooter.value ? "animate-fade-in" : "";
});

const isMobile = computed(() => window.innerWidth < 768);
</script>

<template>
  <footer
    class="bg-base-400 sticky bottom-0 mt-3 flex border-base-200 bg-opacity-90 p-4 text-base-content text-primary-content color-dark-100 backdrop-blur-lg backdrop-filter container"
  >
    <div
      class="grid grid-cols-1 mx-auto max-w-7xl gap-4 text-center container md:grid-cols-3 md:text-left"
    >
      <div
        class="items-between flex flex-col gap-2 md:items-start"
      >
        <img
          v-if="!isMobile"
          class="img center transform-color h-25 w-25 transform-gpu color-dark-100 @hover:scale-105 @hover:cursor-pointer @md:justify-start @md:gap-2 @hover:duration-300 @hover:ease-in-out"
          src="../../assets/transparent-logo.png"
          alt="Off The Floor Aerial Arts"
          :class="fadeIn"
          @click="toggleScroll"
        >
        <span
          v-if="!isMobile"
          class="float-bottom mt-auto pb-4 text-center text-sm text-dark-200 text-primary-content font-bold @hover:cursor-pointer @hover:underline @hover:opacity-80 @hover:duration-300 @hover:ease-in-out"
          :class="textColorClass"
        >© Off The Floor Aerial Arts 2024</span>
      </div>
      <div
        class="social-icons-container flex justify-center gap-10" :class="[textColorClass, isMobile ? 'transform-gpu -translate-y-1.3rem md:translate-y-0'
          : '']"
      >
        <a href="https://facebook.com/" target="_blank" class="hover:opacity-80">
          <i class="fab fa-facebook-f scale-140 transform" />
        </a>
        <a href="https://youtube.com/" target="_blank" class="hover:opacity-80">
          <i class="fab fa-youtube scale-140 transform" />
        </a>
        <a href="https://instagram.com/" target="_blank" class="hover:opacity-80">
          <i class="fab fa-instagram scale-140 transform" />
        </a>
        <a href="https://twitter.com/" target="_blank" class="hover:opacity-80">
          <i class="fab fa-twitter scale-140 transform" />
        </a>
      </div>

      <div class="flex flex-col items-center gap-2 md:items-end">
        <div>
          <span v-if="displayChevron" class="rotating-chevron">
            <i
              class="fas fa-chevron-up scale-140 scale-50 transform @hover:cursor-pointer @hover:opacity-80 @hover:duration-300 @hover:ease-in-out"
              :class="textColorClass"
              :style="{ transform: !atFooter.value ? 'rotate(180deg)' : '' }"
            />
          </span>
          <span
            class="text-lg color-white font-bold @hover:cursor-pointer @hover:opacity-80 @hover:duration-300 @hover:ease-in-out"
            :title="atFooter.value ? 'Back to top' : 'Scroll to bottom'"
            :class="textColorClass"
            @click="toggleScroll"
            @mouseenter="displayChevron = true"
            @mouseleave="displayChevron = false"
          >Off The Floor Aerial Arts</span>
        </div>
        <div class="pt-1rem text-center color-dark md:text-right" :class="textColorClass">
          <p>6 Usworth Rd,</p>
          <p>Hartlepool, United Kingdom</p>
          <p>07714 366314</p>
        </div>
        <a
          href="https://jayrich.dev" target="_blank" class="feet mb-1 mt-2rem text-xs color-dark hover:underline"
          :class="textColorClass"
        >Web: Jay</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.text-primary-content {
  color: black;
  transition: color 1s ease;
}

.text-base-content {
  color: #f5f5f5;
  transition: color 1s ease;
}

.at-footer {
  transform: translateY(-100%);
  transition: transform 1s ease;
}

.footer {
  background-color: rgba(31, 41, 55, 0.8);
  color: #f5f5f5;
  backdrop-filter: blur(10px);
}

i {
  font-size: 1.25rem;
  transition: opacity 0.3s ease;
}

i:hover {
  opacity: 0.8;
}

.container {
  max-width: 6xl;
}

@media (max-width: 640px) {
  .container {
    max-width: 3xl;
  }
}
</style>
