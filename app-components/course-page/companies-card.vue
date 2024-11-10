<template>
    <div class="border my-3 border-[#D1D7DC] p-4 flex flex-col items-center text-[#2D2F31] max-w-mdx">
        <div class="mb-4">
            <p class="text-base font-bold">{{ title }}</p>
            <p class="text-sm ">
                {{ description }} <a :href="link" class="text-[#3B199D] underline-offset-4 underline">Learn more</a>
            </p>
        </div>
        <div class="flex justify-between w-full">
            <img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="logo.alt" :height="logo.height"
                :width="logo.width" loading="lazy" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
        default: "Top companies offer this course to their employees"
    },
    description: {
        type: String,
        required: true,
        default: "This course was selected for our collection of top-rated courses trusted by businesses worldwide."
    },
    link: {
        type: String,
        required: true,
        default: "#"
    },
    logos: {
        type: Array,
        required: true,
        default: () => [
            { src: "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg", alt: "Nasdaq", height: "38", width: "115" },
            { src: "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg", alt: "Volkswagen", height: "38", width: "44" },
            { src: "https://s.udemycdn.com/partner-logos/v4/box-dark.svg", alt: "Box", height: "38", width: "67" },
            { src: "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg", alt: "NetApp", height: "38", width: "115" },
            { src: "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg", alt: "Eventbrite", height: "38", width: "115" }
        ]
    }
});
</script>