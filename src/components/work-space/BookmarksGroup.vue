<script setup>
    import IconChevronRight from '../icons/IconChevronRight.vue';
</script>

<script>
    export default {
        data() {
            return {
                isCollapsed: false
            };
        },
        methods: {
            toggleAccordion() {
                this.isCollapsed = !this.isCollapsed;
            }
        }
    };
</script>

<template>
    <div class="group">
        <div class="bookmark-header" @click="toggleAccordion">
            <slot name="groupIcon"></slot>
            <p>
                <slot name="groupTitle"></slot>    
            </p>
            <IconChevronRight />
        </div>

        <div class="bookmark-content" :class="{ collapsed: isCollapsed }">
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .group {
        background: rgba( 255, 255, 255, 0.1 );
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba(62, 62, 62, 0.37);
        backdrop-filter: blur( 10px );
        -webkit-backdrop-filter: blur( 10px );
        border-radius: 10px;
        border: 1px solid transparent;
        border-radius: 1rem;
        transition: var(--anim);
        overflow: hidden;

        &:hover {
            border-color: #e1e1e1;
        }

        & .bookmark-header {
            display: flex;
            align-items: center;
            gap: .75rem;
            color: #f8f8f8;
            padding: 1rem;
            cursor: pointer;

            & p {
                flex: 1;
                font-size: 1.15rem;
                font-weight: 600;
                text-transform: capitalize;
                margin-bottom: 0;
            }
            & svg  {
                width: 25px;
                height: 25px;
                transition: var(--anim);
                transform: rotate(180deg);
            }
        }
        &.collapsed .bookmark-header svg {
            transform: rotate(0);
        }

        & .bookmark-content {
            display: grid;
            grid-template-rows: 1fr;
            padding: 0 1rem 1rem 1rem;
            transition: grid-template-rows var(--anim);

            & ul {
                min-height: 0;
                padding-left: 0;
                margin: 0;
            }
            &.collapsed {
                grid-template-rows: 0fr;
                padding-bottom: 0;
            }
        }
    }
</style>