<!-- src/components/AboutPage.vue -->
<template>
    <div>
      <h1>About Page</h1>
      <button @click="goToHome">Go to Home Page</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WorkSpace',
    methods: {
      goToHome() {
        this.$router.push({ name: 'MainPath' });
      }
    }
  };
  </script>
  