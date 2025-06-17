<script setup lang="ts">
const props = defineProps<{
  scrollToSection: (section: string) => void
  isMenuOpen: boolean
}>()

const emit = defineEmits(['update:isMenuOpen'])

const toggleMenu = () => {
  emit('update:isMenuOpen', !props.isMenuOpen)
}

const handleClick = (section: string) => {
  props.scrollToSection(section)
  emit('update:isMenuOpen', false)
}
</script>

<template>
  <div class="navbar">
    <div class="brand" @click="() => handleClick('home')" style="cursor: pointer">Uswah Alvi</div>

    <button class="menu-button" @click="toggleMenu">☰</button>

    <div class="desktop-nav">
      <a href="#" class="nav-link" @click.prevent="() => handleClick('work')">Work</a>
      <a href="#" class="nav-link" @click.prevent="() => handleClick('techStack')">Tech Stack</a>
      <a href="#" class="nav-link" @click.prevent="() => handleClick('about')">About</a>
      <a href="#" class="nav-link" @click.prevent="() => handleClick('contact')">Contact</a>
    </div>

    <div v-show="isMenuOpen" class="mobile-nav">
      <a href="#" class="nav-link" @click.prevent="() => handleClick('work')">Work</a>
      <a href="#" class="nav-link" @click.prevent="() => handleClick('techStack')">Tech Stack</a>
      <a href="#" class="nav-link" @click.prevent="() => handleClick('about')">About</a>
      <a href="#" class="nav-link" @click.prevent="() => handleClick('contact')">Contact</a>
    </div>
  </div>
</template>


<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #b2aed14a; /* Your exact website color */
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px); /* Frosted glass effect */
  border-bottom: 1px solid rgba(178, 174, 209, 0.3);
}

.brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #5a5568;
}

.menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #5a5568;
  transition: transform 0.3s ease;
}

.menu-button:hover {
  transform: rotate(90deg);
}

.desktop-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #5a5568;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
}

.nav-link:hover {
  color: #8a85b0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #8a85b0;
  transition: all 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #b2aed1e6; /* More opaque version of your color */
  padding: 1rem 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #b2aed14a; /* Your exact website color */
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px); /* Frosted glass effect */
  border-bottom: 1px solid rgba(178, 174, 209, 0.3);
}
  .menu-button {
    display: block;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .mobile-nav {
    display: flex;
    gap: 0.5rem;
  }
  
  .mobile-nav .nav-link {
    padding: 1rem;
    margin: 0.25rem 0;
    border-left: 3px solid transparent;
    transition: all 0.3s ease;
  }
  
  .mobile-nav .nav-link:hover {
    border-left: 3px solid #8a85b0;
    background: rgba(255,255,255,0.1);
    transform: translateX(5px);
  }
}
</style>