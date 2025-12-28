<script setup>
import NavBar from '@/components/NavBar.vue';
</script>
<template>
    <div class="bg-[#0b192c] rounded-lg overflow-hidden w-full relative">
        <NavBar />
        <div class='px-10 py-7 text-white'>
            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        </div>
    </div>
</template>
<style scoped> 
    
</style>