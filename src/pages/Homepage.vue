<script setup lang="ts">
import { ref } from 'vue'
import Body from '../components/Body.vue'
import MyLatestWorks from '../components/MyLatestWorks.vue'
import MyTeckStack from '../components/MyTeckStack.vue'
import Contact from '../components/Contact.vue'
import AboutMe from '../components/AboutMe.vue'
import Header from '../components/Header.vue'

const homeRef = ref<HTMLElement | null>(null)
const workRef = ref<HTMLElement | null>(null)
const techStackRef = ref<HTMLElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)

const isMenuOpen = ref(false)

const scrollToSection = (section: string) => {
  const refs: Record<string, HTMLElement | null> = {
    home: homeRef.value,
    work: workRef.value,
    techStack: techStackRef.value,
    about: aboutRef.value,
    contact: contactRef.value,
  }

  const el = refs[section]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    isMenuOpen.value = false
  }
}
</script>

<template>
  <div>
    <Header :scrollToSection="scrollToSection" v-model:isMenuOpen="isMenuOpen" />

    <div ref="homeRef"><Body /></div>
    <div ref="workRef"><MyLatestWorks /></div>
    <div ref="techStackRef"><MyTeckStack /></div>
    <div ref="aboutRef"><AboutMe /></div>

    <hr style="border: none; height: 2px; background-color: #8a85b0; width: 80%; margin: 4rem auto;" />

    <div ref="contactRef"><Contact /></div>
  </div>
</template>
