<script></script>

<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

body {
  font-family: 'Maven Pro', sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
