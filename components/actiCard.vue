<script setup>
const props = defineProps({
  typeActi: Object
})
</script>

<template>
  <div class="flex flex-row">
  <img :src="typeActi.icon.path" class="w-32" />
  <div class="flex flex-col">
  
  <div class="text-lg font-semibold pl-4">{{ typeActi.fullName }} <sup v-if="typeActi.beta" class="text-red-500">beta</sup></div>
  </div>
  </div>
</template>



<style>

</style>
