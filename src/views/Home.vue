<script>
import LoginImageContainer from '../components/LoginImageContainer.vue'
import LoginContainer from '../components/LoginContainer.vue'

export default {
  components: {
    LoginImageContainer,
    LoginContainer,
  },
}
</script>

<template>
  <div class="home-container">
    <login-container />
    <login-image-container />
  </div>
</template>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 370px 1fr;
  width: 1280px;
  height: 680px;
}
</style>
