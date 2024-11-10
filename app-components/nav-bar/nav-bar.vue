<template>
    <div class="flex flex-wrap items-center justify-around py-3 px-5 border-b gap-2 border-gray-200"
        @pointerleave="showCategories = false">
        <!-- Logo and Categories -->
        <div class="w-24">
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy Logo" />
        </div>
        
        <div class="relative" @pointerenter="showCategories = true" @click="showCategories = true">
            <button class="text-[#2D2F31] hidden md:block hover:text-[#5022c3] text-sm">Categories</button>
            <CategoryDropdown v-if="showCategories" :categories="categories" :hide-category="hideCategories" />
        </div>
        <!-- Search Bar -->
        <div
            class="flex items-center w-auto flex-1 max-w-lg border rounded-full overflow-hidden bg-gray-100 border-[#2D2F31] mt-2 md:mt-0 md:ml-4">
            <span class="px-3 text-gray-500">
                <fa :icon="['fas', 'search']" />
            </span>
            <input type="text" placeholder="Search for anything" class="w-full p-3 bg-transparent focus:outline-none" />
        </div>

        <!-- Menu Links and Actions -->
        <div class="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0 text-sm">
            <div class="relative px-3 hidden min-[1080px]:block" @pointerenter="showBusinessInfo = true" @pointerleave="showBusinessInfo = false">
                <a href="#" class="text-[#2D2F31] hover:text-[#5022c3]">Udemy Business</a>
                <div class="absolute top-11 right-0  mt-2 z-50" v-if="showBusinessInfo">
                    <InfoCard message="Get your team access to over 27,000 top Udemy courses, anytime, anywhere."
                        button-text="Try Udemy Business" />
                </div>
            </div>
            <div class="relative hidden min-[920px]:block" @pointerenter="showTeachInfo = true" @pointerleave="showTeachInfo = false">
                <a href="#" class="text-[#2D2F31] hover:text-[#5022c3]">Teach on Udemy</a>
                <div class="absolute top-11 right-0  mt-2 z-50" v-if="showTeachInfo">
                    <InfoCard message="Turn what you know into an opportunity and reach millions around the world."
                        button-text="Learn more" />
                </div>
            </div>
            <div class="relative px-3" @pointerenter="showCartInfo = true" @pointerleave="showCartInfo = false">
                <button class="text-[#2D2F31]">
                    <fa :icon="['fas', 'shopping-cart']" />
                </button>
                <div class="absolute z-50 top-11 right-0  mt-2" v-if="showCartInfo">
                    <div class="bg-white w-max px-20 py-4 text-center">
                        <p class="mb-2">Your cart is empty</p>
                        <p class="text-[#3B198F] font-semibold">Keep shoping</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center space-x-2 font-bold">

                <button
                    class="px-4 py-2 border border-[#2D2F31] text-[#2D2F31]  hidden md:inline hover:bg-[#1739531f]">Log
                    in</button>
                <button
                    class="relative px-4 py-2 bg-[#2D2F31] text-white  hidden md:inline hover:bg-[#2D2F31] before:content-[''] before:absolute before:inset-0 before:bg-[#1739534a] before:opacity-0 hover:before:opacity-100">Sign
                    up</button>
                <button class="px-4 py-2 border border-[#2D2F31] text-[#2D2F31] " @pointerdown="openLanguageModal">
                    <fa :icon="['fas', 'globe']" />
                </button>
                <Teleport to="#teleports">
                    <Transition>
                        <component :is="modal.component.value" v-if="modal.show.value" @close="modal.hideModal" />
                    </Transition>
                </Teleport>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import categoryDropdown from './category-dropdown.vue';
import languageModal from './language-modal.vue';
import InfoCard from '../../ui/info-card.vue';
import { useModal } from '~/composables/useModal';
import { markRaw } from 'vue';
import CategoryDropdown from './category-dropdown.vue';


const showCategories = ref(false);
const showBusinessInfo = ref(false);
const showTeachInfo = ref(false);
const showCartInfo = ref(false);
const hideCategories = () => showCategories.value = false


const modal = useModal();

const openLanguageModal = () => {
    modal.component.value = markRaw(languageModal);
    modal.showModal();
};


const categories = [
    {
        name: 'Development',
        children: [
            {
                name: 'Web Development',
                children: [
                    { name: 'JavaScript' },
                    { name: 'React' },
                    { name: 'Angular' },
                    { name: 'CSS' },
                    { name: 'Next.js' },
                    { name: 'HTML' },
                    { name: 'ASP.NET Core' },
                    { name: 'Node.js' },
                    { name: 'PHP' },
                    { name: 'Ruby on Rails' },
                ],
            },
            {
                name: 'Data Science',
                children: [
                    { name: 'Machine Learning' },
                    { name: 'Python' },
                    { name: 'Artificial Intelligence' },
                    { name: 'Deep Learning' },
                    { name: 'Generative AI (GenAI)' },
                    { name: 'Large Language Models (LLM)' },
                    { name: 'R (Programming Language)' },
                    { name: 'Data Analysis' },
                    { name: 'Data Visualization' },
                    { name: 'TensorFlow' },
                ],
            },
            {
                name: 'Mobile Development',
                children: [
                    { name: 'Flutter' },
                    { name: 'Swift' },
                    { name: 'Kotlin' },
                    { name: 'React Native' },
                    { name: 'iOS Development' },
                    { name: 'Android Development' },
                ],
            },
            {
                name: 'Programming Languages',
                children: [
                    { name: 'Python' },
                    { name: 'Java' },
                    { name: 'C#' },
                    { name: 'C++' },
                    { name: 'R' },
                    { name: 'Ruby' },
                    { name: 'Go' },
                    { name: 'Rust' },
                    { name: 'MATLAB' },
                    { name: 'Perl' },
                ],
            },
            {
                name: 'Game Development',
                children: [
                    { name: 'Unity' },
                    { name: 'Unreal Engine' },
                    { name: 'Blender' },
                    { name: 'Game Design' },
                    { name: '3D Modeling' },
                ],
            },
            {
                name: 'Database Design',
                children: [
                    { name: 'SQL' },
                    { name: 'MySQL' },
                    { name: 'PostgreSQL' },
                    { name: 'MongoDB' },
                    { name: 'Database Administration' },
                ],
            },
            {
                name: 'Software Testing',
                children: [
                    { name: 'Selenium' },
                    { name: 'JUnit' },
                    { name: 'Test Automation' },
                    { name: 'Manual Testing' },
                ],
            },
            {
                name: 'Software Engineering',
                children: [
                    { name: 'DevOps' },
                    { name: 'Agile' },
                    { name: 'Scrum' },
                    { name: 'Software Architecture' },
                ],
            },
            {
                name: 'Software Development Tools',
                children: [
                    { name: 'Git' },
                    { name: 'Docker' },
                    { name: 'Kubernetes' },
                    { name: 'Jenkins' },
                ],
            },
            {
                name: 'No-Code Development',
                children: [
                    { name: 'Bubble' },
                    { name: 'Webflow' },
                ],
            },
        ],
    },
    {
        name: 'Business',
        children: [
            {
                name: 'Entrepreneurship',
                children: [
                    { name: 'Startups' },
                    { name: 'Leadership' },
                    { name: 'Business Strategy' },
                    { name: 'Business Plan' },
                ],
            },
            {
                name: 'Communication',
                children: [
                    { name: 'Public Speaking' },
                    { name: 'Writing' },
                    { name: 'Presentation Skills' },
                    { name: 'Business Communication' },
                ],
            },
            {
                name: 'Finance & Accounting',
                children: [
                    { name: 'Accounting' },
                    { name: 'Finance' },
                    { name: 'Excel' },
                    { name: 'Cryptocurrency' },
                ],
            },
            {
                name: 'Management',
                children: [
                    { name: 'Project Management' },
                    { name: 'Product Management' },
                    { name: 'Risk Management' },
                    { name: 'Change Management' },
                ],
            },
            {
                name: 'Sales',
                children: [
                    { name: 'Sales Skills' },
                    { name: 'Negotiation' },
                    { name: 'Lead Generation' },
                    { name: 'B2B Sales' },
                ],
            },
        ],
    },
    {
        name: 'Finance & Accounting',
        children: [
            {
                name: 'Accounting & Bookkeeping',
                children: [
                    { name: 'Accounting' },
                    { name: 'Bookkeeping' },
                ],
            },
            {
                name: 'Compliance',
                children: [
                    { name: 'IFRS' },
                    { name: 'SOX' },
                ],
            },
            {
                name: 'Cryptocurrency & Blockchain',
                children: [
                    { name: 'Bitcoin' },
                    { name: 'Ethereum' },
                    { name: 'Cryptocurrency Trading' },
                ],
            },
        ],
    },
    {
        name: 'IT & Software',
        children: [
            {
                name: 'IT Certifications',
                children: [
                    { name: 'AWS Certification' },
                    { name: 'CompTIA A+' },
                    { name: 'Cisco CCNA' },
                ],
            },
            {
                name: 'Network & Security',
                children: [
                    { name: 'Cyber Security' },
                    { name: 'Network Security' },
                    { name: 'Ethical Hacking' },
                ],
            },
            {
                name: 'Hardware',
                children: [
                    { name: 'Raspberry Pi' },
                    { name: 'Arduino' },
                ],
            },
        ],
    },
    {
        name: 'Office Productivity',
        children: [
            {
                name: 'Microsoft',
                children: [
                    { name: 'Excel' },
                    { name: 'PowerPoint' },
                    { name: 'Word' },
                ],
            },
            {
                name: 'Google',
                children: [
                    { name: 'Google Sheets' },
                    { name: 'Google Docs' },
                ],
            },
        ],
    },
    {
        name: 'Personal Development',
        children: [
            {
                name: 'Personal Transformation',
                children: [
                    { name: 'Life Purpose' },
                    { name: 'Neuro-Linguistic Programming' },
                ],
            },
            {
                name: 'Productivity',
                children: [
                    { name: 'Time Management' },
                    { name: 'Focus Mastery' },
                ],
            },
        ],
    },
    {
        name: 'Design',
        children: [
            {
                name: 'Graphic Design',
                children: [
                    { name: 'Photoshop' },
                    { name: 'Illustrator' },
                ],
            },
            {
                name: 'User Experience',
                children: [
                    { name: 'UX Design' },
                    { name: 'Design Thinking' },
                ],
            },
        ],
    },
    {
        name: 'Marketing',
        children: [
            {
                name: 'Digital Marketing',
                children: [
                    { name: 'SEO' },
                    { name: 'Content Marketing' },
                ],
            },
            {
                name: 'Branding',
                children: [
                    { name: 'Brand Strategy' },
                    { name: 'Brand Management' },
                ],
            },
        ],
    },
    {
        name: 'Lifestyle',
        children: [
            {
                name: 'Arts & Crafts',
                children: [
                    { name: 'Drawing' },
                    { name: 'Painting' },
                ],
            },
            {
                name: 'Food & Beverage',
                children: [
                    { name: 'Cooking' },
                    { name: 'Baking' },
                ],
            },
        ],
    },
    {
        name: 'Photography & Video',
        children: [
            {
                name: 'Photography',
                children: [
                    { name: 'Digital Photography' },
                    { name: 'Portrait Photography' },
                ],
            },
            {
                name: 'Video',
                children: [
                    { name: 'Video Production' },
                    { name: 'Video Editing' },
                ],
            },
        ],
    },
    {
        name: 'Health & Fitness',
        children: [
            {
                name: 'Fitness',
                children: [
                    { name: 'Yoga' },
                    { name: 'Pilates' },
                ],
            },
            {
                name: 'Mental Health',
                children: [
                    { name: 'Meditation' },
                    { name: 'Mindfulness' },
                ],
            },
        ],
    },
    {
        name: 'Music',
        children: [
            {
                name: 'Instruments',
                children: [
                    { name: 'Piano' },
                    { name: 'Guitar' },
                ],
            },
            {
                name: 'Production',
                children: [
                    { name: 'Music Production' },
                    { name: 'Ableton Live' },
                ],
            },
        ],
    },
    {
        name: 'Teaching & Academics', children: [{ name: 'Engineering', children: [{ name: 'Mechanical Engineering' }, { name: 'Electrical Engineering' }, { name: 'Civil Engineering' }, { name: 'Chemical Engineering' },], }, { name: 'Humanities', children: [{ name: 'History' }, { name: 'Philosophy' }, { name: 'Literature' }, { name: 'Art History' },], }, { name: 'Math', children: [{ name: 'Algebra' }, { name: 'Calculus' }, { name: 'Statistics' }, { name: 'Geometry' },], }, { name: 'Science', children: [{ name: 'Physics' }, { name: 'Biology' }, { name: 'Chemistry' }, { name: 'Environmental Science' },], }, { name: 'Social Science', children: [{ name: 'Psychology' }, { name: 'Sociology' }, { name: 'Political Science' }, { name: 'Anthropology' },], }, { name: 'Language Learning', children: [{ name: 'English' }, { name: 'Spanish' }, { name: 'French' }, { name: 'German' },], }, { name: 'Test Prep', children: [{ name: 'SAT' }, { name: 'ACT' }, { name: 'GRE' }, { name: 'GMAT' },], }, { name: 'Online Education', children: [{ name: 'Teaching Online' }, { name: 'Instructional Design' }, { name: 'Educational Technology' }, { name: 'Blended Learning' },], },],
    },
];

</script>
