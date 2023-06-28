<script setup>
const inputstyle = {
  "base": "relative inline w-auto disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
}

const typeActivites = useState('typeActivites', () => [
  {
    "id": "codabloc",
    "name": "Codabloc",
    "fav": true,
    "fullName": "Codabloc",
    "description": "L'environnement Scratch intégré dans Capytale pour apprendre à programmer avec des blocs.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_codabloc.svg",
      "style": {
        "color": "#898dc5",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "ecole": 1,
      "college": 1,
      "lycee": 5
    },
    "helpUrl": "https://capytale2.ac-paris.fr/wiki/doku.php?id=codabloc",
    "bundle": "activity"
  },
  {
    "id": "codepuzzle",
    "name": "Code Puzzle",
    "fullName": "Code Puzzle",
    "description": "Générateur et gestionnare de puzzles de Parsons.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_codabloc.svg",
      "style": {
        "color": "#79c824",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "ecole": 1,
      "college": 3,
      "lycee": 7
    },
    "helpUrl": "https://capytale2.ac-paris.fr/wiki/doku.php?id=codepuzzle",
    "bundle": "activity"
  },
  {
    "id": "console.python3",
    "name": "Script-Console",
    "beta": true,
    "fullName": "Script-Console",
    "description": "L'environnement classique de programmation : un script Python à gauche et une console d'exécution à droite.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_console.svg",
      "style": {
        "color": "#000000",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "college": 30,
      "lycee": -1,
      "prepa": 1000
    },
    "helpUrl": "https://capytale2.ac-paris.fr/wiki/doku.php",
    "bundle": "console_activity"
  },
  {
    "id": "geogebra",
    "name": "GeoGebra",
    "beta": true,
    "fullName": "GeoGebra",
    "description": "Géométrie dynamique avec Geogebra enrichi des fonctionnalités pédagogiques de Capytale.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_geogebra.svg",
      "style": {
        "color": "#9999ff",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "ecole": 1,
      "college": 1,
      "lycee": 5
    },
    "helpUrl": "https://capytale2.ac-paris.fr/wiki/doku.php?id=geogebra",
    "bundle": "activity"
  },
  {
    "id": "html",
    "name": "HTML/CSS/JS",
    "fullName": "HTML/CSS/JS",
    "description": "Découvrir les langaes du Web : html, CSS et JavaScript.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_html.svg",
      "style": {
        "color": "#0b5394",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "college": 10,
      "lycee": 3
    },
    "helpUrl": "https://capytale2.ac-paris.fr/wiki/doku.php?id=html",
    "bundle": "activity"
  },
  {
    "id": "notebook.ocaml",
    "name": "OCaml",
    "fullName": "Notebook OCaml",
    "description": "Le langage OCaml dans un notebook.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_ocaml.svg",
      "style": {
        "color": "#de7932",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "prepa": 5
    },
    "helpUrl": "https://capytale2.ac-paris.fr/p/basthon/n/?id=330758&kernel=ocaml",
    "bundle": "notebook_activity"
  },
  {
    "id": "notebook.python3",
    "name": "Notebook",
    "fullName": "Notebook Python",
    "description": "Python dans un notebook Jupyter : une alternance de cellules de texte riche et de cellules de code exécutables.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_nb.svg",
      "style": {
        "color": "#ff6402",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "college": 30,
      "lycee": -1,
      "prepa": 1000
    },
    "helpUrl": "https://capytale2.ac-paris.fr/wiki/doku.php?id=notebook",
    "bundle": "notebook_activity"
  },
  {
    "id": "notebook.sql",
    "name": "SQL",
    "fullName": "Notebook SQL",
    "description": "Le langage SQL dans un notebook.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_sql.svg",
      "style": {
        "color": "#f1c232",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "college": 30,
      "lycee": -1,
      "prepa": 1000
    },
    "helpUrl": "https://capytale2.ac-paris.fr/p/basthon/n/?id=42529&kernel=sql",
    "bundle": "notebook_activity"
  },
  {
    "id": "pixel",
    "name": "Pixel Art",
    "fullName": "Pixel Art",
    "description": "Construire un dessin pixelisé avec des blocs de code.",
    "summary": "",
    "icon": {
      "path": "/web/modules/custom/capytale_activity/src/Activity/logo/logo_pixel.svg",
      "style": {
        "color": "#898dc5",
        "background-color": "#ffffff"
      }
    },
    "category": {
      "all": 10,
      "ecole": 1,
      "college": 1,
      "lycee": 5
    },
    "helpUrl": "https://capytale2.ac-paris.fr/wiki/doku.php?id=codabloc",
    "bundle": "activity"
  }
])

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
const dispChoice = ref(false)
const cosmos = ref(dispChoice.value ? 'px-4 py-4 sm:px-6' : 'p-0')

const chosenCats = computed(() => {
  console.log(catChoice.value)
  return typeActivites.value.filter(el => Object.keys(el.category).includes(catChoice.value) || (catChoice.value == 'fav' && el.fav))
})

const openPanel = (event) => {
  dispChoice.value = !dispChoice.value
}

watch(typeActivites, () => {
  console.log(typeActivites)
})

const itemRefs = ref([])
</script>

<template>
    <UCard :ui="{ body: { padding: cosmos }}">
    <template #header>
    <div class="flex flex-row justify-between">
        <div class="text-lg font-bold">
        <UIcon @click="openPanel" :class="dispChoice?'rotate-180':''" class="transition-all" name="i-heroicons-arrow-down"></UIcon>
        Créer une nouvelle activité</div>
        <USelect v-model="catChoice" :options="cats" :ui="inputstyle"></USelect>
    </div>
    </template>
    <Transition @afterLeave="cosmos = 'p-0'">
    <div class="grid grid-cols-2" v-if="dispChoice">
    <ActiCard class="" v-for="item in chosenCats" ref="test" :key="item.fullName" :activite="item"></ActiCard>
    </div>
  </Transition>
    </UCard>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.75s ease-out;
  max-height: 1000px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>