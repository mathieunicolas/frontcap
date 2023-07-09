<template>
  <UIcon name="i-heroicons-plus-circle-solid" @click="appState.actiChoice = !appState.actiChoice" class="text-6xl bg-primary-400 cursor-pointer hover:bg-primary-500 fixed bottom-16 right-16" />
</template>

<script setup>
const appState = useAppState()

</script>



<style>

</style>
