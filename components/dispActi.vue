<script setup>
    const files = useFiles()
    const currNote = useCurNote()
    const isOpen = ref({})
    const tags = useTags()
    const actiTags = useActiTags()
    const actiColumns = [
        {
            "key": "nid",
            "label": "ID"
        },
        {
            "key": "modify"
        },
        {
            "key": "note"
        },
        {
            "key": "title",
            "label": "Titre"
        },
        {
            "key": "tags",
            "label": "Étiquettes"
        },
        {
            "key": "actions"
        }
    ]

    onMounted(() => {
        files.value.forEach(o => {
            isOpen.value[o.nid] = false
        }); 
    })


    const getTags = (id) => {
        const tags = actiTags.value.find(o => o.nid === id)
        return tags? tags.tid : "1"
    }

    const ddown = [[
        {
            "label": "Paramètres",
            "icon": "i-heroicons-cog-6-tooth"
        },
        {
            "label": "Cloner",
            "icon": "i-heroicons-document-duplicate"
        },
        {
            "label": "Copier URL d'intégration dans Moodle",
            "icon": "i-heroicons-clipboard"
        },
        {
            "label": "Bloquer la distribution",
            "icon": "i-heroicons-lock-closed"
        },
        {
            "label": "Télécharger",
            "icon": "i-heroicons-arrow-down-tray"
        },
        {
            "label": "Supprimer",
            "icon": "i-heroicons-x-circle"
        },
    ]]

    const toggleTag = (nid, tid) => {
        const arr = actiTags.value.find(o => o.nid == nid).tid
        if(arr.includes(tid)) {
            console.log(arr.indexOf(tid), 1)
            arr.splice(arr.indexOf(tid), 1)
        } else {
            arr.push(tid)
        }
        console.log(arr.includes(tid), nid, tid)
    }
</script>

<template>
    <UTable :columns="actiColumns" :rows="files">
    <template #tags-data="{ row }">

        <UPopover>
            <dispTags v-for="tid of getTags(row.nid)" :key="tid" :tagID="tid"></dispTags>

            <template #panel>
            <ul class="p-4">
                <li v-for="tag in tags" class="p-1">
                    <UIcon :name="getTags(row.nid).includes(tag.tagID) ? 'i-heroicons-check' : 'i-heroicons-x-mark'" v-on:click="toggleTag(row.nid, tag.tagID)"></UIcon>
                    <UBadge :label="tag.label" :color="tag.tagColor">
                    </UBadge>
                </li>
            </ul>
            </template>
        </UPopover>

    </template>
    <template #actions-data="{ row }">
        <UDropdown :items="ddown"  :popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>
    </template>

    <template #note-data="{ row }">
        <UButton @click="console.log(currNote); currNote = row.nid" v-if="row.note" color="white" label="" trailing-icon="i-heroicons-pencil-square-20-solid" />
    </template>

    <template #modify-data="{ row }">
    <div v-if="row.nid in isOpen">
        <UButton icon="i-heroicons-wrench-screwdriver-solid" @click="isOpen[row.nid] = true"></UButton>
        <UModal v-model="isOpen[row.nid]">
            <Updatefile :row="row"></Updatefile>
        </UModal>
    </div>
    </template>
    </UTable>
</template>