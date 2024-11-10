<template>
    <div class="bg-white p-3 text-center border border-gray-200 shadow-md w-80">
        <p class="text-[#2D2F31] text-lg font-semibold mb-4 leading-5">
            {{ props.message }}
        </p>
        <button class="bg-[#1c1d1f] text-white py-3 px-4 font-bold hover:bg-[#3E4143] w-full">
            {{ props.buttonText }}
        </button>
    </div>

</template>

<script setup>

const props = defineProps({
    message: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    }
})
</script>