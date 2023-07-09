
<script setup>
const data = useBibli()
const page = ref(1)
const pageCount = ref(10)

const clipboard = useCopyToClipboard({ timeout: 2000})

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
    label: 'Auteur',
    key: 'g'
  }
  ]
</script>

<template>
  bibli
  <UTable :rows="pagiData" :columns="columns" :ui="{ td: { base: 'whitespace-normal break-all'}}">
    <template #type-data="{ row }">
      <img :src="'https://capytaledev.ac-paris.fr/'+row.icon" class="w-16 max-w-none" />
    </template>

    <template #c-data="{ row }">
    <div v-html="row.c"></div>
    </template>

    <template #title-data="{ row }">
    <UButton variant="link" :to="row.player_url">{{ row.title }}</UButton>
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
      {{ row.nb_star }}
      <a :href="row.url_star">
        <UIcon name="i-heroicons-star" />
      </a>
    </template>
  </UTable>

  <UPagination v-model="page" :page-count="pageCount" :total="data.length" class="mt-8 mb-16 justify-center" />

</template>

<style>

</style>
