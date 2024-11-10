<template>
    <div @pointerleave="hideCategory"
        class="absolute z-50 left-0 top-11 mt-2 min-w-fit h-[80svh] max-h-[500px] bg-white border border-gray-200 shadow-lg px-4 gap-6 flex text-sm overflow-y-hidden">
        <div class="w-60 space-y-2 pt-4">
            <div v-for="category in categories" :key="category.name" class="flex flex-col">
                <h3 class="text-[#2D2F31] hover:text-[#5022c3] cursor-pointer truncate flex items-center justify-between"
                    @mouseenter="setSubcategories(category)">
                    <span>{{ category.name }}</span>
                    <fa :icon="['fa-solid', 'greater-than']" size="sm" />
                </h3>
            </div>
        </div>

        <div v-if="subcategories.length > 0" class="w-60 border-l border-gray-200 pl-6 space-y-2 pt-4 flex-1">
            <div v-for="subcategory in subcategories" :key="subcategory.name" class="w-full">
                <h4 class="text-[#2D2F31] hover:text-[#5022c3] cursor-pointer truncate flex items-center justify-between"
                    @mouseenter="setLeafcategories(subcategory)">
                    <span>{{ subcategory.name }}</span>
                    <fa :icon="['fa-solid', 'greater-than']" size="sm" />
                </h4>
            </div>
        </div>

        <div v-if="leafcategories.length > 0" class="w-60 border-l border-gray-200 pl-6 space-y-2 pt-4 flex-1">
            <h4 class="text-[#6a6f73] font-semibold">Popular topics</h4>
            <ul class="flex flex-col gap-1 w-full">
                <li v-for="leaf in leafcategories" :key="leaf.name"
                    class="text-gray-600 hover:text-[#5022c3] cursor-pointer truncate flex items-center justify-between">
                    <span>{{ leaf.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    categories: {
        type: Array,
        required: true,
    },
    hideCategory: {
        type: Function,
        required: false,
    }
});

const subcategories = ref(props.categories[0]?.children || []);
const leafcategories = ref([]);
const activeCategory = ref(props.categories[0]);
const activeSubcategory = ref(null);


const setSubcategories = (category) => {
    subcategories.value = category.children || [];
    leafcategories.value = [];
    activeCategory.value = category;
};

const setLeafcategories = (subcategory) => {
    leafcategories.value = subcategory.children || [];
};
</script>