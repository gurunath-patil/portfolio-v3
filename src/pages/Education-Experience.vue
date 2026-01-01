<script setup>
import PageSubTitle from '@/components/PageSubTitle.vue';
import PageTitle from '@/components/PageTitle.vue';
import Stepper from '@/components/Stepper.vue';
const experienceArr = [
    {
        title: 'Incrust Software Pvt. Ltd, Pune',
        subTitle: 'Full Stack Developer',
        text: 'Feb 2025 - Present',
        isCompleted: false
    },
    {
        title: 'Compserv Private LTD, Kolhapur',
        subTitle: 'Full Stack Developer Intern',
        text: 'Sep 2023 - Sep 2024',
        isCompleted: true
    },
]

const educationArr = [
    {
        title: 'D Y Patil Agriculture & Technical College, Kolhapur',
        subTitle: "Master's Of Computer Application (MCA)",
        text: 'Jun 2022 - Jun 2024',
        isCompleted: true
    },
    {
        title: 'Shivaji University, Kolhapur',
        subTitle: "Bachelor's Of Computer Science (BCS)",
        text: 'Jun 2019 - Jun 2022',
        isCompleted: true
    },
    {
        title: 'Private High School & Jr. College, Kolhapur',
        subTitle: 'HSC (12th)',
        text: 'Jun 2017 - Jun 2019',
        isCompleted: true
    },
    {
        title: 'Shahu Public School, Kolhapur',
        subTitle: 'SSC (10th)',
        text: 'Jun 2016 - Jun 2017',
        isCompleted: true
    },
]
</script>
<template>
    <PageTitle titleTxt='History' />
    <div class="py-6 grid grid-cols-1 md:grid-cols-2">
        <div>
            <PageSubTitle logoURL="ri-graduation-cap-line" txt="Education" textColor="text-lime-300" icon-color="text-amber-300" />
            <div class="py-2">
                <Stepper :steps="educationArr" />
            </div>
        </div>
        <div>
            <PageSubTitle logoURL="ri-briefcase-2-line" txt="Experience" textColor="text-lime-300" icon-color="text-amber-300" />
            <div class="py-2">
                <Stepper :steps="experienceArr" />
            </div>
        </div>
    </div>
</template>