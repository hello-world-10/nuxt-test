<template>
    <nav>
        <span class="text-sm text-primary font-bold" v-for="(item, index) in items"
            :key="index">
            <a :href="item.url">{{ item.name }}</a>
            <span v-if="index < items.length - 1">
                &nbsp;
                <fa :icon="['fa-solid', 'greater-than']" size="xs" />
                &nbsp;
            </span>
        </span>
    </nav>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
})
</script>

<style scoped>
.text-primary {
  color: #3B198F;
}

@media (min-width: 1080px) {
  .text-primary {
    color: #C0C4FC;
  }
}

</style>
