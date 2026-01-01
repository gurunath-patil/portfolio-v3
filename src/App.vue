<script setup>
import ContactDetails from './views/ContactDetails.vue';
import Layout from './views/Layout.vue'; 
</script>

<template>
	<div class="flex flex-col justify-center px-2 py-3 sm:p-5 lg:py-5 lg:px-7 gap-y-3 md:gap-y-5 lg:flex-row lg:gap-x-5">
		<ContactDetails />
		<Layout />
	</div>
</template>

<style scoped></style>
