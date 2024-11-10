<template>
    <div class="udemy-offer w-full mx-auto flex flex-col text-[#2D2F31] px-5 pb-5 bg-white">
        <div class="tabs flex justify-around mb-4 font-bold hover:text-[#2D2F31]">
            <button class="tab py-2 px-4 border-b-2 flex-1"
                :class="{ 'border-[#2D2F31] text-[#2D2F31] hover:text-[#2D2F31]': activeTab === 'Personal', 'border-transparent text-[#6a6f73]': activeTab !== 'Personal' }"
                @click="activeTab = 'Personal'">Personal</button>
            <button class="tab py-2 px-4 border-b-2 flex-1"
                :class="{ 'border-[#2D2F31] text-[#2D2F31] hover:text-[#2D2F31]': activeTab === 'Teams', 'border-transparent text-[#6a6f73]': activeTab !== 'Teams' }"
                @click="activeTab = 'Teams'">Teams</button>
        </div>
        <div v-if="activeTab === 'Personal'" class="w-full">
            <div class="">
                <h2 class="text-lg font-semibold">Subscribe to Udemy's top courses</h2>
                <p class="mb-4 text-sm underline-offset-4">Get this course, plus 12,000+ of our top-rated courses, with
                    Personal Plan. <a href="#" class="text-[#3B199D] underline font-bold">Learn more</a></p>
            </div>

            <button class="try-free bg-purple-600 hover:bg-[#8710D8] text-white py-2 px-4 mb-2 w-full">Try Personal Plan
                for free</button>
            <div class="flex flex-col items-center w-full text-xs">
                <p class="text-gray-600 mb-1">Starting at $10.00 per month after trial</p>
                <p class="text-gray-600 mb-4">Cancel anytime</p>
                <div class="flex items-center my-4 w-full">
                    <div class="flex-grow border-t border-gray-300"></div>
                    <span class="mx-4 text-gray-500">or</span>
                    <div class="flex-grow border-t border-gray-300"></div>
                </div>
            </div>
            <div class="one-time-purchase flex items-center mb-4">
                <span class="price text-2xl font-bold mr-2">$69.99</span>
            </div>
            <button class="add-to-cart w-full text-[#2D2F31] py-3 px-4 font-bold mb-4 border border-[#2D2F31]">Add to
                cart</button>
            <div class="flex flex-col items-center w-full text-xs">
                <p class="text-gray-600 mb-2">30-Day Money-Back Guarantee</p>
                <p class="text-gray-600 mb-4">Full Lifetime Access</p>
            </div>
            <div class="actions flex justify-around mb-4 text-[#2D2F31] font-bold">
                <a href="#">Share</a>
                <a href="#">Gift this course</a>
                <a href="#">Apply Coupon</a>
            </div>
            <div class="coupon flex justify-between items-center mb-4 border border-dashed py-3 px-4">
                <p class="text-gray-600">NVDPP25 is applied</p>
                <button class="remove-coupon text-red-600">✕</button>
            </div>
            <div class="apply-coupon flex">
                <input type="text" placeholder="Enter Coupon" class="flex-1 py-2 px-3 border border-[#2D2F31]" />
                <button class="apply bg-[#2D2F31] text-white py-2 px-4 ">Apply</button>
            </div>
        </div>
        <div v-else class="w-full flex flex-col gap-4">
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="Udemy Business" width="141"
                height="24" class="purchase-team-tabs--logo--mRRl-" loading="lazy">
            <p>Subscribe to this course and 27,000+ top‑rated Udemy courses for your organization.</p>
            <button class="try-free bg-purple-600 hover:bg-[#8710D8]  text-white py-2 px-4 mb-2 w-full">Try Personal
                Plan for free</button>
            <ul class="space-y-2">
                <li class="flex items-center"> <span class="inline-block w-6">✓</span> <span>For teams of
                        2 or more users</span> </li>
                <li class="flex items-center"> <span class="inline-block w-6">✓</span> <span>27,000+
                        fresh & in-demand courses</span> </li>
                <li class="flex items-center"> <span class="inline-block w-6">✓</span> <span>Learning
                        Engagement tools</span> </li>
                <li class="flex items-center"> <span class="inline-block w-6">✓</span> <span>SSO and LMS
                        Integrations</span> </li>
            </ul>


        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('Personal');

const selectLanguage = (language) => {
    console.log(`Language selected: ${language.name}`);
};

const items = [
    { name: 'English', url: '#' },
    { name: 'French', url: '#' },
    { name: 'Spanish', url: '#' },
];
</script>

<style scoped>
.tab.active {
    border-color: black;
}
</style>