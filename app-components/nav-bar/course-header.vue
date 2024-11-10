<template>
    <div class="bg-[#1C1D1F] text-white p-4 w-full">
      <p class="font-bold">{{ title }}</p>
      <div class="flex items-center gap-1">
        <span class="font-semibold">{{ averageRating }}</span>
        <NuxtRating :read-only="true" :rating-value="averageRating" />
        <i class="fas fa-star ml-1"></i>
        <a href="#" class="text-sm ml-2 underline text-primary">({{ ratingCount }} ratings)</a>
        <span class="text-sm ml-2">{{ studentCount }} students</span>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
      default: "Google Cloud (GCP) Professional Cloud Architect"
    },
    averageRating: {
      type: Number,
      required: true,
      default: 4.5
    },
    ratingCount: {
      type: Number,
      required: true,
      default: 804
    },
    studentCount: {
      type: Number,
      required: true,
      default: 6544
    }
  });
  </script>
  