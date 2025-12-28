<script setup>
const props = defineProps({
    projectDetails: {
        type: Object,
        required: true
    }
})

function openLink(url) {
    window.open(url, '_blank');
}
</script>
<template>
    <div class="sm:min-w-80 md:max-w-80">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="h-40 flex items-center justify-center">
                <img :src="projectDetails.imgURL" :alt="projectDetails.projectName" class="w-full h-full object-cover">
            </div>
            <div class="p-3">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ projectDetails.projectName }}</h2>
                <button
                    class="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-1 rounded transition-colors cursor-pointer"
                    :disabled="!projectDetails.sourceURL" @click="openLink(projectDetails.sourceURL)">
                    Check Out
                </button>
            </div>
        </div>
    </div>
</template>