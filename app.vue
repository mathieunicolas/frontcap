<script setup>
const test = useFiles()
const req = await useFetch('https://api.npoint.io/275683f062ca07a29b1c')
const data = req.data
</script>

<template>
  <div>
      <Header></Header>
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid lg:grid-cols-10 lg:gap-8">
        <NuxtPage />
      </div>
      <UNotifications />
  </div>
</template>
