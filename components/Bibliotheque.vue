
<script setup>
import { orderBy } from 'lodash-es'

const data = useBibli()
const page = ref(1)
const pageCount = ref(10)

const clipboard = useCopyToClipboard({ timeout: 2000})

const sortingRows = (column, direction) => {
  return data.value.toSorted((a,b) => {
    if(direction === 'asc'){
      return (a[column] - b[column])
    } else if(direction === 'desc') {
      return (b[column] - a[column])
    }}).slice((page.value - 1)*pageCount.value, (page.value)*pageCount.value)
}

const pagiData = computed(() => {
  return data.value.slice((page.value - 1)*pageCount.value, (page.value)*pageCount.value)
})
const columns = [{
  key: 'type'
  }, {
  label: 'Titre',
  key: 'title'
  }, {
    label: '',
    key: 'b_url'
  }, {
    label: 'Ens.',
    key: 'd'
  }, {
    label: 'Like',
    key: 'nb_star'
  }, {
    label: 'Copie',
    key: 'nb_clone'
  }, {
    label: 'Auteur',
    key: 'g'
  },{
    label: 'modifié',
    key: 'date',
    sortable: true,
    direction: 'desc'
  }
  ]

  const starf = async (url) => {
    const res = await $fetch(url)
    console.log(res)

    const dataDate = (plop) => {
        plop.forEach(el => {
            if(el.date.timestamp) {
                el.date = el.date.timestamp
            }
        })
        return plop
    }

    const exec = async () => {
        if(process.env.NODE_ENV === 'development') {
            useFetch('https://capytaledev.ac-paris.fr/web/export?_=1688922855351', { headers }).then(rq => {
                data.value = dataDate(rq.data.value)
            })
        } else {
            const req = await $fetch('https://capytaledev.ac-paris.fr/web/export?_=1688922855351')
            data.value = dataDate(req)
        }
    }
    
    exec()

  }
</script>

<template>
  <UTable :rows="pagiData" :columns="columns" :ui="{ td: { base: 'whitespace-normal break-all glo6 glo5', padding: 'px-3 py-4 '}}" :sorting-rows="sortingRows">
    <template #type-data="{ row }">
      <img :src="'https://capytaledev.ac-paris.fr'+row.icon" class="w-16 max-w-none" />
    </template>

    <template #c-data="{ row }">
    <div v-html="row.c"></div>
    </template>

    <template #title-data="{ row }">
    <UButton variant="link" :to="'https://capytaledev.ac-paris.fr'+row.player_url">{{ row.title }}</UButton>
    <div class="p-1" v-html="row.c"></div>
    </template>

    <template #b_url-data="{ row }">
    <UTooltip text="Copier le lien de partage direct entre enseignants.">
      <UIcon name="i-heroicons-link" class="cursor-pointer" @click="clipboard.copy(row.b_url, { title: 'Copié dans le presse-papier !'})" />
    </UTooltip>
    </template>

    <template #g-data="{ row }">
      <span class="whitespace-nowrap">
        {{ row.g }}  
      </span>
    </template>

    <template #nb_star-data="{ row }">
    <div>
        <UButton label="O" @click="starf(row.url_star)" />
        <UButton :icon="row.star_status === 'far' ? 'i-heroicons-star' : 'i-heroicons-star-solid'" :label="row.nb_star.toString()" variant="ghost" :to="row.url_star" size="xl" trailing />
      </div>
    </template>

    <template #nb_clone-data="{ row }">
        <UButton icon="i-heroicons-document-duplicate" :label="row.nb_clone.toString()" variant="ghost" :to="row.url_clone" size="xl" trailing />
    </template>

    <template #date-data="{ row }">
      {{ (new Date(row.date*1000)).toLocaleString("fr-FR", {year: "numeric", month: "numeric", day: "numeric"}) }}
    </template>
  </UTable>

  <UPagination v-model="page" :page-count="pageCount" :total="data.length" class="mt-8 mb-16 justify-center" />

</template>

<style scoped>
</style>
