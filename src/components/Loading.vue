<script>
export default {
  name: 'Loading'
}
</script>

<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  border: 8px solid #333;
  border-top: 8px solid #d23b3e;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
