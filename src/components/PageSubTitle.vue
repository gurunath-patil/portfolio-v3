<script setup>
const props = defineProps(['logoURL', 'txt', 'textColor', 'iconColor'])
</script>
<template>
    <div class="flex gap-x-2 items-center">
        <i :class="logoURL, iconColor" class="text-xl"></i>
        <h2 class='text-xl font-semibold hover:underline underline-offset-4 decoration-wavy' :class="textColor">{{ txt }}</h2>
    </div>
</template>