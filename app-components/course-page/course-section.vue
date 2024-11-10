<template>
  <div class="bg-white my-5 text-[#2D2F31] max-w-mdx w-full text-justify">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <p class="text-gray-800 mb-4">
      <span v-if="!showMore">
        {{ shortenedDescription }}...
      </span>
      <span v-if="showMore">
        {{ description }}
      </span>
    </p>
    <button @click="toggleShowMore" v-if="isDescriptionLong"
      class="text-[#3B199D] underline-offset-4 flex items-center gap-2"> {{ showMore ? 'Show Less' : 'Show More' }}
      <fa :icon="['fas', showMore ? 'chevron-up' : 'chevron-down']" size="sm" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Course Details"
  },
  description: {
    type: String,
    required: true,
    default: "This is a sample course description."
  },
  maxLength: {
    type: Number,
    required: true,
    default: 150
  }
});

const showMore = ref(false);
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const isDescriptionLong = props.description.length > props.maxLength;

const shortenedDescription = computed(() => {
  return props.description.slice(0, props.maxLength);
});
</script>
