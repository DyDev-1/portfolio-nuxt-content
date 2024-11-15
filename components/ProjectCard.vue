<template>
    <div class="bg-[#146958] rounded-lg w-[100%]">
       <NuxtImg :src="item.img" class="w-[100%]"/>
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