<script lang="ts" setup>
const desktopList = [
  { name: "Find a Store", to: "/" },
  { name: "Help", to: "/" },
  { name: "Join Us", to: "/sign-up" },
  { name: "Sign In", to: "/sign-in" },
];
</script>
<template>
  <div class="h-9 bg-gray-100 px-16 flex justify-between items-center">
    <Icon name="my-icon:jordan" size="24" />
    <ul>
      <li
        v-for="(item, index) in desktopList"
        :key="item.name"
        :class="[
          'inline-block text-xs font-semibold px-2 hover:text-gray-800 cursor-pointer  border-black',
          index === desktopList.length - 1 ? '' : 'border-r',
        ]"
      >
        <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
