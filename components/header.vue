<template>
  <div class="header sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75">
  <span class="titre">CAPYTALE</span>
  <div class="menu">
    <UButton label="Mes activités" variant="ghost"></UButton>
    <UButton label="Bibliothèque" variant="ghost"></UButton>
    <UButton label="Déconnexion" variant="ghost"></UButton>
  </div>
  </div>
</template>

<script setup>

</script>



<style scoped>
.header {
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
}

.titre {
  font-size: 2rem;
  flex-grow: 1;
}

.menu * {
  margin-left: 1rem;
}
</style>
