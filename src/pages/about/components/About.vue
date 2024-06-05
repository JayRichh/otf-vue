<template>
  <div class="p-5 bg-base-100 text-base-content">
    <div class="container mx-auto py-12 animate__animated animate__fadeIn">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="relative flex justify-center items-center">
          <div class="card w-full max-w-lg bg-base-100 shadow-xl overflow-hidden relative">
            <figure class="relative h-80">
              <img src="https://via.placeholder.com/600x400" alt="Aerial Silks" class="object-cover w-full h-full absolute z-0"/>
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <h3 class="text-4xl font-semibold text-white">Our Studio</h3>
              </div>
            </figure>
            <div class="card-body p-6 text-center lg:text-left">
              <p class="mb-4 text-white">
                At OTF, we are proud to be the first and only studio in Hartlepool offering aerial silks training at an
                impressive height of 6 meters. Perfect for beginners and advanced practitioners, we provide comprehensive
                training in various aerial skills.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center space-y-8">
          <div class="card w-full max-w-lg bg-base-100 shadow-xl mb-8 relative">
            <div class="card-body p-6 text-center lg:text-left">
              <h3 class="text-2xl font-semibold mb-4 text-white">Who We Are</h3>
              <p class="mb-8 text-gray-300">
                Whether you’re looking to train for fun or fitness, we cater to all ages and abilities. Our range of
                activities includes pole fitness, aerial hoop, silks, and trapeze. Join us and become a part of our
                vibrant community.
              </p>
            </div>
          </div>
          <div class="card w-full max-w-lg bg-base-100 shadow-xl relative">
            <div class="card-body p-6 text-center lg:text-left">
              <h3 class="text-2xl font-semibold mb-4 text-white">Join Our Community</h3>
              <p class="text-gray-300">
                We are a local business dedicated to promoting aerial fitness. Come and join our crazy family and
                experience the thrill of aerial arts with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "animate.css";
</script>

<style scoped>
.container {
  max-width: 1200px;
  min-height: 100vh;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

h3 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.2;
}

p {
  line-height: 1.5;
}

figure {
  position: relative;
  overflow: hidden;
}

figure img {
  transition: transform 0.3s ease;
}

figure:hover img {
  transform: scale(1.1);
}

.card-body {
  background: rgba(0, 0, 0, 0.6);
}

.text-white {
  color: #ffffff;
}

.text-gray-300 {
  color: #d1d5db;
}

@media (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>
