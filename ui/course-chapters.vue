<template>
    <div class="chapters-list w-full max-w-mdx my-3">
        <h1 class="text-2xl text-[#2D2F31] my-3 font-bold">Course content</h1>
        <div class="total-stats text-sm  flex justify-between">
            <span class="text-gray-600 ">{{ totalStats.totalSections }} sections • {{ totalStats.totalLectures }} lectures • {{
                totalStats.totalDuration }} total length</span>
            <button v-if="!expanded" @pointerdown="expandAllChapters"
                class="text-[#3B199D] underline-offset-4 underline font-bold p-2 rounded mb-4">
                Expand All Chapters
            </button>
            <button v-else @pointerdown="collapseAllChapters"
                class="text-[#3B199D] underline-offset-4 underline font-bold p-2 rounded mb-4">
                Collapse All Chapters
            </button>
        </div>
        <div v-for="(chapter, chapterIndex) in chapters" :key="chapterIndex" class="chapter border border-b-[#D1D7DC]">
            <div class="chapter-header flex justify-between items-center p-4 cursor-pointer bg-[#F7F9FA] hover:bg-gray-200"
                @pointerdown="toggleChapter(chapterIndex)">
                <div class="flex items-center">
                    <button class="text-[#2D2F31]  mr-2">
                        <span v-if="isChapterOpen(chapterIndex)">
                            <fa :icon="['fas', 'chevron-up']" />
                        </span>
                        <span v-else>

                            <fa :icon="['fas', 'chevron-down']" />
                        </span>
                    </button>
                    <h3 class="font-bold text-[#2D2F31]">{{ chapter.title }}</h3>
                </div>
                <span class="text-sm text-gray-500">{{ chapter.duration }}</span>
            </div>

            <div v-if="isChapterOpen(chapterIndex)" class="chapter-content">
                <div v-for="(topic, topicIndex) in chapter.topics" :key="topicIndex"
                    class="topic p-4 pl-10 border-t cursor-pointer hover:bg-gray-50 w-full">
                    <div @pointerdown="toggleTopic(chapterIndex, topicIndex)" class="flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <button class="text-[#2D2F31]  mr-2">
                                <fa :icon="['fas', 'display']" />
                            </button>
                            <span class="text-[#3B199D] underline-offset-4 underline text-sm">{{ topic.title }}</span>
                            <span v-if="isTopicOpen(chapterIndex, topicIndex)" class="rounded-circle w-max bg-red-700">
                                <fa :icon="['fas', 'chevron-up']" size="sm" />
                            </span>
                            <span v-else>
                                <fa :icon="['fas', 'chevron-down']" size="sm" />

                            </span>
                        </div>
                        <div class="flex gap-4 items-center">
                            <span class="text-sm text-[#3B199D] underline-offset-4 underline">Preview</span>
                            <span class="text-sm text-gray-500">{{ topic.duration }}</span>
                        </div>
                    </div>
                    <div v-if="isTopicOpen(chapterIndex, topicIndex)"
                        class="topic-content mx-auto text-sm text-gray-600 mt-2">
                        <div class="flex items-center gap-1">
                            <button class="text-[#2D2F31]  mr-4 invisible">
                                <fa :icon="['fas', 'display']" />
                            </button>
                            <button class="text-[#2D2F31]  mr-4 invisible">
                                <fa :icon="['fas', 'display']" />
                            </button>
                            {{ topic.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    chapters: {
        type: Array,
        required: true,
        default: () => [
            {
                title: "Introduction",
                duration: "2 lectures • 18min",
                topics: [
                    { title: "Introduction & Course Structure", duration: "07:47", description: "Welcome to the GCP Professional Architect Course. This video gives you the introduction..." },
                    { title: "GCP Resources and Exam Guide", duration: "10:41", description: "Learn about the resources and exam guides available for GCP certification." }
                ]
            },
            {
                title: "GCP - The Basics",
                duration: "5 lectures • 1hr",
                topics: [
                    { title: "Basics Overview", duration: "15:30", description: "An overview of GCP basic concepts and architecture." }
                    // Additional topics
                ]
            }
            // Additional chapters
        ]
    }
});
const totalStats = computed(() => {
    let totalSections = 0;
    let totalLectures = 0;
    let totalDurationMinutes = 0;

    // Helper function to convert time to minutes
    const timeToMinutes = (timeStr) => {
        const timeParts = timeStr.split(':');
        if (timeParts.length === 2) {
            return parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
        } else if (timeParts.length === 1) {
            return parseInt(timeParts[0]);
        }
        return 0;
    };

    props.chapters.forEach((chapter) => {
        totalSections += 1;  // Each chapter is a section
        totalLectures += chapter.topics.length;

        chapter.topics.forEach((topic) => {
            totalDurationMinutes += timeToMinutes(topic.duration);
        });
    });

    const hours = Math.floor(totalDurationMinutes / 60);
    const minutes = totalDurationMinutes % 60;

    return {
        totalSections,
        totalLectures,
        totalDuration: `${hours}h ${minutes}m`
    };
})

const openChapters = ref({});
const openTopics = ref({});

const expanded = ref(false)
const expandAllChapters = () => {
    props.chapters.forEach((_, index) => {
        openChapters.value[index] = true;
    });
    expanded.value = true
};
const collapseAllChapters = () => {
    props.chapters.forEach((_, index) => {
        openChapters.value[index] = false;
    });
    expanded.value = false
};

const toggleChapter = (index) => {
    openChapters.value[index] = !openChapters.value[index];
};

const isChapterOpen = (index) => openChapters.value[index] || false;

const toggleTopic = (chapterIndex, topicIndex) => {
    if (!openTopics.value[chapterIndex]) {
        openTopics.value[chapterIndex] = {};
    }
    openTopics.value[chapterIndex][topicIndex] = !openTopics.value[chapterIndex][topicIndex];
};

const isTopicOpen = (chapterIndex, topicIndex) =>
    openTopics.value[chapterIndex] && openTopics.value[chapterIndex][topicIndex] || false;
</script>

<style scoped>
.chapters-list {
    max-width: 700px;
}

.chapter-header {
    transition: background-color 0.2s ease;
}

.topic {
    transition: background-color 0.2s ease;
}

.rounded-circle {
    border-radius: 100%;
}
</style>