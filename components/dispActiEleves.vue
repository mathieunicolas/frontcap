<script setup>
const actiEleves = useActiEleves()
actiEleves.value.forEach(el => {
  el['Évaluation'] = parseInt(el['Évaluation'])
})

const columns = [{
  key: 'Nom',
  label: 'Nom',
  sortable: true
}, {
  key: 'Classe',
  label: 'Classe',
  sortable: true
}, {
  key: 'Mode / État',
  label: 'Mode / État',
  sortable: true
}, {
  key: 'Appréciation',
  label: 'Appréciation',
  sortable: true
}, {
  key: 'Évaluation',
  label: 'Évaluation',
  sortable: true
}
]

const actiNotes = computed(() => {
  return actiEleves.value.map(el => {
    return {
    classe: el.Classe,
    note: el['Évaluation']
  }})
  })

const classes = computed(() => {
  const temp = actiEleves.value.map(el => {
    return el.Classe
  })
  return temp.filter((value, index, array) => array.indexOf(value) === index);
})

const selecClasse = (classe) => {
  if(selectedClasse.value === classe) {
    selectedClasse.value = null
  } else {
    selectedClasse.value = classe
  }
}
const selectedClasse = ref(null)

const fileteredRows = computed(() => {
  return actiEleves.value.filter(el => el.Classe === selectedClasse.value || selectedClasse.value === null)
})

const dataNotes = ref([])

const moyenne = computed(() => {
  dataNotes.value = []
  const total = ref(0)
  const count = ref(0)
  fileteredRows.value.forEach(a => {
    if(!isNaN(parseInt(a.Évaluation))) {
      dataNotes.value.push(a.Évaluation)
      total.value += parseInt(a.Évaluation)
      count.value += 1
    }
  })
  return Math.round((total.value / count.value)*100)/100
})
</script>


<template>
  <div>
  <div class="grid grid-cols-4 border-b mb-4 pb-8">
  <UCard>
  <template #header>
  Statistiques : {{ dataNotes.length }}
  </template>

  <div class="grid grid-cols-2">
  <ul>
  <li v-for="classe in classes" :key="classe">
  <UButton :label="classe" variant="ghost" @click="selecClasse(classe)"></UButton></li>
  </ul>

  <div>
  <p>Moyenne</p>
  <p>{{ moyenne }}</p>
  </div>

  </div>
  </UCard>
  <UContainer class="col-span-3">
    <Test :rows="dataNotes"></Test>  
  </UContainer>
  </div>
  <UTable :columns="columns" :rows="fileteredRows" :ui="{ td: { base: 'whitespace-wrap'}}">
  <template #Classe-data="{ row }">
  <span>{{ row.Classe.replace(' ', '&nbsp;') }}</span>
  </template>
  
  </UTable>
  </div>
</template>


<style>

</style>
