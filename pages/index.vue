<script lang="ts" setup>
</script>
<template>
  <div class="w-full bg-container h-[500px] mt-32">
      <div class="w-[80%] mx-auto flex  lg:flex-row flex-col-reverse gap-20">
        <div
          class="lg:w-[60%] h-auto w-full text-[28px] leading-10 typewriter"
          data-aos="fade-right"
          data-aos-id="super-duper"
        >
          <p class="welcom text-[#20A8A4] text-load">Hello I'm Londy 👋</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
          <div class="lg:w-[30%] w-full flex justify-center"  data-aos="fade-in" data-aos-id="super-duper">
            <NuxtImg src="/img/avatar.png" sizes="400px" type="webp"/>
          </div>

       
      </div>
        
      </div>
    </template>
  
    <style>
    .bg-container{
      background: url('/public/img/bg.jfif');
      /* opacity: 0.2; */
      background-size: cover;
      background-repeat: no-repeat;
      padding: 50px;
      /* display: block; */
    }
    .typewriter  .text-load{
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
  }
  
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: rgb(12, 139, 67);}
  }
    </style>