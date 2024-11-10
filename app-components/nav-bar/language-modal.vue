<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click="closeModal">
        <div class="bg-white w-1/2 max-w-[60rem] p-6 rounded shadow-lg" @click.stop>
            <!-- Modal Header -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Choose a language</h2>
                <button @click="closeModal" class="text-[#2C2D2A] font-thin text-xl">
                    <fa :icon="['fa', 'times']" />
                </button>
            </div>

            <!-- Language List -->
            <div class="grid grid-cols-3 gap-4">
                <button v-for="language in languages" :key="language.name"
                    class="text-left p-1 hover:text-purple-600 w-full"
                    :class="{ 'border border-black border-1': language.name === selectedLanguage }"
                    @click="selectLanguage(language)">
                    <span>
                        {{ language.name }}
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useModal } from '~/composables/useModal';

const modal = useModal();

const languages = [
    { name: 'English' }, { name: 'Deutsch' }, { name: 'Español' }, { name: 'Français' },
    { name: 'Bahasa Indonesia' }, { name: 'Italiano' }, { name: '日本語' }, { name: '한국어' },
    { name: 'Nederlands' }, { name: 'Polski' }, { name: 'Português' }, { name: 'Română' },
    { name: 'Русский' }, { name: 'ภาษาไทย' }, { name: 'Türkçe' }, { name: 'Tiếng Việt' },
    { name: '中文(简体)' }, { name: '中文(繁體)' }
];

const selectedLanguage = ref('English');

const selectLanguage = (language) => {
    selectedLanguage.value = language.name;
    // closeModal();
};

const closeModal = () => {
    modal.hideModal();
};
</script>

<style scoped>
/* Tailwind CSS will handle the styling */
</style>
