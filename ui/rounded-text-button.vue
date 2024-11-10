<template>
    <button @click="handleClick" class="text-[#2D2F31] py-3 px-4 rounded-full hover:bg-[#E3E7EA] border border-black font-bold">
      {{ text }}
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
      default: 'Click Me'
    },
    link: {
      type: String,
      required: false,
      default: null
    },
    onClick: {
      type: Function,
      required: false,
      default: null
    }
  });
  
  function handleClick() {
    if (onClick) {
      onClick();
    } else if (link) {
      window.location.href = link;
    }
  }
  </script>
  