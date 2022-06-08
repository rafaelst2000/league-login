<script>
import GameAlert from './GameAlert.vue'
import OutlinedButton from './OutlinedButton.vue'

export default {
  name: 'LoginImageContainer',
  components: {
    GameAlert,
    OutlinedButton,
  },
}
</script>

<template>
  <div class="login-image-container">
    <game-alert />
    <outlined-button icon="fas fa-user" />
  </div>
</template>

<style lang="scss" scoped>
.login-image-container {
  width: 100%;
  height: 100%;
  background-image: url('../assets/login-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
</style>
