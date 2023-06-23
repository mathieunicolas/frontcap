<script setup>
const inputstyle = {
  "base": "relative inline w-auto disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
}

const Data = [
  {
    fullName: "Poha",
    description:  "Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country.",
    category: ['all', 'ecole', 'college', 'lycee'],
    icon: {
      path: "https://c.ndtvimg.com/2021-08/loudr2go_aloo-poha_625x300_05_August_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      style: { color: "red" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    star: true,
  },
  {
    fullName: 'Upma',
    beta: 1,
    description:  "A quintessential South Indian Breakfast! Made with protein-packed urad dal and semolina followed by crunchy veggies and curd, this recipe makes for a hearty morning meal.",
    category: ['all', 'college', 'lycee'],
    icon: {
      path: "https://c.ndtvimg.com/2021-04/37hi8sl_rava-upma_625x300_17_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      style: { color: "pink" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    star: false,
  },
  {
    fullName: "Cheela",
    description:  "A staple across Indian households, moong dal is widely used in a number of Indian delicacies.",
    category: ['all', 'college', 'lycee'],
    icon: {
      path: "https://c.ndtvimg.com/2019-05/1afu8vt8_weight-loss-friendly-breakfast-paneer-besan-chilla_625x300_25_May_19.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
      style: { color: "blue" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    star: false,
  },
  {
    fullName: "Channa Kulcha",
    category: ['all', 'college'],
    icon: {
      path: "https://i.ndtvimg.com/i/2015-04/chana-kulcha_625x350_41429707001.jpg",
      style: { color: "#000" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    description:  "A classic dish that never goes out of style.",
    star: true,
  },
  {
    fullName: "Egg Curry",
    category: ['all', 'prepa'],
    icon: {
      path: "https://i.ndtvimg.com/i/2017-11/goan-egg-curry_620x350_41511515276.jpg",
      style: { color: "#000" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    description:  "Eggs are a versatile food that can be cooked for any meal of the day.",
    star: false,
  },
  {
    fullName: "Paneer Aachari",
    category: ['all', 'prepa'],
    icon: {
      path: "https://i.ndtvimg.com/i/2015-04/paneer_625x350_61429707960.jpg",
      style: { color: "#000" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    description:  "Dont get intimidated by the list of ingredients because they are already in your kitchen cabinet.",
    star: false,
  },
  {
    fullName: "Fish Fry",
    category: ['all', 'ecole'],
    icon: {
      path: "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_41434360207.jpg",
      style: { color: "#000" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    description:  "Get your daily dose of perfect protein.",
    star: false,
  },
  {
    fullName: "Dum Alloo",
    category: ['all', 'ecole'],
    icon: {
      path: "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_51434362664.jpg",
      style: { color: "#000" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    description:  "Your family will thank you for this absolutely fantastic bowl of dum aloo cooked Lakhnawi style.",
    star: false,
  },
  {
    fullName: "Malai Kofta",
    category: ['all', 'ecole'],
    icon: {
      path: "https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg",
      style: { color: "#000" },
    },
    helpUrl: "https://capytale2.ac-paris.fr/wiki/",
    description:  "A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya.",
    star: false,
  },
]

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

const chosenCats = computed(() => {
  console.log(catChoice.value)
  return Data.filter(el => el.category.includes(catChoice.value))
})
</script>

<template>
    <UCard>
    <template #header>
    <div class="flex flex-row justify-between">
        <div class="text-lg font-bold">Créer une nouvelle activité</div>
        <USelect v-model="catChoice" :options="cats" :ui="inputstyle"></USelect>
    </div>
    </template>
    <ActiCard v-for="item in chosenCats" :key="item.fullName" :typeActi="item">
        </ActiCard>
    </UCard>
</template>