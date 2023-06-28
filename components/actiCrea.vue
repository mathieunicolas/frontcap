<script setup>
const appState = useAppState()
</script>

<template>
  <UModal v-model="appState.creaActiPanel">
  <UCard>
    <template #header><span class="text-lg font-semibold">Création d'une nouvelle activit</span>é</template>

    <UInput placeholder="Titre de l'activité"></UInput>
  </UCard>
  </UModal>
</template>




<style>

</style>
