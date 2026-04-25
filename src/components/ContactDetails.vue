<script setup>
import "../index.css"
let contactDetails = [
	{
		imgURL: 'ri-smartphone-line',
		title: 'Phone',
		content: '+91 7378478383',
	},
	{
		imgURL: 'ri-mail-line',
		title: 'Email',
		content: 'work.gurunathpatil@gmail.com',
	},
	{
		imgURL: 'ri-calendar-2-line',
		title: 'Experience',
		content: `${Math.floor((Date.now() - new Date('2024-01-01')) / (1000 * 60 * 60 * 24 * 365))} Year`,
	},
	{
		imgURL: 'ri-map-pin-line',
		title: 'Location',
		content: 'Pune | Kolhapur, Maharashtra',
	},
]

</script>
<template>
	<div class='grid grid-cols-2 lg:grid-cols-1 gap-5 p-2 md:ms-0 md:pb-10 md:gap-6'>
		<div class='grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-y-1 lg:gap-y-0 lg:gap-x-2 px-3' v-for="item in contactDetails">
			<div class='bg-[#202022] w-[55%] lg:w-15 col-start-1 col-end-1 lg:row-start-1 lg:row-end-3 p-1 shadow-lg flex justify-center items-center rounded-xl'>
				<i :class="item.imgURL" class="text-2xl lg:text-2xl text-amber-400"></i>
			</div>
				<h4 class='ps-1 text-base lg:text-base text-orange-300'>{{ item.title }}</h4>
				<p class='ps-1 sm:w-full text-sm lg:text-base text-white font-mono truncate lg:col-start-2 lg:col-end-3' :title="item.content">
					{{ item.content }}
				</p>
		</div>
	</div>
</template>
