<script setup>
const inputstyle = {
  "base": "relative inline w-auto disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
}
const appState = useAppState()
const typeActivites = useActivites()

const cats = [
    {
        label: 'Tout',
        value: 'all'
    },
    {
        label: 'Favoris',
        value: 'fav'
    },
    {
        label: 'École',
        value: 'ecole'
    },
    {
        label: 'Collège',
        value: 'college'
    },
    {
        label: 'Lycée',
        value: 'lycee'
    },
    {
        label: 'Prépa',
        value: 'prepa'
    },
]

const catChoice = ref('all')
const cosmos = ref(appState.value.newActiPanel ? 'px-4 py-4 sm:px-6' : 'p-0')

const chosenCats = computed(() => {
  console.log(catChoice.value)
  return typeActivites.value.filter(el => Object.keys(el.category).includes(catChoice.value) || (catChoice.value == 'fav' && el.fav))
})

const openPanel = (event) => {
  appState.value.newActiPanel = !appState.value.newActiPanel
}

watch(typeActivites, () => {
  console.log(typeActivites)
})

const itemRefs = ref([])
</script>

<template>
    <UModal v-model="appState.actiChoice" :ui="{ width: 'sm:max-w-3xl' }">
    <UCard :ui="{ body: { padding: cosmos }}">
      <template #header>
      <div class="flex flex-row justify-between">
          <div class="text-lg font-bold">
          <UIcon @click="openPanel" :class="appState.newActiPanel?'rotate-180':''" class="transition-all" name="i-heroicons-arrow-down"></UIcon>
          Créer une nouvelle activité</div>
          <USelect v-model="catChoice" :options="cats" :ui="inputstyle"></USelect>
      </div>
      </template>
      <div class="grid grid-cols-2">
      <ActiCard class="" v-for="item in chosenCats" ref="test" :key="item.fullName" :activite="item"></ActiCard>
      </div>
    </UCard>
    </UModal>
</template>

<style>
.v-enter-active {
  transition: all 0.75s ease-out;
  max-height: 1000px;
}

.v-leave-active {
  transition: all 0.4s ease-out;
  max-height: 1000px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>