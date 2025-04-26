<script setup lang="ts">
const { data: menuList } = await useFetch("/api/menu");
</script>
<template>
  <nav class="px-16 flex justify-between items-center h-16 relative">
    <Icon name="my-icon:nike" size="64" />
    <ul>
      <li
        v-for="item in menuList"
        :key="item.name"
        class="inline-block py-1 mx-3 cursor-pointer font-semibold hover:border-black border-b-2 border-transparent group"
      >
        {{ item.name }}
        <div
          v-if="item.dropdown.length > 0"
          class="absolute left-0 top-full w-screen px-16 bg-white p-8 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
        >
          <div
            v-for="section in item.dropdown"
            :key="section.title"
            class="min-w-52"
          >
            <h4 class="font-bold mb-4 text-sm">{{ section.title }}</h4>
            <ul class="space-y-2 text-xs">
              <li v-for="listItem in section.items" :key="listItem">
                {{ listItem }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div>
      <UInput
        icon="i-lucide-search"
        size="md"
        variant="outline"
        placeholder="Search..."
        class="rounded-full"
      />
    </div>
  </nav>
</template>
