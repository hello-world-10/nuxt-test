<template>
    <div v-if="isVisible" class="bg-[#ECEB98] text-[#2D2F31] flex justify-between items-center p-3 font-sans ">
        <div class="flex-grow flex flex-col items-center justify-center">
            <p class="text-xs md:sm lg:text-base">
                <strong>New to Udemy?</strong>| Shop now to get a limited time offer: courses from $13.99. Or, check out our subscription.
            </p>
            <p>
                <strong class="text-sm md:text-base lg:text-lg">Ends in {{ countdown }}</strong>
            </p>
        </div>
        <button class="text-[#2D2F31] text-lg cursor-pointer" @click="isVisible = false">✕</button>
    </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const countdown = ref('');
const isVisible = ref(true);
const countdownEnd = new Date().setHours(23, 59, 59, 999);
let intervalId;

const updateCountdown = () => {
    const now = new Date();
    const distance = countdownEnd - now;

    if (distance < 0) {
        clearInterval(intervalId);
        countdown.value = 'Sale has ended';
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.value = `${hours}h ${minutes}m ${seconds}s`;
};

onMounted(() => {
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>
