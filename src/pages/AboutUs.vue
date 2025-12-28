<script setup>
import PageSubTitle from '@/components/PageSubTitle.vue';
import TechStackCard from '@/components/TechStackCard.vue';
import PageTitle from '@/components/PageTitle.vue';
</script>
<template>
	<PageTitle titleTxt='About Us' />
	<section class='py-4 flex flex-col gap-3 text-xs md:text-lg text-justify lg:text-lg education-txt tracking-wider'>
		<p>
			I’m a web developer with a Master’s degree in Computer Science, and I love building
			websites and applications that are easy to use and look great.
		</p>
		<p>
			My job is to build your website so that it is functional and user-friendly but at the same
			time attractive. Moreover, I add personal touch to your product and make sure that is
			eye-catching and easy to use. My aim is to bring across your message and identity in the
			most creative way.
		</p>
	</section>
	<section class="pt-5 flex flex-col gap-y-2">
		<PageSubTitle logoURL="ri-code-s-slash-line" txt="Crafted With" textColor="text-lime-300"
			iconColor="text-amber-300" />
		<div
			class='flex flex-wrap lg:flex-row md:justify-start lg:justify-start lg:gap-x-4 md:gap-x-10 gap-y-5 justify-around md:gap-y-10 lg:gap-y-6 py-4'>
			<TechStackCard />
		</div>
	</section>
</template>