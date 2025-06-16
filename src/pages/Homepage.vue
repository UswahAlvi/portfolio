<script setup lang="ts">
import Body from '../components/Body.vue'
import MyLatestWorks from '../components/MyLatestWorks.vue'
import MyTeckStack from '../components/MyTeckStack.vue'
import Contact from '../components/Contact.vue'
import AboutMe from '../components/AboutMe.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div>
    <Header />
    <div id="home">
      <Body />
    </div>

    <div id="work">
      <MyLatestWorks />
    </div>

    <div id="Tech Stack">
      <MyTeckStack />
    </div>
     <div id="about">
      <AboutMe />
    </div>
      <hr 
      style="border: none; height: 2px; background-color: #8a85b0; width: 80%; margin: 4rem auto;" 
    />

      <div id="contact">
        <Contact />
      </div>

  </div>
</template>
