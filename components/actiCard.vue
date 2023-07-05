<script setup>
const props = defineProps({
  activite: Object
})

const appState = useAppState()

const toast = useToast()

const star = computed(() => {
  if(props.activite.fav) {
    return {
      icon: 'i-heroicons-star-solid',
      color: ' text-yellow-400'
    }
  } else {
    return {
      icon: 'i-heroicons-star',
      color: ''
    }
  }
})

const toggleFav = () => {
  if(props.activite.fav) {
    props.activite.fav = false
    toast.add({ title: "L'élément a été retiré des favoris."})
  } else {
    props.activite.fav = true
    toast.add({ title: "L'élément a été ajouté aux favoris."})
  }
}

const goActi = (event) => {
  if(!event.target.classList.contains('starspin')) {
    appState.value.creaActiPanel = true
    appState.value.newActiPanel = false
    toast.add({ description: "Création d'une nouvelle activité", title: props.activite.fullName })
  }
}
</script>

<template>
    <div class="flex flex-row rounded-2xl m-4 cursor-pointer hover:shadow-md" @click="goActi">

      <img :src="'https://capytale2.ac-paris.fr'.concat(activite.icon.path)" class="w-16 self-start" />
      
      <div class="flex flex-col  w-full">
      <div class="flex flex-row justify-between">
      <div class="text-lg font-semibold ml-2">{{ activite.fullName }} <sup v-if="activite.beta" class="text-red-500">beta</sup></div>
      <UIcon @click="toggleFav()" :name="star.icon"  class="starspin mx-2 text-lg cursor-pointer" :class="star.color"></UIcon>
      </div>
      <div class="mt-1 ml-2 pb-2 pr-2 text-sm">{{ activite.description }}</div>
      </div>
    </div>

</template>



<style>
.starspin:hover {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) 1;

  @keyframes ping {
    50% { transform: scale(2); }
    100% { transform: scale(1); }
  }
}
</style>
