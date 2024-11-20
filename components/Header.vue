<template>
  <div class="w-[80%] mx-auto flex justify-between pt-10 text-[28px]">
    <!-- Logo Section -->
     <NuxtLink to="/">
    <div class=" items-center relative leading-7">
      <p>// Longdy</p>
      <p class="text-[#20A8A4] ml-4">web_dev</p>
    </div>
  </NuxtLink>
    <!-- Navigation Links -->
 <!-- Icon Buttons -->
    <div class="flex items-center">
      <Icon
        name="material-symbols:menu"
        class="ml-5 lg:hidden"
        @click="toggleMenu"
      />
      <Icon
        :name="dark ? 'meteocons:moon-first-quarter' : 'meteocons:sun-hot'"
        class="ml-5 lg:hidden cursor-pointer text-4xl"
        @click="changeMode"
      />
    </div>
    <ul
      class="menu lg:flex lg:relative absolute lg:mt-0 mt-20 left-auto p-3 flex items-center lg:w-auto w-[80%] lg:bg-transparent bg-slate-900 flex-col lg:flex-row  z-10 gap-4 transition-transform duration-300 ease-in-out"
      :class="[isOpen ? 'flip-in' : 'flip-out']"
    >
      <li class="hover:text-[#20A8A4]">
        <NuxtLink to="/" @click="handleMenuClick">Home</NuxtLink>
      </li>
      <li class="hover:text-[#20A8A4]">
        <NuxtLink to="/about" @click="handleMenuClick">About</NuxtLink>
      </li>
      <li class="hover:text-[#20A8A4]">
        <NuxtLink to="/work" @click="handleMenuClick">Work</NuxtLink>
      </li>
      <li class="hover:text-[#20A8A4]">
        <NuxtLink to="/posts" @click="handleMenuClick">Post</NuxtLink>
      </li>
      <li class="hover:text-[#20A8A4]">
        <NuxtLink to="/contact" @click="handleMenuClick">Contact</NuxtLink>
      </li>
      <li>
        <Icon
        :name="dark ? 'meteocons:moon-first-quarter' : 'meteocons:sunrise-fill'"
        class="ml-5 lg:block hidden cursor-pointer text-4xl"
        @click="changeMode"
      />
      </li>
    </ul>

   
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dark = ref(true)
const isOpen = ref(false)
const isFullScreen = ref(false)
const colorMode = useColorMode()
const changeMode = () => {
  dark.value = !dark.value
  dark.value ? colorMode.preference = 'dark' : colorMode.preference = 'light'
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Function to handle screen resize
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isOpen.value = true // Close the menu for large screens
    isFullScreen.value = true
  }
  else{
    isOpen.value = false
    isFullScreen.value =false
  }
}
const handleMenuClick = () =>{
    isFullScreen.value ?  isOpen.value = true :  isOpen.value = false 
}

// Add event listener on mount and cleanup on unmount
onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize() // Check the screen width on initial load
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #000000;
  color: #ebf4f1;
}
.light-mode .bg-container {
  color:  white;
}
.light-mode .menu {
  background: #fff;
  color:  black;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
/* Define flip animations */
@keyframes flipIn {
  from {
    transform: rotateX(90deg);
    opacity: 0;
  }
  to {
    transform: rotateX(0);
    opacity: 1;
  }
}

@keyframes flipOut {
  from {
    transform: rotateX(0);
    opacity: 1;
  }
  to {
    transform: rotateX(90deg);
    opacity: 0;
  }
}

/* Apply animations */
.flip-in {
  animation: flipIn 0.5s forwards ease-in-out;
}

.flip-out {
  animation: flipOut 0.5s forwards ease-in-out;
}
</style>
