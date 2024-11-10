<template>
    <div class="bg-white text-[#2D2F31] w-full max-w-mdx">
      <h2 class="text-xl font-bold  mb-4">{{ title }}</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <li class="text-sm flex items-center gap-3">
          <fa :icon="['fas', 'display']" />
          {{ length }}
        </li>
        <li class="text-sm flex items-center gap-3">
          <fa :icon="['fa', 'circle-question']" />
          {{ noPracticeTests }} practice tests
        </li>
        <li class="text-sm flex items-center gap-3">
          <fa :icon="['fas', 'cloud-arrow-down']" />
          {{ noOfResources }} downloadable resources
        </li>
        <li class="text-sm flex items-center gap-3">
          <fa :icon="['fa-solid', 'mobile-screen']" />
          Access on {{ accessibility }}
        </li>
        <li class="text-sm flex items-center gap-3">
          <fa :icon="['fas', 'trophy']" />
          Certificate of completion
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
      default: "This Course Includes:"
    },
    length: {
      type: String,
      required: true,
      default: '22.5 hours on-demand video'
    },
    noPracticeTests: {
      type: Number,
      required: true,
      default: 2
    },
    noOfResources: {
      type: Number,
      required: true,
      default: 33
    },
    accessibility: {
      type: String,
      required: true,
      default: 'mobile and TV'
    },
    certificate: {
      type: Boolean,
      required: true,
      default: true
    }
  });
  </script>
