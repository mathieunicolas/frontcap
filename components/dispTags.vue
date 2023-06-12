<script setup>
const props = defineProps({
    tagID: String
})

const tags = useTags()
const tagInfo = tags.value.find(o => o.tagID === props.tagID)
</script>

<template>
    <UBadge :label="tagInfo.tagName">{{ tagInfo }}</UBadge>
</template>