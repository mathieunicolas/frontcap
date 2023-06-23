<script setup>
import NouvelleActi from '~/components/nouvelleActi.vue';

    const vfiles = useFiles()
</script>


<template>
  <AsideMenu class="hidden pb-8 overflow-y-auto lg:block lg:self-start lg:top-16 lg:max-h-[calc(100vh-64px)] lg:sticky lg:pr-8 lg:pl-[2px] lg:col-span-2">
  </AsideMenu>
    <div class="lg:col-span-8">
      <NouvelleActi></NouvelleActi>
      <DispActi></DispActi>
    </div>
</template>