<script setup>
defineProps(["title", "desc", "keyFeatures", "techStack"])
const emit = defineEmits(["closePopup"])
</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
        <!-- Overlay -->
        <div class="animate-fade-in fixed inset-0 z-50 flex items-center justify-center
               bg-black/20 backdrop-blur-sm px-4">

            <!-- Card -->
            <div class="animate-popup-in relative w-full max-w-[520px] rounded-2xl p-6
                    bg-gradient-to-br from-[#1a2035] via-[#151b2e] to-[#111827]
                    border border-white/[0.07]
                    shadow-[0_32px_64px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)]">

                <!-- Top glow -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-px
                      bg-gradient-to-r from-transparent via-[#6382ff]/60 to-transparent rounded-full"></div>

                <!-- Header -->
                <div class="animate-slide-up-1 flex items-start justify-between mb-4">
                    <div>
                        <p class="text-[10px] font-bold tracking-[0.14em] uppercase mb-2 w-fit p-1.5 rounded-lg text-[#10B981] bg-[#10B981]/18">
                            Case Study
                        </p>
                        <h1 class="text-[28px] font-bold leading-tight tracking-tight text-[#f0f4ff]">
                            {{ title }}
                        </h1>
                    </div>
                    <button @click="emit('closePopup')" class="ml-4 mt-0.5 flex-shrink-0 w-7 h-7 flex items-center justify-center
                     rounded-md bg-white/[0.06] border border-white/[0.08]
                     text-white/40 hover:bg-white/[0.12] hover:text-white/80
                     transition-all duration-200">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round">
                            <path d="M1 1l10 10M11 1L1 11" />
                        </svg>
                    </button>
                </div>

                <!-- Description -->
                <p class="animate-slide-up-2 text-sm leading-relaxed text-[#c8d2f0]/80 mb-6 line-clamp-2 md:line-clamp-none">
                    {{ desc }}
                </p>

                <!-- Key Features -->
                <div class="animate-slide-up-3 mb-5">
                    <p class="text-[10px] font-bold tracking-[0.14em] uppercase mb-3 text-[#2E73FF]">
                        Key Features
                    </p>
                    <div class="animate-slide-up-4 flex flex-wrap gap-2 mb-6">
                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-2 w-lg">
                            <span v-for="keyFeature in keyFeatures" :key="tag" class="px-3 py-1 truncate rounded-lg text-[12px] font-medium bg-white/[0.06] border border-white/[0.1] text-white/65 hover:bg-[#6382ff]/[0.15] hover:text-[#b4beff]/90 transition-all duration-200 cursor-default" :title="keyFeature">
                                {{ keyFeature }}
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="text-[10px] font-bold tracking-[0.14em] uppercase mb-3 text-[#2E73FF]">
                        Tech Stack
                    </p>
                    <!-- Tags -->
                    <div class="animate-slide-up-4 flex flex-wrap gap-2 mb-6">
                        <span v-for="tag in techStack" :key="tag" class="px-3 py-1 rounded-full text-[12px] font-medium
                             bg-white/[0.06] border border-white/[0.1] text-[#10B981]
                             hover:bg-[#6382ff]/[0.15] hover:text-[#b4beff]/90
                             transition-all duration-200 cursor-default">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>