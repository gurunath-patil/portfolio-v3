<script setup>
import PageTitle from '@/components/PageTitle.vue';
import AnimalLoader from '@/components/AnimalLoader.vue';
import AlertBox from '@/components/AlertBox.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import PageSubTitle from '@/components/PageSubTitle.vue';
import { ref, onMounted } from 'vue';

const formData = ref({
    name: '',
    email: '',
    massage: '',
    date: undefined
});

const formDetailsSending = ref(false);
const mapStatus = ref(false);
const alertBoxDetails = ref({
    title: '',
    description: '',
    color: '',
    icon: '',
    canOpen: false
})

onMounted(() => {
    setTimeout(() => {
        mapStatus.value = true;
    }, 5000);
});

let popupTimer = null;
function closePopUp() {
    if (popupTimer) {
        clearTimeout(popupTimer);
    }

    popupTimer = setTimeout(() => {
        alertBoxDetails.value.canOpen = false;
        popupTimer = null;
    }, 5000);
}

async function handleSubmit() {
    if (formData.value.name === '' || formData.value.email === '') {
        alertBoxDetails.value = {
            canOpen: true,
            title: 'Error',
            description: 'Please fill up required data!',
            color: 'text-red-500',
            icon: 'ri-error-warning-line'
        }
        closePopUp();
    } else {
        const emailCondition = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
        const emailStatus = emailCondition.test(formData.value.email);

        if (emailStatus) {
            try {
                formDetailsSending.value = true;
                formData.value.date = new Date().toDateString();
                let result = await fetch(`https://formsubmit.co/ajax/gurunathpatil8099@gmail.com`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData.value)
                });

                if (result.status == 200) {
                    formDetailsSending.value = false;
                    alertBoxDetails.value = {
                        canOpen: true,
                        title: 'Success',
                        description: 'Your Details Received Successfully',
                        color: 'text-green-500',
                        icon: 'ri-check-line'
                    }
                    closePopUp();
                    $restForm();
                } else {
                    throw new Error('Data Not Save Successfully try again');
                }
            } catch (err) {
                formDetailsSending.value = false;
                alertBoxDetails.value = {
                    canOpen: true,
                    title: 'Error',
                    description: "Data Not Save Successfully try again",
                    color: 'text-red-500',
                    icon: 'ri-close-line'
                }
                closePopUp();
            }
        } else {
            alertBoxDetails.value = {
                canOpen: true,
                title: 'Error',
                description: "Please Enter Valid Email Address",
                color: 'text-red-500',
                icon: 'ri-close-line'
            }
            closePopUp();
        }
    }
}

function $restForm() {
    formData.value = {
        name: '',
        email: '',
        massage: '',
        date: undefined
    }
}
</script>
<template>
    <PageTitle titleTxt='Contact' />
    <div class="py-6">
        <div class='rounded-lg overflow-hidden'>
            <AnimalLoader v-if="!mapStatus" />
            <iframe v-else
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79400671698!2d74.15646588457899!3d16.70845223339603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1732965493452!5m2!1sen!2sin'
                width='600' height='247' allowFullScreen={true} loading='lazy' referrerPolicy='no-referrer-when-downgrade'
                class="w-full border-0" />
        </div>
        <div></div>
        <div class='mt-10 flex flex-col relative'>
            <PageSubTitle txt="Let's Connect" textColor="text-lime-300" icon-color="text-amber-300"
                logoURL="ri-chat-voice-line" />
            <form class='max-w-full grid grid-cols-2 mt-3'>
                <div class='relative z-0 w-9/12 mb-5 group'>
                    <input type='email' name='name' id='floating_email'
                        class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder='' v-model="formData.name" required />
                    <label htmlFor='floating_email'
                        class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Name*
                    </label>
                </div>
    
                <div class='relative z-0 w-9/12 mb-5 group'>
                    <input type='email' name='email' id='floating_email'
                        class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' ' v-model="formData.email" required />
                    <label htmlFor='floating_email'
                        class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Email*
                    </label>
                </div>
    
                <div class='relative z-0 w-9/12 mb-5 group'>
                    <textarea name='massage' id='floating_email'
                        class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' ' required v-model="formData.massage"></textarea>
                    <label htmlFor='floating_email'
                        class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Massage
                    </label>
                </div>
            </form>
            <div class='flex justify-center pt-1'>
                <LoadingScreen v-if="formDetailsSending" />
                <button v-else
                    class='relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group'
                    @click="handleSubmit">
                    <span
                        class='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4'>
                        <span
                            class='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
                    </span>
                    <span
                        class='absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4'>
                        <span
                            class='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
                    </span>
                    <span
                        class='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0'></span>
                    <span
                        class='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white'>
                        Send Me
                    </span>
                </button>
            </div>
            <AlertBox class="absolute right-0 bottom-0" v-if="alertBoxDetails.canOpen" :canOpen="alertBoxDetails.canOpen"
                :description="alertBoxDetails.description" :title="alertBoxDetails.title" :color="alertBoxDetails.color"
                :icon="alertBoxDetails.icon" @closeAlert="alertBoxDetails.canOpen = false" />
        </div>
    </div>
</template>