<script setup lang="ts">
import { ref } from 'vue';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs = ref<FAQ[]>([
  {
    id: 1,
    question: 'Can parents watch?',
    answer: 'Yes. There is a designated viewing area for parents and family to watch during the sessions.',
  },
  {
    id: 2,
    question: 'What should my child wear to class?',
    answer: 'For boys and girls, leggings or shorts are fine with a tight fitted top that can be tucked in. A leotard is not essential but is the most ideal when participating in gymnastics. Please avoid t-shirts or baggy clothing as it restricts movement and can hinder our ability to provide feedback and corrections.',
  },
  {
    id: 3,
    question: 'Are your coaches qualified?',
    answer: 'Yes, all of our leading coaches are fully qualified. We also have assistant coaches who are learning to become leading coaches and are always under the supervision of a head coach or qualified coach.',
  },
  {
    id: 4,
    question: 'Is gymnastics safe?',
    answer: 'Gymnastics is a very safe sport when taught correctly. Our coaches will ensure your child’s welfare is paramount and will not push any skills above what they are capable of doing.',
  },
  {
    id: 5,
    question: 'What kind of fitness background do I need as an adult?',
    answer: 'No fitness background is needed to start adult classes. Whether you have a dance or gymnastics background or none at all, if you can hang from a pull-up bar, you can start a beginner course.',
  },
  {
    id: 6,
    question: 'What if I am afraid of heights?',
    answer: 'Do not worry! Many professional aerialists start with a fear of heights. Our class sizes are small, and our instructors are experienced in working with students who have concerns about heights. Beginners work right off the mat, and moves are spotted by instructors.',
  },
]);

const activeFAQ = ref<number | null>(null);

function toggleFAQ(id: number) {
  activeFAQ.value = activeFAQ.value === id ? null : id;
}
</script>

<template>
  <div class="p-5 bg-base-100 text-base-content">
    <div class="container mx-auto py-12">
      <h2 class="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div class="flex flex-col gap-4">
        <div v-for="faq in faqs" :key="faq.id" class="card w-full bg-base-100 shadow-xl">
          <div class="card-body p-6">
            <h3 class="text-2xl font-bold mb-4 cursor-pointer" @click="toggleFAQ(faq.id)">
              {{ faq.question }}
            </h3>
            <p v-if="activeFAQ === faq.id" class="leading-relaxed mb-4">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
.card-body {
  padding: 1.5rem;
  transition: all 0.3s ease-in-out;
}
.card h3 {
  font-size: 1.75rem;
}
.card p {
  font-size: 1rem;
  padding-left: 1.5rem;
}
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  .card-body {
    padding: 1rem;
  }
  .card h3 {
    font-size: 1.5rem;
  }
  .card p {
    font-size: 0.875rem;
    padding-left: 1rem;
  }
}
</style>
