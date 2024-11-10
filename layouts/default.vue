<template>
    <div>
        <Banner />
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
import Header from "../app-components/nav-bar/nav-bar.vue";
import Footer from "../app-components/footer.vue";
import Banner from "../app-components/nav-bar/banner.vue";

</script>