<script setup>
    import JudulPath from './JudulPath.vue';
    import ItemPath from './ItemPath.vue';
    import IconLaptop from '../icons/IconLaptop.vue';
    import IconStore from '../icons/IconStore.vue';
    import IconController from '../icons/IconController.vue';
    import IconChevronRight from '../icons/IconChevronRight.vue';
</script>

<template>
    <div class="main-path">
        <JudulPath msg="Mau ngapain hari ini?" />
            
        <div class="wrap-item-path">
            <ItemPath>
                <template #icon>
                    <IconLaptop />
                </template>
                <template #title>Kerjo</template>
                <template #desc>Mencari nafkah lewat jalur bekerja sebagai hacker di PT Mencari Cinta Sejati. &#128526;</template>
                <a href="/layout/work-space.html">
                    <span>siap</span>
                    <IconChevronRight />
                </a>
            </ItemPath>

            <ItemPath>
                <template #icon>
                    <IconStore />
                </template>
                <template #title>Dodolan</template>
                <template #desc>Mencari nafkah lewat jalur jualan, semacam side quest. &#128540;</template>
                <a href="">
                    <span>woke</span>
                    <IconChevronRight />
                </a>
            </ItemPath>

            <ItemPath>
                <template #icon>
                    <IconController />
                </template>
                <template #title>Hiburan</template>
                <template #desc>Kalau waktu sudah mulai melonggar, waktunya rehat sejenak. &#129321;</template>
                <a href="">
                    <span>gass</span>
                    <IconChevronRight />
                </a>
            </ItemPath>
        </div>
    </div>
</template>

<style scoped>
    .main-path {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;
        color: var(--black);

        & .wrap-item-path {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5rem;
            padding-inline: 15%;

            & .item-path > svg {
                color: var(--black-soft);
                width: 35px;
                aspect-ratio: 1;
                transition: var(--anim);
            }
            & .item-path:hover > svg {
                color: var(--primary);
            }

            & a {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: .5rem;
                width: fit-content;
                color: var(--primary);
                text-decoration: none;
                padding: .5rem .5rem .5rem 1rem;
                background-color: transparent;
                border-radius: 3rem;
                transition: var(--anim);

                & span {
                    display: block;
                    font-size: .9rem;
                    font-weight: 500;
                    text-transform: uppercase;
                }
                & svg {
                    width: 20px;
                    height: auto;
                }
            }
            & .item-path:hover a {
                color: var(--white);
                background-color: var(--primary);
            }
        }
    }
</style>