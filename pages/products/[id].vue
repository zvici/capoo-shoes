<template>
    <div>
        <h1>Product ID: {{ route.params.id }}</h1>
        <nuxt-child />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

const route = useRoute()

// When accessing /products/1, route.params.id will be 1
console.log(route.params.id)
</script>