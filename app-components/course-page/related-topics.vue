<template>
    <div class="bg-white my-3 max-w-mdx w-full">
      <h2 class="text-[#2D2F31] text-2xl font-bold mb-4 ">Explore related topics</h2>
      <div class="flex flex-wrap gap-4">
        <RoundedTextButton
          v-for="(topic, index) in topics" 
          :key="index"
          :text="topic.text" 
          :link="topic.link" 
          :onClick="topic.onClick"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import RoundedTextButton from '~/ui/rounded-text-button.vue';
  
  const props = defineProps({
    topics: {
      type: Array,
      required: true,
      default: () => [
        { text: 'Google Cloud Professional Cloud Architect', link: '#' },
        { text: 'IT Certifications', link: '#' },
        { text: 'IT & Software', link: '#' }
      ]
    }
  });
  </script>
  