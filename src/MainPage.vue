<script setup>
    import JudulPath from './components/main-page/JudulPath.vue';
    import ItemPath from './components/main-page/ItemPath.vue';
    import IconLaptop from './components/icons/IconLaptop.vue';
    import IconStore from './components/icons/IconStore.vue';
    import IconController from './components/icons/IconController.vue';
</script>

<script>
  export default {
    name: 'MainPage',
    methods: {
      goToWorkSpace() {
        this.$router.push({ name: 'WorkSpace' });
      },
      goToSellSpace() {
        this.$router.push({ name: 'SellSpace' });
      },
      goToPlaySpace() {
        this.$router.push({ name: 'PlaySpace' });
      }
    }
  };
</script>

<template>
    <div class="main-page">
        <div class="navigate">
            <JudulPath msg="Mau ngapain hari ini?" />
            
            <div class="menu-path">
                <ItemPath @click="goToWorkSpace">
                    <template #icon>
                        <IconLaptop />
                    </template>
                    <template #title>Kerjo</template>
                    <template #desc>Mencari nafkah lewat jalur bekerja sebagai hacker di PT Mencari Cinta Sejati. &#128526;</template>
                </ItemPath>

                <ItemPath @click="goToSellSpace">
                    <template #icon>
                        <IconStore />
                    </template>
                    <template #title>Dodolan</template>
                    <template #desc>Mencari nafkah tambahan lewat jalur jualan, semacam side quest lah ya. &#128540;</template>
                </ItemPath>

                <ItemPath @click="goToPlaySpace">
                    <template #icon>
                        <IconController />
                    </template>
                    <template #title>Hiburan</template>
                    <template #desc>Kalau waktu sudah mulai melonggar, waktunya rehat sejenak pemirsa. &#129321;</template>
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
        background-color: var(--dark);
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