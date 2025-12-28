<script setup>
import myProfile from '../../public/my-avatar.png'
import "../index.css"
</script>
<template>
	<div class="min-w-24 flex flex-col justify-between py-4 md:h-56 h-44">
		<div class="flex justify-center items-center flex-wrap">
			<div class="sm:w-max md:w-7/12 overflow-hidden rounded-3xl flex justify-center items-center"
				id="profile-box">
				<section
					class="flex justify-center items-center w-full h-6/12 shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
					<img :src="myProfile" alt="profile emoji" class="sm:w-8/12 md:w-4/12 w-4/12 xl:w-5/12" />
				</section>
			</div>
		</div>

		<div class="lg:p-2 text-xl lg:text-3xl md:text-2xl font-semibold flex justify-center flex-wrap lg:items-center">
			<h2 class="font-mono tracking-wide text-small sm:text-3xl text-white">Gurunath Patil</h2>
		</div>

		<div class="flex justify-center flex-wrap">
			<button @click="() => (window.location.href = 'https://www.github.com/gurunath-patil')"
				class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-violet-700 text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-7/12 sm:w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
				<span
					class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
				<div class="flex items-center">
					<span class="ml-1 text-white text-lg ps-3 sm:ms-0">Full Stack Developer</span>
				</div>
			</button>
		</div>
	</div>
</template>
