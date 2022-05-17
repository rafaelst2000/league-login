<script setup></script>

<template>
  <div class="login-image-container">
    <div class="game-alert"></div>
    <div class="button">
      <button class="btn"><i class="fas fa-user"></i></button>
    </div>
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

  & .game-alert {
    width: 34px;
    height: 34px;
    background: #d950e5;
    transform: rotate(45deg);
    position: relative;
    border-radius: 4px;
    &::after {
      content: '!';
      font-size: 32px;
      font-weight: bold;
      display: inline-block;
      transform: rotate(-45deg);
      position: absolute;
      top: -2px;
      left: 11px;
    }
  }

  .button {
    position: relative;

    & .btn {
      width: 48px;
      height: 48px;
      border-radius: 30%;
      color: #e8e8e8;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
      border: 0;
      font-size: 24px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
