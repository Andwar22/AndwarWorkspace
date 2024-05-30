<script setup>
  import RunningText from './components/work-space/RunningText.vue';
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
    <RunningText speed="fast" txt="kerjo njir, cicilan jek akeh!!" />

    <button @click="goToMain">Go to Home Page</button>
  </div>
</template>
  
<style scoped>
  .work-space {
    width: 100%;
    height: 100%;
    background-color: var(--black-soft);
  }
</style>