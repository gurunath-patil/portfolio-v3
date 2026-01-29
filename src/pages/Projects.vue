<script setup>
import PageTitle from '@/components/PageTitle.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import AlertBox from '@/components/AlertBox.vue';
import { ref } from 'vue';

const projectDetails = [
	{
		projectName: 'YCanary',
		sourceURL: 'https://ycanary.com/',
		status: true,
		imgURL: 'https://ycanary.com/assets/customdashboard-Cl2Mgd-N.webp',
	},
	{
		projectName: 'Weather Forcast',
		sourceURL: 'https://weather-forcast-nu.vercel.app/',
		status: true,
		imgURL: 'https://images.pexels.com/photos/29034990/pexels-photo-29034990/free-photo-of-serene-mountain-view-above-sunrise-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		projectName: 'Nandan Dairy ERP',
		imgURL: 'https://www.baramatidoodhsangh.com/new/Home%20Page%20Display-1.webp',
		status: false,
		sourceURL: null,
	},
	{
		projectName: 'Bways ERP',
		imgURL: 'https://compservtech.com/site/assets/files/1425/bways_erp_logo.png',
		status: false,
		sourceURL: null,
	},
	{
		projectName: 'Bloging Website',
		sourceURL: 'https://github.com/gurunath-patil/blog-website',
		status: true,
		imgURL: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
]

const alertDetails = ref({
	title: 'No Link Available',
	description: 'Please check back later',
	color: 'bg-red-500',
	icon: 'ri-error-warning-fill',
	canOpen: false
})
</script>

<template>
	<PageTitle titleTxt='Projects' />
	<div class="grid grid-cols-1 gap-5 pt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 relative">
		<ProjectCard v-for="project in projectDetails" :key="project.projectName" :projectDetails="project" 
		@openAlert="alertDetails.value.canOpen = true"/>
		<AlertBox v-if="alertDetails.canOpen" class="absolute bottom-0 right-0" :title="alertDetails.title" :description="alertDetails.description"
			:color="alertDetails.color" :icon="alertDetails.icon" @closeAlert="alertDetails.canOpen = false" />
	</div>
</template>