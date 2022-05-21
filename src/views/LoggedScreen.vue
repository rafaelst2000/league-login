<script>
import LoggedScreenBanner from '../components/LoggedScreenBanner.vue'
import LoggedScreenInfo from '../components/LoggedScreenInfo.vue'

export default {
  components: {
    LoggedScreenBanner,
    LoggedScreenInfo,
  },
  data: () => ({}),
}
</script>

<template>
  <div class="logged-container">
    <logged-screen-banner />
    <logged-screen-info />
  </div>
</template>

<style lang="scss" scoped>
.logged-container {
  height: 680px;
  overflow: auto;
  width: 1288px;
}

::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: rgba(#000000, 0.4);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(#f9f9f9, 0.9);
  border-radius: 10px;
}
</style>
