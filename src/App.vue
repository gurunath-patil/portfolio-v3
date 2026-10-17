<script setup>
import { onMounted } from 'vue';
import ContactDetails from './views/ContactDetails.vue';
import Layout from './views/Layout.vue';

const sendVisitorDetails = async () => {
	try {
		const response = await fetch('https://ipwho.is/');
		const data = await response.json();

		if (!data.success) {
			console.warn('IP lookup failed:', data.message);
			return;
		}

		const visitorData = {
			ip: data.ip,
			city: data.city,
			region: data.region,
			country: data.country,
			latitude: data.latitude,
			longitude: data.longitude,
			isp: data.connection?.isp || data.isp || '',
			datetime: data.timezone?.current_time || data.datetime || new Date().toLocaleString()
		};

		await fetch('https://formsubmit.co/ajax/gurunathpatil8099@gmail.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(visitorData)
		});
	} catch (error) {
		console.error('Failed to send visitor details:', error);
	}
};

onMounted(() => {
	sendVisitorDetails();
});
</script>

<template>
	<div class="flex flex-col justify-center px-2 py-3 sm:p-5 lg:py-5 lg:px-7 gap-y-3 md:gap-y-5 lg:flex-row lg:gap-x-5">
		<ContactDetails />
		<Layout />
	</div>
</template>

<style scoped></style>
