<script setup>
import LoginImageContainer from '../components/LoginImageContainer.vue'
import LoginContainer from '../components/LoginContainer.vue'
</script>

<template>
  <div class="home-container">
    <LoginContainer />
    <LoginImageContainer />
  </div>
</template>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 400px 1fr;
  width: 1280px;
  height: 680px;
}
</style>
