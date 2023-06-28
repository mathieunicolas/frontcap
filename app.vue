<script setup>
const test = useFiles()
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
