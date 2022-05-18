<script></script>

<template>
  <div class="game-alert"></div>
</template>

<style lang="scss" scoped>
.game-alert {
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
</style>
