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
</script>

<template>
    <UTable :rows="tags">
    </UTable>

    <UTable :columns="actiColumns" :rows="actis">
    <template #tags-data="{ row }">
    <dispTags v-for="tid of getTags(row.nid)" :tagID="tid"></dispTags>
    </template>
    </UTable>
</template>