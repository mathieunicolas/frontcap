<script setup>
const props = defineProps(['row'])
const newtitle = ref(props.row.title)
const newstatus = ref(props.row.status_shared)

const inputstyle = {
  "base": "relative inline w-auto disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
}

const imgsrc = computed(() => {
  return `~/assets/timerange0${'newstatus'}.svg`
})

const status_shared = [
  {
    name: 'norestrict',
    value: '0',
    label: 'Sans restriction'
  },
  {
    name: 'auto_rendu',
    value: '1',
    label: 'Rendu automatique : hors de la période, les élèves peuvent voir leur copie mais pas la modifier ni en créer'
  },
  {
    name: 'auto_lock',
    value: '2',
    label: 'Verrouillage automatique : hors de la période, les élèves ne peuvent plus voir leur copie ni les modifier ni en créer'
  }
]
</script>

<template>
  <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header>
      Modifier l'activité
    </template>
    <UFormGroup name="newtitle" label="Changer le titre">
      <UInput v-model="newtitle"></UInput>
    </UFormGroup>

    <UFormGroup name="acces" label="Accès à l'activité" class="py-8">
      <URadio v-for="status of status_shared" :key="status.value" v-model="newstatus" v-bind="status"></URadio>
    </UFormGroup>
    <img src="~/assets/timerange01.svg" v-show="newstatus==='0'" />
    <img src="~/assets/timerange02.svg" v-show="newstatus==='1'" />
    <img src="~/assets/timerange03.svg" v-show="newstatus==='2'" />

    <UContainer>
      <UContainer :ui="{ 'base': 'py-2 flex-row justify-between' }">
      <UInput type="date" :ui="inputstyle" class="inline w-auto"></UInput>
      <UInput type="time" :ui="inputstyle" class="inline w-auto"></UInput>
      </UContainer>

    <UFormGroup name="dates" label="Date/Heure début" class="py-2">
      <UInput type="date"></UInput>
      <UInput type="time"></UInput>
    </UFormGroup>
    </UContainer> 
    <UButton label="update" @click="updateTitle(props.row, newtitle)"></UButton>

    <template #footer>
    <p>Nouveau titre : {{ newtitle }}</p>
    <p>Nouveau statut : {{ newstatus }}</p>
    </template>
  </UCard>
</template>
