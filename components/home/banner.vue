<script setup lang="ts">
const items = ["/images/banner1.png"];
</script>

<template>
  <UCarousel v-slot="{ item }" :items="items">
    <img :src="item" class="object-cover w-screen aspect-2.8/1" alt="banner" >
    <div class="flex justify-center flex-col items-center text-black pt-4">
      <p class="text-7xl font-extrabold">THE DREAM IS REAL</p>
      <p>Every goal is within reach in the Kylian Mbappé Mercurial Superfly.</p>
      <UButton class="mt-4 px-8" size="lg">Shop</UButton>
    </div>
  </UCarousel>
</template>
