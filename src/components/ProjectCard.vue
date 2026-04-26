<script setup>
import ProjectDescPopUp from '@/components/ProjectDescPopUp.vue';
import { ref } from 'vue';

const props = defineProps({
    projectDetails: {
        type: Object,
        required: true
    }
})
const visible = ref(false);
function openLink(url) {
    window.open(url, '_blank');
}
const openPopUp = () => visible.value = true
</script>
<template>
    <div class="sm:min-w-80 md:max-w-80 relative">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="h-40 flex items-center justify-center">
                <img :src="projectDetails.imgURL" :alt="projectDetails.projectName" class="w-full h-full object-contain">
            </div>
            <div class="p-3 bg-blue-100">
                <div class="flex items-center gap-x-2 mb-4">
                    <h2 class="text-2xl font-bold text-gray-800 font-mono">{{ projectDetails.projectName }}</h2>
                    <button class="cursor-pointer" @click="visible = true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </button>
                </div>
                <button
                    class="bg-indigo-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-1 rounded-lg transition-colors cursor-pointer"
                    :disabled="!projectDetails.sourceURL" @click="openLink(projectDetails.sourceURL)">
                    View Project
                </button>
            </div>
        </div>
    </div>
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="visible" class="fixed inset-0 z-50">
            <ProjectDescPopUp :title="projectDetails.projectName" :desc="projectDetails.desc"
                :keyFeatures="projectDetails.keyFeatures" :techStack="projectDetails.techStack"
                @closePopup="visible = false" />
        </div>
    </transition>
</template>