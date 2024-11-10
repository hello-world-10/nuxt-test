<template>
    <div class="w-full flex flex-col justify-between py-6 text-[#2D2F31] min-[1080px]:text-white min-[1080px]:h-[386px] max-h-fit">
        <!-- Breadcrumb Navigation -->
        <Breadcrumb :items="category" />

        <!-- Course Thumbnail -->
        <div class="min-[1080px]:hidden">
            <img src="https://img-b.udemycdn.com/course/240x135/3765452_7294_6.jpg"
                srcset="https://img-b.udemycdn.com/course/240x135/3765452_7294_6.jpg 240w, https://img-b.udemycdn.com/course/480x270/3765452_7294_6.jpg 480w, https://img-b.udemycdn.com/course/750x422/3765452_7294_6.jpg 750w"
                class="w-full" />
        </div>

        <!-- Course Title -->
        <h1 class="text-3xl font-bold inline-block p-1 mt-5 ">{{ courseName }}</h1>

        <!-- Course Description -->
        <p class="text-lg">{{ description }}</p>

        <!-- Ratings, Student Count -->
        <div class="flex items-center gap-1 mt-3">
            <span class="font-semibold ">{{ averageRating }}</span>
            <NuxtRating :read-only="true" :rating-value="averageRating" />
            <i class="fas fa-star ml-1"></i>
            <a href="#" class=" text-sm ml-2 underline text-primary">({{ ratingCount }} ratings)</a>
            <span class=" text-sm ml-2">{{ studentCount }} students</span>
        </div>

        <!-- Teacher Information -->
        <p class=" text-sm mt-1">Created by <a href="#" class="text-primary hover:underline">{{ teacher
                }}</a></p>

        <!-- Last Update, Language, Subtitles -->
        <div class="flex flex-col justify-start gap-2 text-sm mt-2">
            <div class="flex items-center gap-1">
                <fa :icon="['fas', 'circle-exclamation']" />

                Last updated {{ lastUpdated }}
            </div>
            <div class="flex items-center gap-1">
                <fa :icon="['fas', 'globe']" />
                <i class="fas fa-language mr-1"></i> {{ language }}
            </div>
            <div class="flex items-center gap-1">
                <fa :icon="['fas', 'globe']" />

                <i class="fas fa-closed-captioning mr-1"></i> {{ subtitles }}
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from "~/ui/bread-crumb.vue"


const props = defineProps({
    category: {
        type: Array,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    averageRating: {
        type: Number,
        required: true,
    },
    ratingCount: {
        type: Number,
        required: true,
    },
    studentCount: {
        type: Number,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    lastUpdated: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    subtitles: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
.text-primary {
    color: #371783;
}

@media (min-width: 1080px) {
    .text-primary {
        color: #6E708D;
    }
}
</style>
