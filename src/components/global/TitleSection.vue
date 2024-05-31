<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="section-title">
        <p>{{ title }}</p>
        <slot></slot>
    </div>
</template>

<style scoped>
    .section-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        & p {
            color: #fff;
            font-size: 1.75rem;
            font-weight: 700;;
            margin-bottom: 0;
        }
    }
</style>