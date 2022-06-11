<script>
import { useAuthStore } from '../stores/auth'
import { mapActions } from 'pinia'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import RiotInput from './RiotInput.vue'
import SocialLogin from './SocialLogin.vue'
import Loading from './Loading.vue'
import ErrorMessage from './ErrorMessage.vue'
import FormCreateAccount from './FormCreateAccount.vue'
import FormLogin from './FormLogin.vue'

export default {
  name: 'LoginContainer',
  components: {
    RiotInput,
    SocialLogin,
    Loading,
    ErrorMessage,
    FormCreateAccount,
    FormLogin,
  },
  data() {
    return {
      loading: false,
      error: false,
      createAccount: false,
      keepLogged: false
    }
  },
  computed: {
    footerLinkName() {
      return this.createAccount ? 'ENTRAR' : 'CRIAR CONTA'
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['setUser']),
    loginGoogle() {
      this.loading = true
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((data) => {
          this.setUser({ ...data.user, isAuth: true })
          this.loading = false
          if(this.keepLogged) {
            window.localStorage.setItem('keep-logged', true)
          } else {
            window.localStorage.removeItem('keep-logged')
            this.$router.push('/logged')
          }
        })
        .catch((error) => console.log(error))
        .finally(() => this.loading = false)
    },
    socialLogin(socialNetwork) {
      if (socialNetwork === 'google') this.loginGoogle()
    },
  },
  watch: {
    user() {
      this.error = false
    },
    password() {
      this.error = false
    },
  },
}
</script>

<template>
  <div class="login-container">
    <div class="logo-riot">
      <img src="../assets/riot-games.png" alt="Riot Games Logo" />
    </div>

    <form-login v-if="!loading && !createAccount" @social-login="socialLogin($event)" @loading="loading = $event" v-model:keepLogged="keepLogged"/>
    <form-create-account v-else-if="!loading && createAccount" @loading="loading = $event"/>
    <loading v-else />

    <div class="footer-links">
      <h6 v-if="!createAccount">NÃO CONSEGUE INICIAR SESSÃO?</h6>
      <h6 @click="createAccount = !createAccount">{{ footerLinkName }}</h6>
      <h6 class="game-version">V50.0.0</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  padding: 20px 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr 1fr;
  align-items: center;
  justify-items: center;

  & .logo-riot {
    width: 150px;
    & img {
      display: block;
      width: 100%;
    }
  }

  .footer-links {
    margin-top: 20px;
    text-align: center;
    position: relative;

    & h6 {
      color: #b6b6b6;
      margin-bottom: 10px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: #111;
      }
    }
    & .game-version {
      position: absolute;
      right: -70px;
      top: 23px;
      color: c7c7c7;
    }
  }
}
</style>
