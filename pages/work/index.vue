<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncData } from '#app'
import ProjectCard from '~/components/ProjectCard.vue'

// Fetch projects data
const { data: projects } = await useAsyncData('home', () => queryContent('/projects').find())
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Header Section -->
    <div class="w-full xl:bg-container p-0 mt-12">
      <div class="xl:container w-[80%] mx-auto flex lg:flex-row flex-col-reverse items-center gap-10">
        <div
          class="xl:w-[60%] h-auto w-full text-[28px] leading-10"
          data-aos="fade-right"
          data-aos-id="super-duper"
        >
          <p class="welcom text-[#20A8A4] lg:text-6xl md:text-5xl text-3xl">Works 💼</p>
          <p class="lg:text-5xl md:text-4xl text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div class="xl:w-[30%] w-full flex justify-center" data-aos="fade-left" data-aos-id="super-duper">
          <NuxtImg src="/gif/giphy.gif" class="xl:w-[80%] w-[60%] xl:h-[80%] h-[60%]" type="webp"/>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid gap-4 lg:grid-cols-3 grid-cols-1 w-[80%] mx-auto">
        
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
