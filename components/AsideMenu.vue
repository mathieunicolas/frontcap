<script setup>
const currNote = useCurNote()
const files = useFiles()
const globalNote = useGlobalNote()

const dispNote = computed(() => {
  if (currNote === "0") {
    return globalNote()
  } else {
    const file = files.value.find(o => o.id == currNote.value)
    console.log(currNote.value, file)
    return file
  }
})

const links = [{
  label: 'À corriger',
  icon: 'i-heroicons-newspaper',
  badge: 42
}, {
  label: 'Export évaluations',
  icon: 'i-heroicons-chart-bar',
}, {
  label: 'Bibliothèque',
  icon: 'i-heroicons-chart-bar',
}, {
  label: 'Accès libre',
  icon: 'i-heroicons-bolt',
}]

const headerstyle = {
  "body": {
    "base": "",
    "background": "",
    "padding": "px-4 py-5 sm:p-4"
  },
  "header": {
    "base": "",
    "background": "",
    "padding": "px-2 py-2 sm:px-6"
  },
}

const tags = useTags()
</script>

<template>
  <div>
  <UVerticalNavigation :links="links" />

  <UCard :ui="headerstyle" class="mt-8">
  <template #header>
  Étiquettes
  </template>

  <ul class="p-0">
      <li v-for="tag in tags" class="p-1">
          <UBadge :label="tag.label" :color="tag.tagColor">
          </UBadge>
      </li>
  </ul>
  </UCard>

  <UCard :ui="headerstyle" class="mt-8">
  <template #header>
  Notes
  </template>

  <UTextarea autoresize v-model="globalNote">
  
  </UTextarea>
  </UCard>
</div>
</template>
