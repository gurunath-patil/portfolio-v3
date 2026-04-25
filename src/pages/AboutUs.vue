<script setup>
import PageSubTitle from '@/components/PageSubTitle.vue';
import TechStackCard from '@/components/TechStackCard.vue';
import PageTitle from '@/components/PageTitle.vue';
</script>
<template>
	<PageTitle titleTxt='About Us' />
	<div class="py-6">
		<div class='pb-5 flex flex-col gap-3 text-xs md:text-lg text-justify lg:text-lg education-txt tracking-wider'>
			<p>
				I’m a web developer with a Master’s degree in Computer Science, and I love building
				websites and applications that are easy to use and look great.
			</p>
			<p>
				Hands-on experience in building scalable web applications with strong expertise in API integration,
				state management and performance optimization.
			</p>
		</div>
		<div class="flex flex-col gap-y-2">
			<PageSubTitle logoURL="ri-code-s-slash-line" txt="Crafted With" textColor="text-lime-300"
				iconColor="text-amber-300" />
			<div
				class='flex flex-wrap lg:flex-row md:justify-start lg:justify-start lg:gap-x-4 md:gap-x-10 gap-y-5 justify-around md:gap-y-10 lg:gap-y-6 py-4'>
				<TechStackCard />
			</div>
		</div>
	</div>
</template>