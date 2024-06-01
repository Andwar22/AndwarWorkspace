<script setup>
    import { ref, markRaw } from 'vue';
    import { useRouter } from 'vue-router';
    import JudulPath from './components/main-page/JudulPath.vue';
    import ItemPath from './components/main-page/ItemPath.vue';
    import IconCoding from './components/icons/IconCoding.vue';
    import IconBox from './components/icons/IconBox.vue';
    import IconController from './components/icons/IconController.vue';

    // Define components
    const componentMap  = {
        IconCoding: markRaw(IconCoding),
        IconBox: markRaw(IconBox),
        IconController: markRaw(IconController)
    };

    // Data
    const itemsGroups = ref([
        {
            item1: componentMap .IconCoding,
            item2: 'Kerjo',
            item3: 'Mencari nafkah lewat jalur bekerja sebagai hacker di PT Mencari Cinta Sejati. &#128526;'
        },
        {
            item1: componentMap .IconBox,
            item2: 'Dodolan',
            item3: 'Mencari nafkah tambahan lewat jalur jualan, semacam side quest lah ya. &#128540;'
        },
        {
            item1: componentMap .IconController,
            item2: 'Nyantai',
            item3: 'Kalau waktu sudah mulai melonggar, waktunya rehat sejenak pemirsa. &#129321;'
        }
    ]);

    // Router
    const router = useRouter();

    // Methods
    const handleClick = (index) => {
        if (index === 0) {
            goToWorkSpace();
        } else if (index === 1) {
            goToSellSpace();
        } else if (index === 2) {
            goToPlaySpace();
        }
    };

    const goToWorkSpace = () => {
        router.push({ name: 'WorkSpace' });
    };

    const goToSellSpace = () => {
        router.push({ name: 'SellSpace' });
    };

    const goToPlaySpace = () => {
        router.push({ name: 'PlaySpace' });
    };
</script>

<template>
    <div class="main-page">
        <div class="navigate">
            <JudulPath msg="Mau ngapain hari ini?" />
            
            <div class="menu-path">
                <ItemPath v-for="(itemGroup, index) in itemsGroups" :key="index" @click="handleClick(index)">
                    <template #icon>
                        <component :is="itemGroup.item1"></component>
                    </template>
                    <template #title>{{ itemGroup.item2 }}</template>
                    <template #desc>
                        <span v-html="itemGroup.item3"></span>
                    </template>
                </ItemPath>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main-page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--black);
        background-image: url(https://img.freepik.com/free-vector/dark-black-background-design-with-stripes_1017-38064.jpg?t=st=1709893029~exp=1709896629~hmac=baf80761a35e50333bb646de1f78daae402122d060bdeb7c186bad674be24a39&w=1060);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        & .navigate {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            color: var(--black);

            & .menu-path {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 1.5rem;
                padding-inline: 20%;

                & .item-path svg {
                    color: var(--black);
                    margin-bottom: .5rem;
                    width: 45px;
                    aspect-ratio: 1;
                    transition: var(--anim);
                }
                & .item-path:hover svg {
                    color: var(--primary);
                }
            }
        }
    }
</style>