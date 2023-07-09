<script setup>
const appState = useAppState()

const gridClass = computed(() => {
  if(appState.value.aside) {
    return 'lg:col-span-8'
  } else {
    return 'lg:col-span-full'
  }
})
</script>


<template>
  <AsideMenu v-if="appState.aside" class="hidden pb-8 overflow-y-auto lg:block lg:self-start lg:top-16 lg:max-h-[calc(100vh-64px)] lg:sticky lg:pr-8 lg:pl-[2px] lg:col-span-2">
  </AsideMenu>
    <div :class="gridClass">
      <ActiChoice v-if="appState.actiChoice"></ActiChoice>
      <ActiCrea></ActiCrea>
      <DispActi v-if="appState.dispActi"></DispActi>
      <DispActiEleves v-if="appState.actiEleves"></DispActiEleves>
      <Bibliotheque v-if="appState.bibli"></Bibliotheque>
      <FAB />
    </div>
</template>