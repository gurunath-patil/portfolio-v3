<script setup>
import { ref } from 'vue'

const techStackDetails = ref([
    // 1. Primary Frameworks
    {
        icon: 'ri-vuejs-fill',
        name: 'Vue JS',
        color: '#42b883'
    },
    {
        icon: 'ri-reactjs-fill',
        name: 'React JS',
        color: '#61dafb'
    },
    {
        icon: 'ri-angularjs-fill',
        name: 'Angular',
        color: '#dd0031'
    },

    // 2. Core Logic Languages
    {
        icon: 'ri-javascript-fill',
        name: 'JavaScript',
        color: '#f7df1e'
    },
    {
        icon: 'ri-code-s-slash-line', 
        name: 'TypeScript',
        color: '#3178c6'
    },
    {
        icon: 'ri-code-s-slash-line',
        name: 'Python',
        color: '#3776ab'
    },

    // 3. Backend & Database
    {
        icon: 'ri-nodejs-fill',
        name: 'Node JS',
        color: '#339933'
    },
    {
        icon: 'ri-database-2-fill',
        name: 'SQL Server',
        color: '#CC2927'
    },
    {
        icon: 'ri-database-2-fill',
        name: 'PostgresSQL',
        color: '#336791'
    },

    // 4. Styling & Foundations
    {
        icon: 'ri-tailwind-css-fill', // Commonly used for Tailwind
        name: 'Tailwind',
        color: '#06b6d4'
    },
    {
        icon: 'ri-vuejs-line',
        name: 'Vuetify',
        color: '#1867C0'
    },
    {
        icon: 'ri-bootstrap-fill',
        name: 'Bootstrap',
        color: '#7952b3'
    },
    {
        icon: 'ri-html5-fill',
        name: 'HTML5',
        color: '#e34f26'
    },
    {
        icon: 'ri-css3-fill',
        name: 'CSS3',
        color: '#1572b6'
    }
])
</script>
<template>
    <div v-for="techStack, index in techStackDetails" :key="index">
        <div
            class='group flex flex-col gap-4 w-28 sm:w-32 sm:h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-indigo-500 hover:shadow-indigo-500/20 peer-checked:border-indigo-500 peer-checked:from-indigo-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem] text-gray-400 cursor-pointer'>
            <div class='relative'>
                <div
                    class='w-12 h-12 mx-auto bg-indigo-500/20 rounded-lg border-2 border-indigo-500/40 group-hover:border-indigo-400 group-hover:bg-indigo-500/30 peer-checked:border-indigo-400 peer-checked:bg-indigo-500/30 transition-all duration-300'>
                    <div class='flex justify-center items-center gap-1 p-2'>
                        <i class='text-xl text-indigo-400' :class="techStack.icon"></i>
                    </div>
                </div>
            </div>

            <div class='text-center'>
                <p
                    class='font-medium text-sm group-hover:text-indigo-400 peer-checked:text-indigo-400 transition-colors duration-300 mb-1'>
                    {{ techStack.name }}
                </p>
                <div
                    class='h-1 w-0 bg-indigo-500 rounded-full mx-auto group-hover:w-6/12 peer-checked:w-full transition-all duration-300'>
                </div>
            </div>
        </div>
    </div>
</template>