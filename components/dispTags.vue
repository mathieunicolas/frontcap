<script setup>
const props = defineProps({
    tagID: String
})

const tags = useTags()
const tagInfo = tags.value.find(o => o.tagID == props.tagID)
</script>

<template>
    <UBadge :label="tagInfo ? tagInfo.label : 'tag'"></UBadge>
</template>