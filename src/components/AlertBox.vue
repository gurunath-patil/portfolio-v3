<script setup>
import { onMounted, ref } from 'vue';
const isOpen = ref(false)
const props = defineProps(['title', 'description', 'color', 'icon', 'canOpen'])
const emit = defineEmits(['closeAlert'])
onMounted(() => {
    isOpen.value = props.canOpen
})
</script>
<template>
    <div class="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
        <div
            class="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-blue-300 px-[10px]">
            <div class="flex gap-2">
                <div class="bg-black backdrop-blur-xl px-2 py-1 rounded-lg flex justify-center items-center" :class="color">
                    <i :class="icon" class="text-xl"></i>
                </div>
                <div>
                    <p class="text-black" v-if="title">{{ title }}</p>
                    <p class="text-black">{{ description }}</p>
                </div>
            </div>
            <button class="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
                @click="emit('closeAlert')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>
</template>