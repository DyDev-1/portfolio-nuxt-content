<script lang="ts" setup>
// import Typewriter from '/vue-typewriter';
</script>
<template>
  <div class="w-full bg-container mt-12">
    <div class="mx-auto flex xl:flex-row flex-col-reverse gap-20">
      <!-- Text Content -->
      <div
        class="xl:w-[60%] w-full align-middle h-auto  lg:text-[28px] text-[2rem] leading-10 typewriter"
        data-aos="fade-right"
        data-aos-id="super-duper"
      >

        <p class="welcom text-[#20A8A4]  line-1 anim-typewriter lg:text-6xl md:text-5xl text-3xl text-right">
          Hello I'm Londy 👋</p>
          <p class="lg:text-5xl md:text-4xl text-2xl">
            Hi there! Welcome to this website—I’m happy to have you here. Take a moment to explore my portfolio and see the projects I’ve worked on. I’m excited to share my journey and skills with you. Let’s create something amazing together!
        </p>
      </div>
      <!-- Image Section -->
      <div
        class="xl:w-[30%] w-full flex justify-center"
        data-aos="fade-in"
        data-aos-id="super-duper"
      >
        <NuxtImg src="/img/avatar.png" sizes="200px" type="webp" />
      </div>
    </div>
  </div>
</template>
<style>
/* Background Container */
.bg-container {
  background: url('/public/img/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px;
}

.line-1{
    top: 50%;  
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 84%;}
} 
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>