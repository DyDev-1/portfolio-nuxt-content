<script setup lang="ts">

// Progress data
const progressData = ref([
  { title: 'Vue.js', description: 'Progressive JavaScript Framework', icon: 'logos:vue', color: '#41B883', percentage: 70 },
  { title: 'Nuxt.js', description: 'Vue Framework for Universal Apps', icon: 'logos:nuxt-icon', color: '#00DC82', percentage: 85 },
  { title: 'Laravel', description: 'PHP Web Application Framework', icon: 'logos:laravel', color: '#FF2D20', percentage: 75 },
  { title: 'Node.js', description: 'JavaScript Runtime', icon: 'logos:nodejs-icon-alt', color: '#58A645', percentage: 70 },
  { title: 'PHP', description: 'Popular Backend Language', icon: 'logos:php', color: '#6181B6', percentage: 70 },
  { title: 'MySQL', description: 'Relational Database Management', icon: 'logos:mysql', color: '#F29111', percentage: 70 },
  { title: 'JavaScript', description: 'Dynamic Programming Language', icon: 'logos:javascript', color: '#F0DB4F', percentage: 80 },
  { title: 'Tailwind CSS', description: 'Utility-first CSS Framework', icon: 'logos:tailwindcss-icon', color: '#38B2AC', percentage: 80 },
]);
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Header Section -->
    <div class="w-full xl:bg-container p-0 mt-12">
      <div class="xl:container w-[80%] mx-auto flex lg:flex-row flex-col-reverse items-center">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="h-auto w-full text-[28px] leading-10 "
        >
          <p class="welcom text-[#20A8A4] lg:text-6xl md:text-5xl text-3xl">
            About Me <Icon name="fluent-emoji-flat:technologist-medium" />
          </p>
          <p class="lg:text-5xl md:text-3xl text-2xl">
            Hi, I’m Longdy, a passionate software developer and a graduate of Setec Institute. With experience at two reputable companies, I specialize in Vue.js, Nuxt.js, and Laravel for web development. Recently, I’ve been exploring mobile development with Flutter and backend technologies like Node.js and Express.js, completing a few small projects. Currently, I’m learning NestJS to deepen my backend expertise. I’m driven by a love for problem-solving, continuous learning, and creating seamless user experiences.
          </p>
        </div>
      </div>

      <!-- Project Cards Grid -->

   
      <div class="xl:container w-full grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 mb-20 overflow-hidden">
        <p class="xl:container w-[80%] text-[#20A8A4] lg:text-6xl md:text-5xl text-3xl mt-5">
            Technology <Icon name="flat-color-icons:reddit" />
          </p>
        <template v-for="tech in progressData" :key="tech.title">
          <div data-aos="fade-up" data-aos-duration="2000" class="p-4 bg-white shadow rounded w-full">
            <h3 :style="{ color: tech.color }" class="text-lg font-semibold text-center">
              {{ tech.title }} <Icon :name="tech.icon" />
            </h3>
            <p class="text-gray-500 text-center mb-4">{{ tech.description }}</p>
            <div data-aos="fade-right" class="relative h-4 bg-gray-200 rounded overflow-x-hidden">
              <!-- Set the background color of the progress bar using inline style -->
              <div :style="`width: ${tech.percentage}%; background-color: ${tech.color};`" class="absolute top-0 left-0 h-full rounded"></div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
