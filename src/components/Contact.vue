<template>
  <section class="contact-wrapper">
    <div class="contact-left">
      <h2 class="contact-title">Let's work together</h2>
      <p class="contact-description">
        Have a project in mind or need help with web development?
        I'm open to freelance, collaborations, or full-time opportunities.
      </p>
      <div class="contact-icons">
        <a href="https://github.com/uswahalvi" target="_blank" rel="noopener noreferrer">
          <img src="/git.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/uswahalvi" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="input-group">
        <input 
          v-model="name" 
          type="text" 
          placeholder="Name" 
          :class="{ 'invalid': errors.name }"
          @input="clearError('name')"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>
      
      <div class="input-group">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Email" 
          :class="{ 'invalid': errors.email }"
          @input="clearError('email')"
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>
      
      <div class="input-group">
        <textarea 
          v-model="message" 
          placeholder="Type your message here" 
          rows="6"
          :class="{ 'invalid': errors.message }"
          @input="clearError('message')"
        ></textarea>
        <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
      </div>
      
      <button type="submit" :disabled="loading">
        <span v-if="loading" class="spinner"></span>
        <span v-else>Submit</span>
      </button>

      <p v-if="submitMessage" :class="submitStatus">{{ submitMessage }}</p>
    </form>
  </section>
 
</template>

<script setup>
import { ref } from 'vue'
import { sendContactMessage } from '../api/contactServiceApi'
import { isValidEmail } from '../utils/validators'
import { useToast } from '../composables/useToast'
const { show, message: toastMessage, type: toastType, showToast } = useToast()


const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const errors = ref({
  name: '',
  email: '',
  message: ''
})
const submitMessage = ref('')
const submitStatus = ref('') // 'success' or 'error'


const clearError = (field) => {
  if (errors.value[field]) {
    errors.value[field] = ''
  }
}

const handleSubmit = async () => {
  // Reset errors
  errors.value = {
    name: '',
    email: '',
    message: ''
  }

  let isValid = true

  if (!name.value) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  if (!email.value) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!isValidEmail(email.value)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!message.value) {
    errors.value.message = 'Message is required'
    isValid = false
  }

  if (!isValid) {
    submitMessage.value = 'Please fix the errors in the form'
    submitStatus.value = 'error'
    setTimeout(() => {
      submitMessage.value = ''
      submitStatus.value = ''
    }, 3000) // clears after 3 seconds

    return
  }

  loading.value = true
try {
  await sendContactMessage({
    name: name.value,
    email: email.value,
    message: message.value
  })

  name.value = ''
  email.value = ''
  message.value = ''
  submitMessage.value = 'Message sent successfully!'
  submitStatus.value = 'success'
} catch (err) {
  submitMessage.value = 'Failed to send message.'
  submitStatus.value = 'error'
} finally {
  loading.value = false
  setTimeout(() => {
    submitMessage.value = ''
    submitStatus.value = ''
  }, 3000)
}

}
</script>

<style>
.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 20px;
}

@media (min-width: 1024px) {
  .contact-wrapper {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
  }
}

.contact-left {
  max-width: 450px;
}

.contact-title {
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 16px;
}

.contact-description {
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.contact-icons {
  display: flex;
  gap: 16px;
}

.contact-icons img {
  width: 40px;
  height: 40px;
  border-radius: 10px; 
  object-fit: cover;   
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.contact-icons img:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.contact-form {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 20px;
  transition: border-color 0.3s ease;
}

.contact-form input.invalid,
.contact-form textarea.invalid {
  border-color: #dc3545;
  background-color: #fff5f5;
}

.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-bottom: 8px;
}

.contact-form button {
  width: 150px;
  padding: 14px;
  background-color: #222;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #444;
}

.success {
  color: #4CAF50;
  margin-top: 8px;
  font-weight: 500;
}

.error {
  color: #F44336;
  margin-top: 8px;
  font-weight: 500;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid #fff;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


</style>