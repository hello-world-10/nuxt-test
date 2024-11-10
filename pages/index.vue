<template>
    <div class="flex flex-col items-center w-full">
        <div class="fixed top-0 z-50 w-full" v-if="headerVisible">
            <CourseHeader title="Google Cloud (GCP) Professional Cloud Architect" :averageRating="4.5"
                :ratingCount="804" :studentCount="6544" />
        </div>
        <div class="w-full mx-auto bg-white min-[1080px]:bg-[#1C1D1F]">
            <div class="container mx-auto flex justify-around w-full">
                <div class="container max-w-mdx">

                    <CourseCard :category="[
                        { name: 'IT & Software', url: '#' },
                        { name: 'IT Certifications', url: '#' },
                        { name: 'Google Cloud Professional Cloud Architect', url: '#' }
                    ]" courseName="Google Cloud (GCP) Professional Cloud Architect"
                        description="Classroom style coaching for GCP (Beginner to experienced level). Includes new case Studies (EHR, Helicopter Racing)"
                        :averageRating="4.5" :ratingCount="804" :studentCount="6544" teacher="Ashutosh Mishra"
                        lastUpdated="1/2022" language="English" subtitles="English [Auto], Japanese [Auto]" />
                </div>

                <div class="max-[1080px]:hidden  relative my-6 border border-white">
                    <div v-if="isVisible" class="max-[1080px]:hidden  relative">
                        <img src="https://img-b.udemycdn.com/course/240x135/3765452_7294_6.jpg"
                            srcset="https://img-b.udemycdn.com/course/240x135/3765452_7294_6.jpg 240w, https://img-b.udemycdn.com/course/480x270/3765452_7294_6.jpg 480w, https://img-b.udemycdn.com/course/750x422/3765452_7294_6.jpg 750w"
                            class="w-[340px]" />
                        <div class="max-w-mdx side-bar  absolute z-40 bg-white">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex justify-around items-stretch relative container mx-auto w-full h-full">

            <div class="w-max flex flex-col items-center">
                <div class="w-full min-[1080px]:hidden">
                    <div class="max-w-mdx side-bar">
                        <SideBar />
                    </div>
                </div>
                <CertificationCard />
                <WhatYouWillLearnCard />
                <RelatedTopics
                    :topics="[{ text: 'Google Cloud Professional Cloud Architect', link: 'https://www.google.com' }, { text: 'IT Certifications', link: 'https://www.example.com' }, { text: 'IT & Software', link: 'https://www.example.com' }]" />
                <CourseContent />
                <CompaniesCard />
                <ChaptersList :chapters="chaptersData" />
                <CourseSection title="Requirements"
                    description="No Prerequisite. Basic Cloud computing knowledge beneficial." :maxLength="100" />
                <CourseSection title="Description"
                    description="Immerse in a classroom style coaching of GCP cloud architect certification topics, regularly updated with in-depth lectures and bonus topics to broaden your architecture knowledge. Continuously updated with new GCP product launches (GA) and feature enhancements.
This course is also ideal for cloud professionals from AWS & Azure background to familiarise themselves with GCP.
This course focuses on building your architect instinct, which is supplemented with industry use cases, data management, master data management and data and analytics ecosystem. Every aspect of GCP services has been categorised into use cases and comparative categories to help you become an informed architect.
Being a cloud architect is not just about technical details, but also about business strategy, planning, development and operations of GCP platforms. The business process and technical process help facilitate Return on Investment (ROI) for business and technical requirements."
                    :maxLength="150" />

            </div>
            <div class="w-max mb-5">
                <div v-if="!isVisible"
                :class="coverSidebar ? 'z-20' : 'z-50'"
                    class="max-w-mdx side-bar sticky top-5 right-0 h-max shadow-lg hidden min-[1080px]:block ">

                    <transition name="fade" enter-active-class="transition-opacity duration-1000"
                        leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                        enter-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <div>
                            <SideBar />
                        </div>
                    </transition>
                </div>
                <div v-if="isVisible" :class="isVisible ? 'invisible' : 'visible'"
                    class="max-w-mdx side-bar sticky top-0 right-0 h-full shadow-lg z-50 hidden min-[1080px]:block self-start">

                    <transition name="fade" enter-active-class="transition-opacity duration-1000"
                        leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                        enter-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <div>
                            <SideBar />
                        </div>
                    </transition>
                </div>
            </div>

        </div>



    </div>
</template>

<script setup>
import CourseHeader from '~/app-components/nav-bar/course-header.vue';
import CourseCard from '~/app-components/course-page/course-card.vue';
import CertificationCard from '~/app-components/course-page/certification-card.vue';
import WhatYouWillLearnCard from '~/app-components/course-page/what-you-will-learn-card.vue';
import RelatedTopics from '~/app-components/course-page/related-topics.vue';
import CourseContent from '~/app-components/course-page/course-meta.vue';
import ChaptersList from '~/ui/course-chapters.vue';
import CompaniesCard from '~/app-components/course-page/companies-card.vue';
import CourseSection from '~/app-components/course-page/course-section.vue';
import SideBar from '~/app-components/side-bar.vue';


import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(true);
const headerVisible = ref(true);
const coverSidebar = ref(false);

function handleScroll() {
    isVisible.value = window.scrollY < 500;
    headerVisible.value = window.scrollY > 20;

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight-400) {
    coverSidebar.value = true;
  } else {
    coverSidebar.value = false;
  }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const chaptersData = [
    {
        title: "Introduction",
        duration: "2 lectures • 18min",
        topics: [
            { title: "Introduction & Course Structure", duration: "07:47", description: "Welcome to the GCP Professional Architect Course. This video gives you the introduction and explains the course structure." },
            { title: "GCP Resources and Exam Guide", duration: "10:41", description: "Learn about the resources and exam guides available for GCP certification." }
        ]
    },
    {
        title: "GCP - The Basics",
        duration: "5 lectures • 1hr",
        topics: [
            { title: "Basics Overview", duration: "15:30", description: "An overview of GCP basic concepts and architecture." },
            { title: "Setting Up Your Environment", duration: "12:20", description: "How to set up your GCP environment for optimal use." },
            { title: "Google Cloud Console Tour", duration: "10:10", description: "A tour of the GCP Console to get familiar with its features." }
        ]
    },
    {
        title: "Core Services - Compute",
        duration: "3 lectures • 45min",
        topics: [
            { title: "Compute Engine Overview", duration: "15:10", description: "Introduction to Compute Engine and its use cases." },
            { title: "App Engine Basics", duration: "14:00", description: "Learn the basics of App Engine and how to deploy applications." }
        ]
    },
    {
        title: "Core Services - Storage",
        duration: "2 lectures • 30min",
        topics: [
            { title: "Cloud Storage Basics", duration: "15:00", description: "Overview of Cloud Storage and its features." },
            { title: "Data Transfer and Backup", duration: "15:00", description: "Learn how to transfer and back up data in GCP." }
        ]
    },
    {
        title: "Core Services - Networking",
        duration: "4 lectures • 1hr 20min",
        topics: [
            { title: "VPC and Network Fundamentals", duration: "20:00", description: "Introduction to Virtual Private Cloud and networking basics in GCP." },
            { title: "Cloud Load Balancing", duration: "15:00", description: "Learn about load balancing techniques in GCP." },
            { title: "Interconnecting Networks", duration: "20:00", description: "Understand how to connect networks across different regions." }
        ]
    },
    {
        title: "Big Data and Machine Learning",
        duration: "3 lectures • 50min",
        topics: [
            { title: "BigQuery Overview", duration: "20:00", description: "Introduction to BigQuery and its use for big data analytics." },
            { title: "Machine Learning Basics", duration: "15:00", description: "Learn the basics of machine learning on GCP." }
        ]
    },
    {
        title: "Security and Identity",
        duration: "3 lectures • 40min",
        topics: [
            { title: "IAM Basics", duration: "15:00", description: "Learn about Identity and Access Management (IAM) in GCP." },
            { title: "Data Encryption", duration: "10:00", description: "Understand data encryption options available in GCP." }
        ]
    },
    {
        title: "Monitoring and Management",
        duration: "4 lectures • 1hr",
        topics: [
            { title: "Cloud Monitoring Basics", duration: "15:00", description: "Introduction to Cloud Monitoring and how to use it." },
            { title: "Cloud Logging", duration: "15:00", description: "Learn how to set up and use Cloud Logging." },
            { title: "Performance Monitoring", duration: "20:00", description: "Methods to monitor and optimize GCP performance." }
        ]
    },
    {
        title: "Case Study - Real World Application",
        duration: "1 lecture • 30min",
        topics: [
            { title: "Building a Scalable Application", duration: "30:00", description: "Case study on building a scalable application with GCP services." }
        ]
    },
    {
        title: "Certification Refresher & Test",
        duration: "2 lectures • 1hr",
        topics: [
            { title: "Certification Exam Tips", duration: "30:00", description: "Tips and best practices for passing the GCP certification exam." },
            { title: "Practice Test", duration: "30:00", description: "A practice test to help you prepare for the certification exam." }
        ]
    }
];

</script>

<style scoped>
.max-w-1184 {
    max-width: 1184px;
    box-sizing: border-box;
}

.side-bar {
    margin: auto;
}

@media (min-width: 1080px) {
    .side-bar {
        width: 340px;
    }
}
</style>