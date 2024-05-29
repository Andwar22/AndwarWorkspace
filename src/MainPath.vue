<script setup>
    import JudulPath from './components/main-page/JudulPath.vue';
    import ItemPath from './components/main-page/ItemPath.vue';
    import IconLaptop from './components/icons/IconLaptop.vue';
    import IconStore from './components/icons/IconStore.vue';
    import IconController from './components/icons/IconController.vue';
    import IconChevronRight from './components/icons/IconChevronRight.vue';
</script>

<script>
  export default {
    name: 'Main',
    methods: {
      goToWorkSpace() {
        this.$router.push({ name: 'WorkSpace' });
      }
    }
  };
  </script>

<template>
    <div class="main-path">
        <JudulPath msg="Mau ngapain hari ini?" />
            
        <div class="wrap-item-path">
            <ItemPath @click="goToWorkSpace">
                <template #icon>
                    <IconLaptop />
                </template>
                <template #title>Kerjo</template>
                <template #desc>Mencari nafkah lewat jalur bekerja sebagai hacker di PT Mencari Cinta Sejati. &#128526;</template>
            </ItemPath>

            <ItemPath>
                <template #icon>
                    <IconStore />
                </template>
                <template #title>Dodolan</template>
                <template #desc>Mencari nafkah tambahan lewat jalur jualan, semacam side quest lah ya. &#128540;</template>
            </ItemPath>

            <ItemPath>
                <template #icon>
                    <IconController />
                </template>
                <template #title>Hiburan</template>
                <template #desc>Kalau waktu sudah mulai melonggar, waktunya rehat sejenak pemirsa. &#129321;</template>
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
</style>