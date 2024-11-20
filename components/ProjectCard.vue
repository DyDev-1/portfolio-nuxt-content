<template>
    <div class="bg-[#20A8A4] rounded-lg w-[100%]">
       <NuxtImg :src="item.img" class="w-[100%] ease-in duration-300 hover:scale-95"/>
      <div class="p-3 text-center">
        <p>{{item.description}}</p>
      </div>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps(['item'])
</script>

<style scoped>

</style>