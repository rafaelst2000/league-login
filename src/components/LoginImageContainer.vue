<script>
import GameAlert from './GameAlert.vue'
import UserButton from './UserButton.vue'

export default {
  components: {
    GameAlert,
    UserButton,
  },
}
</script>

<template>
  <div class="login-image-container">
    <game-alert />
    <user-button />
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
