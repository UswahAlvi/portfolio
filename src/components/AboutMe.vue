<template>
  <div class="about-wrapper">
    <div class="about-card">
      <h2 class="about-title">About Me</h2>
      <div class="about-content">
        <p>
          I'm a <span class="highlight">full-stack web developer</span> who loves turning ideas into clean, functional, and beautiful websites.
          I work mostly with the <span class="highlight">MERN stack</span>, along with <span class="highlight">Vue</span> and <span class="highlight">Supabase</span>.
        </p>
        <p>
          When I’m not coding, I’m probably curled up with a book, crocheting something cozy, or getting way too invested in a cricket match.
        </p>
        <p>
          Whether it’s building from scratch or bringing a Figma design to life, I love crafting great user experiences and writing code that feels just right.
        </p>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts"></script>

<style scoped>
.about-wrapper {
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-card {
  background-color: #f5f5f5;
  padding: 50px 40px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  text-align: center;
  animation: fadeIn 0.6s ease;
}

.about-title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 30px;
}

.about-content {
  font-size: 18px;
  line-height: 1.8;
}

.about-content p {
  margin-bottom: 20px;
}

.highlight {
  font-weight: 600;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
