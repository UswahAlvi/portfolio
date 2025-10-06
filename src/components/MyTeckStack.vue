<template>
  <div class="wrapper">
    <div class="title">My Tech Stack</div>
    <div class="tech-grid">
      <div v-for="tech in techStack" :key="tech.name" class="tech-card">
        <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
        <div class="tech-label">{{ tech.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import htmlIcon from '/html.png'
import cssIcon from '/css.png'
import jsIcon from '/js.png'
import reactIcon from '/react.png'
import nodeIcon from '/node.png'
import expressIcon from '/express.png'
import tailwindIcon from '/tailwind.png'
import bootstrapIcon from '/bootstrap.PNG'
import DjangoIcon from '/django.png'
import NestIcon from '/nest.png'
import PythonIcon from '/python.png'

const techStack = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'React js', icon: reactIcon },
  { name: 'Node js', icon: nodeIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'Django', icon: DjangoIcon},
  { name: 'Nest js', icon: NestIcon},

]
</script>

<style scoped>
.wrapper {
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 40px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1000px;
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
}

.tech-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 10px;
}

.tech-label {
  font-size: 16px;
  font-weight: 500;
}
</style>
