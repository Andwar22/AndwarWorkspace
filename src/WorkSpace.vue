<script setup>
  import RunningText from './components/work-space/RunningText.vue';
  import AllBookmarks from './components/work-space/AllBookmarks.vue';
  import ConnectIP from './components/work-space/ConnectIP.vue';
</script>

<script>
  export default {
    name: 'WorkSpace',
    methods: {
      goToMain() {
        this.$router.push({ name: 'MainPage' });
      }
    }
  };
</script>

<template>
  <div class="work-space">
    <button @click="goToMain">Go to Home Page</button>
    
    <RunningText speed="fast" txt="kerjo njir, cicilan jek akeh!!" />

    <ConnectIP />
    
    <AllBookmarks />
  </div>
</template>
  
<style scoped>
  .work-space {
    width: 100%;
    height: 100%;
    background-color: var(--black);
    background-image: url(https://img.freepik.com/free-vector/dark-black-background-design-with-stripes_1017-38064.jpg?t=st=1709893029~exp=1709896629~hmac=baf80761a35e50333bb646de1f78daae402122d060bdeb7c186bad674be24a39&w=1060);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden auto;
  }
</style>