<script>
  export default {
    name: 'SellSpace',
    methods: {
      goToMain() {
        this.$router.push({ name: 'MainPage' });
      }
    }
  };
</script>

<template>
  <div>
    <h1>Sell Space</h1>
    <button @click="goToMain">Go to Home Page</button>
  </div>
</template>
  
<style scoped>

</style>