<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const profiles = ref([{
  label: 'Enseignant',
  value: 'prof'
}, {
  label: 'Élève',
  value: 'eleve'
}])
const appState = useAppState()
</script>

<template>
  <div class="header sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75">
    <span class="titre">CAPYTALE</span>
    <div class="menu">
      <USelect v-model="appState.profile" :options="profiles"></USelect>
      <UButton :icon="appState.actiEleves ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" label="Activités élèves" variant="ghost" @click="appState.actiEleves = !appState.actiEleves"></UButton>
      <UButton :icon="appState.aside ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" label="menu" variant="ghost" @click="appState.aside = !appState.aside"></UButton>
      <UButton :icon="appState.dispActi ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" label="Mes activités" variant="ghost" @click="appState.dispActi = !appState.dispActi"></UButton>
      <UButton :icon="appState.actiChoice ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" label="ActiChoice" variant="ghost" @click="appState.actiChoice = !appState.actiChoice"></UButton>
      <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>
  </div>
</template>

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

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
