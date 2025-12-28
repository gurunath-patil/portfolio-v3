<script setup>
const props = defineProps({
    steps: {
        type: Array,
        required: true,
        default: () => []
    }
})
</script>

<template>
    <div
        class="w-4/5 h-auto rounded-2xl shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]">
        <div class="p-4 pl-8 [--tl-color:#daa520] [--tl-rounded:9999px] [--tl-bullet-size:25px] [--tl-line-width:3px] [--offset:calc(var(--tl-bullet-size)/2+var(--tl-line-width)/2)]"
            data-align="left" role="group">
            <div v-for="(stepItem, index) in steps" :key="index"
                class="group relative text-left text-zinc-600 dark:text-zinc-500 pl-[var(--offset)]" :class="{
                    'mt-8': index > 0,
                    'before:content-[\'\'] before:absolute before:pointer-events-none before:top-0 before:left-[calc(var(--tl-line-width)*-1)] before:-bottom-8 before:border-l-[length:var(--tl-line-width)] before:border-l-[color:var(--tl-color)] before:border-dotted': index < steps.length - 1
                }" data-line-active="true" data-tl="item" style="--item-border-color: #424242;">

                <!-- Timeline bullet -->
                <div class="bg-[#903939] text-white border-solid border-[3px] absolute top-0 h-[var(--tl-bullet-size)] w-[var(--tl-bullet-size)] rounded-[var(--tl-rounded)] flex items-center justify-center cursor-pointer left-[calc((var(--tl-bullet-size)/2+var(--tl-line-width)/2)*-1)]"
                    data-active="true" data-child="bullet">
                    <i :class="stepItem.isCompleted ? 'ri-check-line' : 'ri-focus-3-line'"></i>
                </div>

                <!-- Content body -->
                <div data-child="body" class="ps-3">
                    <span class="font-semibold leading-none font-mono text-emerald-200">
                        {{ stepItem.title }}
                    </span>

                    <div class="mt-1" role="group">
                        <p class="flex flex-row flex-nowrap items-center gap-2 text-amber-400 dark:text-orange-200">
                            <span class="text-sm font-normal font-mono line-clamp-1">
                                {{ stepItem.subTitle }}
                            </span>
                        </p>
                    </div>

                    <div
                        class="text-sm font-normal font-mono mt-2 whitespace-pre-wrap flex-col items-start line-clamp-2">
                            {{ stepItem.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>