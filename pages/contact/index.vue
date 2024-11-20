<script setup type="ts">
const name = ref('');
const email = ref('');
const message = ref('');

const sendingMessage = async()=>{
  await useFetch('/api/sendmail', {
    method: 'POST',
    body:{
      name:name.value,
      email:email.value,
      message:message.value
    }
  });
}
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Section: Contact Me -->
    <div class="w-full xl:bg-container p-0 mt-12">
      <div class="lg:container w-[80%] mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
        <div class="w-full lg:w-[60%] text-[28px] leading-10" data-aos="fade-right" data-aos-id="super-duper">
          <p class="welcom text-[#20A8A4] lg:text-6xl md:text-5xl text-3xl">Contact Me 📞</p>
          <p class="lg:text-5xl md:text-4xl text-2xl lg:text-left text-center">
            I'm always excited to connect with others, whether it's for potential projects, freelance opportunities, or simply to discuss creative ideas. If you're interested in collaborating, hiring, or learning more about my work, please don’t hesitate to reach out.
          </p>
        </div>
        <div class="w-full lg:w-[30%] flex justify-center items-center" data-aos="fade-left">
          <NuxtImg src="/gif/contact.gif" sizes="(max-width: 768px) 100vw, 400px" />
        </div>
      </div>
    </div>

    <!-- Section: Social Contact -->
    <div class="lg:container w-[80%] mx-auto mt-9 pb-7">
      <p class="text-[#20A8A4] lg:text-6xl md:text-5xl text-3xl pb-5" data-aos="fade-down">Social Contact</p>
      <div class="flex gap-4 justify-start" data-aos="fade-right" data-aos-id="super-duper">
        <NuxtLink to="https://www.linkedin.com/in/kry-longdy-5853b724b" target="_blank">
        <NuxtImg src="/icons/linkin.svg" type="webp" sizes="7px"/>
        </NuxtLink>
        <!-- <NuxtImg src="/icons/fb.svg" type="webp" sizes="7px"/> -->
        <NuxtLink to="https://tttttt.me/dy0410" target="_blank">
        <NuxtImg src="/icons/telegram.svg" type="webp" sizes="7px"/>  
      </NuxtLink>
      </div>
    </div>

    <!-- Section: Mail to Me -->
    <div class="lg:container w-[80%] mx-auto pb-10">
      <p class="text-[#20A8A4] lg:text-6xl md:text-5xl text-3xl pb-10" data-aos="fade-down">Mail to me</p>
      <div class="border border-[#20A8A4] rounded-xl flex flex-col lg:flex-row p-6 gap-6" data-aos="fade-right">
        <!-- Left Side: Form Fields -->
        <div class="w-full lg:w-1/2">
          <div class="mb-4">
            <label class="block text-[#20A8A4] font-bold mb-2" for="username">Your Name</label>
            <input
              class="shadow appearance-none border border-[#20A8A4] rounded-xl w-full h-full min-h-[50px] py-2 px-3 text-[#20A8A4] bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Your Name"
               v-model="name"
            />
          </div>
          <div class="mb-6">
            <label class="block text-[#20A8A4] font-bold mb-2" for="email">Your Email</label>
            <input
              class="shadow appearance-none border border-[#20A8A4] rounded-xl w-full h-full min-h-[50px] py-2 px-3 text-[#20A8A4] bg-transparent mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              v-model="email"
            />
          </div>
        </div>

        <!-- Right Side: Message Field -->
        <div class="w-full lg:w-1/2">
          <div class="mb-4">
            <label class="block text-[#20A8A4] font-bold mb-2" for="message">Your Message</label>
            <textarea
              class="shadow appearance-none border border-[#20A8A4] py-2 rounded-xl w-full h-full min-h-[150px] px-3 text-[#20A8A4] bg-transparent mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
               v-model="message"
            ></textarea>
          </div>
          <button class="bg-[#20A8A4] float-right px-4 py-2 rounded-lg" @click="sendingMessage">Send</button>
        </div>
      
      </div>
    </div>
    
  </div>
</template>
