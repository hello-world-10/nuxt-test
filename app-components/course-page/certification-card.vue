<template>
    <div class="flex flex-col items-start bg-white border my-3 border-[#D1D7DC] max-w-mdx w-full">
        <p class=" text-[#2D2F31] bg-[#F7F9FA] font-bold mb-4 w-full p-6">
            {{ course.description }}
            <a :href="course.link" class="text-[#3B199D] underline-offset-2 underline">Learn more</a>
        </p>
        <div class="flex items-center space-x-4 mb-4 px-6 pb-3">
            <img :src="course.logo" :alt="course.name" class="w-16 h-16" />
            <div class="">
                <h2 class="text-base font-bold text-[#3B199D] mb-2">{{ course.name }}</h2>
                <p class="text-xs text-gray-600">Issued by {{ course.issuedBy }}</p>
            </div>
        </div>
       
    </div>
</template>

<script setup>
defineProps({
    course: {
        type: Object,
        required: true,
        default: () => ({
            name: 'Professional Cloud Architect',
            issuedBy: 'Google Cloud',
            description: 'Prepare for your certification with this course.',
            logo: 'https://img-c.udemycdn.com/open-badges/v2/badge-class/1669080693/c1426e99-cdec-4dd5-bd9a-f1bda341759711601063208505863200.png',
            link: '#'
        })
    }
});
</script>