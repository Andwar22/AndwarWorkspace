<script>
  export default {
    name: 'PlaySpace',
    methods: {
      goToMain() {
        this.$router.push({ name: 'MainPage' });
      }
    }
  };
</script>

<template>
  <div>
    <h1>Play Space</h1>
    <button @click="goToMain">Go to Home Page</button>
  </div>
</template>
  
<style scoped>

</style>