<script setup>
import PageTitle from '@/components/PageTitle.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import AlertBox from '@/components/AlertBox.vue';
import dashboard_with_people from '../../public/dashboard_with_people.svg'
import weather from '../../public/weather.svg'
import ERP from '../../public/ERP.svg'
import ERP_2 from '../../public/ERP_2.svg'
import article from '../../public/article.svg'
import shareWork from '../../public/sharing-articles_agyr.svg'

import { ref } from 'vue';

const projectDetails = [
	{
		projectName: 'YCanary',
		sourceURL: 'https://ycanary.com/',
		status: true,
		imgURL: dashboard_with_people,
		desc: "A real-time marketing analytics platform used to monitor campaign performance across multiple advertising channels. Built responsive dashboards. Integrated third-party APIs such as Meta, Google Ads, and LinkedIn to fetch campaign insights and automate reporting workflows.",
		keyFeatures: [
			"Real-time campaign analytics dashboard",
			"Interactive charts using ApexCharts",
			"Meta, Google Ads, and LinkedIn API integration",
			"Reusable UI components with Vue.js and Vuetify",
			"Optimized data querying with DuckDB",
			"Filtering, drill-down, and performance reports"
		],
		techStack: ['Vue.js', 'Vuetify', 'Django Rest Framework', 'DuckDB', 'ApexCharts', 'PostgreSQL', 'Docker']
	},
	{
		projectName: 'File Sharing',
		sourceURL: 'http://airbeam-green.vercel.app/',
		status: true,
		imgURL: shareWork,
		desc: "A high-performance, real-time peer-to-peer file-sharing web application that allows users to seamlessly transfer single or multiple files of any format.",
		keyFeatures: [
			"Real-time, peer-to-peer file-sharing",
			"Real-time signaling architecture",
			"responsive, modern UI"
		],
		techStack: ['React', 'Tailwind CSS', 'webRTC', 'Django Rest Framework', 'Channel', 'DataChannel', 'react-router-dom']
	},
	{
		projectName: 'Weather Forecast',
		sourceURL: 'https://weather-forcast-nu.vercel.app/',
		status: true,
		imgURL: weather,
		desc: "Built a modern weather forecasting web application that provides real-time and upcoming weather conditions for locations worldwide. Integrated external weather APIs to display hourly and daily forecasts with a clean and responsive user interface.",
		keyFeatures: [
			"Search weather by city or location",
			"Current temperature and weather condition",
			"Hourly weather forecast",
			"3-day forecast system",
			"API integration with real-time weather data"
		],
		techStack: ['React.js', 'Tailwind CSS', 'React Router', 'open-meteo.com API']
	},
	{
		projectName: 'Nandan Dairy ERP',
		imgURL: ERP,
		status: false,
		sourceURL: null,
		desc: "Developed ERP modules for a dairy business to streamline operations such as inventory management, milk collection, billing, customer management, and reporting. Designed forms with validations and dynamic business logic to reduce manual work and improve data accuracy.",
		keyFeatures: [
			"Milk collection and purchase management",
			"Inventory and stock tracking",
			"Billing and invoice generation",
			"Customer and vendor management",
			"Dynamic reports and analytics",
			"Role-based module access",
			"Validation-driven data entry forms"
		],
		techStack: ['React', 'Tailwind CSS', 'React Router', 'Nest.js', 'Sql Server 2019', 'Crystal Report']
	},
	{
		projectName: 'Bways ERP',
		imgURL: ERP_2,
		status: false,
		sourceURL: null,
		desc: "Built ERP functionalities for business process automation including employee management, sales tracking, finance operations, and centralized reporting. Developed scalable APIs and responsive frontend modules for internal operations.",
		keyFeatures: [
			"Employee and department management",
			"Sales and purchase tracking",
			"Financial reports and summaries",
			"REST API integration",
			"Dashboard with business KPIs",
		],
		techStack: ['React', 'Tailwind CSS', 'React Router', 'Nest.js', 'Sql Server 2019', 'Crystal Report']
	},
	{
		projectName: 'Article Website',
		sourceURL: 'https://github.com/gurunath-patil/blog-website',
		status: true,
		imgURL: article,
		desc: "Created a content publishing platform where users can browse, read, and manage articles through a clean and modern interface. Focused on user experience, dynamic rendering, and content management workflows.",
		keyFeatures: [
			"Create, edit, and delete articles",
			"Article categories and tags",
			"Rich text content display",
			"User authentication system"
		],
		techStack: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Node.js']
	}
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
			@openAlert="alertDetails.value.canOpen = true" />
		<AlertBox v-if="alertDetails.canOpen" class="absolute bottom-0 right-0" :title="alertDetails.title"
			:description="alertDetails.description" :color="alertDetails.color" :icon="alertDetails.icon"
			@closeAlert="alertDetails.canOpen = false" />
	</div>
</template>