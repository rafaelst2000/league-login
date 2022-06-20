<script>
import { useAuthStore } from './stores/auth'
import { mapActions } from 'pinia'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { getDatabase, ref, get, child } from "firebase/database"
import WildRift from './views/WildRift.vue'

export default {
  components: { 
    WildRift
  },
  data: () => ({
    width: document.documentElement.clientWidth
  }),
  mounted() {
    window.addEventListener('resize', this.getDimensions);
    const keepLogged = window.localStorage.getItem('keep-logged')
    const auth = getAuth()
    const db = getDatabase()
    const dbRef = ref(db)
    onAuthStateChanged(auth, (user) => {
      if (user && keepLogged) {
        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
          if(snapshot.val()) {
            this.setUser({ ...user, isAuth: true, ...snapshot.val() }) 
          }
          else {
            this.setUser({ ...user, isAuth: true }) 
          }
          this.$router.push('/logged')
        })
      }
    }) 
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    ...mapActions(useAuthStore, ['setUser']),
    getDimensions() {
      this.width = document.documentElement.clientWidth;
    }
  },
}
</script>

<template>
  <wild-rift v-if="width < 1200" />
  <router-view v-else/>
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
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
