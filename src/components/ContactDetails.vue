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
		content: 'Kolhapur | Pune',
	},
]

</script>
<template>
	<div class='grid grid-cols-2 gap-5 p-2 md:ms-0 md:flex md:flex-col md:pb-10 md:gap-6'>
		<div class='flex overflow-hidden gap-x-2' v-for="item in contactDetails">
			<div class='bg-[#202022] sm:w-16 w-8 p-1 shadow-lg flex justify-center items-center flex-wrap rounded-xl'>
				<i :class="item.imgURL" class="text-2xl text-amber-300"></i>
			</div>
			<div class='flex flex-col'>
				<h4 class='text-xs md:text-base lg:text-base text-orange-300'>{{ item.title }}</h4>
				<p class='w-25 sm:w-full text-xs md:text-sm lg:text-base text-white font-mono line-clamp-1'>
					{{ item.content }}
				</p>
			</div>
		</div>
	</div>
</template>
