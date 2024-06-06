<template>
  <div class="background-image">
    <div class="background-overlay"></div>
    <div class="container content-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Cards for Who We Are and Join Our Community -->
        <div class="flex flex-col justify-center items-center space-y-8">
          <div class="card w-full max-w-lg bg-base-100 shadow-xl mb-8 relative">
            <div class="card-body">
              <h3 class="text-2xl font-semibold mb-4 text-white">Who We Are</h3>
              <p class="text-gray-300">
                Whether you’re looking to train for fun or fitness, we cater to all ages and abilities. Our range of activities includes pole fitness, aerial hoop, silks, and trapeze. Join us and become a part of our vibrant community.
              </p>
            </div>
          </div>
          <div class="card w-full max-w-lg bg-base-100 shadow-xl relative">
            <div class="card-body">
              <h3 class="text-2xl font-semibold mb-4 text-white">Join Our Community</h3>
              <p class="text-gray-300">
                We are a local business dedicated to promoting aerial fitness. Come and join our crazy family and experience the thrill of aerial arts with us.
              </p>
            </div>
          </div>
        </div>
        <!-- Our Studio Card with Background Image on Right -->
        <div class="relative flex justify-center items-center">
          <div class="card w-full max-w-lg bg-base-100 shadow-xl overflow-hidden relative">
            <figure class="background-card" style="">
              <div class="text-overlay">
                <h3 class="text-4xl font-semibold text-white">Our Studio</h3>
                <p class="text-white">
                  At OTF, we are proud to be the first and only studio in Hartlepool offering aerial silks training at an impressive height of 6 meters. Perfect for beginners and advanced practitioners, we provide comprehensive training in various aerial skills.
                </p>
              </div>
            </figure>
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
.background-image {
  background-image: url('~/assets/male_hoop.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 100vh;
}

.background-overlay {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content-container {
  position: relative;
  margin: 0 auto;
  z-index: 2;
  max-width: 1200px;
  padding: 5rem 1rem;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.background-card {
  height: 80vh;
  background-image: url('~/assets/boom.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column; /* Align text blocks vertically */
  justify-content: center; /* Center content horizontally and vertically */
}

.text-overlay {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6); /* Slight dark overlay on text for readability */
}

.text-white {
  color: #ffffff;
}

.text-gray-300 {
  color: #d1d5db;
}

@media (max-width: 768px) {
  .grid-cols-1, .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>