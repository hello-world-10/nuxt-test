<template>
    <div class="bg-white border my-3 border-[#D1D7DC] max-w-mdx p-6  w-full">
        <h2 class="text-2xl text-[#2D2F31] font-bold mb-4">{{ objectives.title }}</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#2D2F31]">
            <li v-for="(item, index) in objectives.items" :key="index" class="text-sm flex items-start gap-3">
                <svg class="w-10 h-5 text-[#2D2F31] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    objectives: {
        type: Object,
        required: true,
        default: () => ({
            title: "What you'll learn",
            items: [
                "Google Cloud Platform, Cloud Computing, Architecting a solution on Google Cloud Platform",
                "Google Architecture Framework, Data Lifecycle, Architecture Best practices & Industry Use Cases",
                "Case Study (EHR Healthcare, Helicopter Racing League, Mountkirk Games, TerramEarth)",
                "Google Compute, Storage, Security, Databases, Network, Monitoring, Operations, Big Data and AI services",
                "GCP Infrastructure as a Service, Platform as a Service and Serverless services",
                "Advanced section on ML & AI use cases, Multi-cloud Architecture, Kubernetes Engine & New GCP Products and Releases (updated every month)"
            ]
        })
    }
});
</script>