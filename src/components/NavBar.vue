<script setup>
import { watch } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { ref } from 'vue'
const route = useRouter()
const navActivatedStatus = ref({
	about: false,
	resume: false,
	portfolio: false,
	contact: false
})

const isActive = (path) => {
	navActivatedStatus.value = {
		about: false,
		resume: false,
		portfolio: false,
		contact: false
	}

	switch (path) {
		case '/':
			navActivatedStatus.value.about = true
			break;
		case '/history':
			navActivatedStatus.value.resume = true
			break;
		case '/project':
			navActivatedStatus.value.portfolio = true
			break;
		case '/contact':
			navActivatedStatus.value.contact = true
			break;
	}
}
watch(() => route.currentRoute.value.path, () => { isActive(route.currentRoute.value.path) }, { immediate: true })
</script>

<template>
	<div id="nav-bar-container" class="rounded-bl-xl rounded-br-xl md:rounded-br-none bg-[#27391C]">
		<RouterLink to="/" class="text-lg text-white hover:text-yellow-400 hover:font-semibold"
			:class="{ 'text-yellow-400': navActivatedStatus.about }">
			About
		</RouterLink>

		<RouterLink to="/history" class="text-lg text-white hover:text-yellow-400 hover:font-semibold"
			:class="{ 'text-yellow-400': navActivatedStatus.resume }">
			History
		</RouterLink>

		<RouterLink to="/project" class="text-lg text-white hover:text-yellow-400 hover:font-semibold"
			:class="{ 'text-yellow-400': navActivatedStatus.portfolio }">
			Projects
		</RouterLink>

		<RouterLink to="/contact" class="text-lg text-white hover:text-yellow-400 hover:font-semibold"
			:class="{ 'text-yellow-400': navActivatedStatus.contact }">
			Contact
		</RouterLink>
	</div>
</template>

<style scoped>
#nav-bar-container {
	/* border: 1px solid; */
	/* background-color: hsl(240, 2%, 37%); */
	display: flex;
	justify-content: space-around;
	width: 42%;
	padding: 15px 0;
	position: absolute;
	top: 0;
	right: 0;
	outline: 2px solid #F1C40F;
}

@media screen and (min-width:320px) and (max-width:480px) {
	#nav-bar-container {
		/* border: 1px solid; */
		display: flex;
		justify-content: space-around;
		width: 99%;
		margin: auto auto;
		position: relative;
		outline: none;
	}
}

@media screen and (min-width:768px) and (max-width:1024px) {
	#nav-bar-container {
		/* border: 1px solid; */
		display: flex;
		justify-content: space-around;
		margin: auto auto;
		position: absolute;
		outline: none;
		outline: 2px solid #F1C40F;

	}
}
</style>