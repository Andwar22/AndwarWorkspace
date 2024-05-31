<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })
</script>

<template>
    <p>{{ msg }}</p>
</template>

<style scoped>
  p {
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0;
  }
</style>