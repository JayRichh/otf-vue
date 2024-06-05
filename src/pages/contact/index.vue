<script setup>
import { ref } from "vue";
import "animate.css";

defineOptions({
  name: "Contact",
});

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const formDetails = ref({ ...formInitialDetails });
const buttonText = ref("Send");
const status = ref({});
const isVisible = ref(true);

async function handleSubmit() {
  buttonText.value = "Sending...";

  const res = await fetch("https://formspree.io/f/xayrgayd", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDetails.value),
  });

  const json = await res.json();
  if (json.ok) {
    formDetails.value = { ...formInitialDetails };
    status.value = { success: true, message: "Message Sent!" };
    buttonText.value = "Sent!";
  } else {
    status.value = { success: false, message: "Message Failed!" };
    buttonText.value = "Sending Failed!";
  }
}
</script>

<template>
  <section id="connect" class="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <div v-if="isVisible" class="animate__animated animate__fadeIn contact-form-container">
            <h2>Get In Touch</h2>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="row">
                <div class="col-12 col-sm-6 form-group">
                  <input
                    id="firstName"
                    v-model="formDetails.firstName"
                    type="text"
                    name="firstName"
                    autocomplete="given-name"
                    required
                    @focus="handleFocus('firstName')"
                    @blur="handleBlur('firstName')"
                  >
                  <label :class="{ active: formDetails.firstName }" for="firstName">First Name</label>
                </div>
                <div class="col-12 col-sm-6 form-group">
                  <input
                    id="lastName"
                    v-model="formDetails.lastName"
                    type="text"
                    name="lastName"
                    autocomplete="family-name"
                    required
                    @focus="handleFocus('lastName')"
                    @blur="handleBlur('lastName')"
                  >
                  <label :class="{ active: formDetails.lastName }" for="lastName">Last Name</label>
                </div>
                <div class="col-12 col-sm-6 form-group">
                  <input
                    id="email"
                    v-model="formDetails.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    @focus="handleFocus('email')"
                    @blur="handleBlur('email')"
                  >
                  <label :class="{ active: formDetails.email }" for="email">Email Address</label>
                </div>
                <div class="col-12 col-sm-6 form-group">
                  <input
                    id="phone"
                    v-model="formDetails.phone"
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    required
                    @focus="handleFocus('phone')"
                    @blur="handleBlur('phone')"
                  >
                  <label :class="{ active: formDetails.phone }" for="phone">Phone No.</label>
                </div>
                <div class="col-12 form-group">
                  <textarea
                    id="message"
                    v-model="formDetails.message"
                    name="message"
                    rows="6"
                    required
                    @focus="handleFocus('message')"
                    @blur="handleBlur('message')"
                  />
                  <label :class="{ active: formDetails.message }" for="message">Message</label>
                </div>
                <div class="col-12 text-center">
                  <button type="submit" class="submit-button">
                    <span>{{ buttonText }}</span>
                  </button>
                </div>
                <div v-if="status.message" class="col-12 text-center">
                  <p :class="status.success ? 'success' : 'danger'">
                    {{ status.message }}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
  box-sizing: border-box;
}

.contact-form-container {
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  margin: 0 auto;
}

.contact h2 {
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
  text-align: center;
}

.contact-form .form-group {
  position: relative;
  margin-bottom: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #5cb85c;
  outline: none;
}

.contact-form label {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  transition: all 0.3s ease;
  pointer-events: none;
  opacity: 0.7;
}

.contact-form label.active,
.contact-form input:focus + label,
.contact-form textarea:focus + label {
  top: -10px;
  left: 10px;
  font-size: 0.8rem;
  opacity: 1;
  color: #333;
  background: #fff;
  padding: 0 5px;
}

.contact-form textarea + label {
  top: 10px;
  left: 10px;
  transform: none;
}

.submit-button {
  padding: 12px 30px;
  background-color: #5cb85c;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #4cae4c;
}

.success {
  color: green;
}

.danger {
  color: red;
}

@media (min-width: 576px) {
  .contact-form .row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .contact-form .row > .col-12.col-sm-6 {
    flex: 0 0 48%;
  }

  .contact-form .row > .col-12 {
    flex: 0 0 100%;
  }
}
</style>
