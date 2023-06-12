<script setup>
    const actis = useFiles()
    const tags = useTags()
    const actiTags = useActiTags()
    const actiColumns = [
        {
            "key": "nid",
            "label": "ID"
        },
        {
            "key": "title",
            "label": "Titre"
        },
        {
            "key": "tags",
            "label": "Étiquettes"
        },
    ]

    const getTags = (id) => {
        const tags = actiTags.find(o => o.nid === id)
        return tags? tags.tid : "1"
    }

    const test = [[
        {
            "label": "SNT"
        },
        {
            "label": "NSI"
        },
        {
            "label": "Corrigé"
        },
        {
            "label": "Pas Corrigé"
        },
    ]]
</script>

<template>
    <UTable :rows="tags">
    </UTable>

    <UTable :columns="actiColumns" :rows="actis">
    <template #tags-data="{ row }">
    <dispTags v-for="tid of getTags(row.nid)" :tagID="tid"></dispTags>
    <UDropdown :items="test"  :popper="{ placement: 'bottom-start' }"></UDropdown>
    </template>
    </UTable>
</template>