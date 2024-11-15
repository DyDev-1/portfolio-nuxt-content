<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncData } from '#app'
import ProjectCard from '~/components/ProjectCard.vue'

// Fetch projects data
const { data: projects } = await useAsyncData('home', () => queryContent('/projects').find())
</script>

<template>
  <div>
    <!-- Header Section -->
    <div class="w-full bg-container h-[500px] mt-32">
      <div class="lg:container w-[80%] mx-auto flex lg:flex-row flex-col-reverse">
        <div
          class="lg:w-[60%] h-auto w-full text-[28px] leading-10"
          data-aos="fade-right"
          data-aos-id="super-duper"
        >
          <p class="welcom text-[#20A8A4]">Works 💼</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div class="lg:w-[30%] w-full" data-aos="fade-left" data-aos-id="super-duper">
          <NuxtImg src="/gif/giphy.gif" class="lg:w-[100%] w-[100%]" />
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid gap-4 lg:grid-cols-3 grid-cols-1 w-[80%] mx-auto mt-8">
        <ProjectCard
          v-for="project in projects"
          :key="project._id"
          :item="project"
          data-aos="fade-left"
          data-aos-id="super-duper"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
