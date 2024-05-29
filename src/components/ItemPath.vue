
<template>
    <div class="item-path">
        <slot name="icon"></slot>
        <p>
            <slot name="title"></slot>
        </p>
        <slot></slot>
    </div>
</template>

<style scoped>
    .item-path {
        padding: 1rem 2rem;
        background-color: #ffffff;
        border-radius: .5rem;
    }
</style>