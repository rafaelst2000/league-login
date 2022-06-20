<script>
import { useAuthStore } from '../stores/auth'
import { mapActions } from 'pinia'
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import RiotInput from '../components/RiotInput.vue'
import SocialLogin from './SocialLogin.vue'
import Loading from './Loading.vue'
import ErrorMessage from './ErrorMessage.vue'
import FormCreateAccount from './FormCreateAccount.vue'

export default {
  name: 'FormLogin',
  components: {
    RiotInput,
    SocialLogin,
    Loading,
    ErrorMessage,
    FormCreateAccount,
  },
  emits: ['social-login'],
  data: () => ({
    error: false,
    loading: false,
    keepLogged: false,
    username: '',
    password: '',
    allUsers: []
  }),
  computed: {
    disableButton() {
      return !this.username || this.password.length < 6
    },
  },
  methods: {
    ...mapActions(useAuthStore, ['setUser']),
    async login() {
      if (this.disableButton) return
      window.localStorage.removeItem('keep-logged')
      this.loading = true
      const db = getDatabase()
      const dbRef = ref(db)
      const auth = getAuth()
      await this.getAllUsers()
      const email = this.getEmailbyUsername(this.username)
      if(!email) {
        this.error = true 
        this.loading = false
        return
      }
      signInWithEmailAndPassword(auth, email, this.password)
        .then((authUser) => {
          const user = authUser.user
          get(child(dbRef, `users/${authUser.user.uid}`)).then((snapshot) => {
            this.setUser({ ...user, isAuth: true, ...snapshot.val() }) 
            if(this.keepLogged) window.localStorage.setItem('keep-logged', true)
            this.$router.push('/logged')
          })
        })
        .catch((error) => {
          this.error = true
        })
        .finally(() => this.loading = false)
    },
    async getAllUsers() {
      const db = getDatabase()
      const dbRef = ref(db)
      try {
        const snapshot = await get(child(dbRef, 'users'))
        if(snapshot.exists()) {
          this.allUsers = Object.entries(snapshot.val()).map(user => {
            return  { username: user[1].username, email: user[1].email }
          })
        }
      } catch(error) {
        console.log(error)
      }
    },
    getEmailbyUsername(username) {
      const foundUser = this.allUsers.find(user => user.username === username)
      if(foundUser && foundUser.email) return foundUser.email
      return ''
    }
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
  <form v-if="!loading">
    <h1 v-if="!error">Fazer login</h1>
    <error-message v-else text="Suas credenciais de login não coincidem com uma conta em nosso sistema."/>

    <riot-input v-model="username" name="login" label="NOME DE USUÁRIO" type="text" :error="error" />
    <riot-input v-model="password" name="password" label="SENHA" type="password" :error="error" />

    <social-login  @click="$emit('social-login', { socialNetwork: $event, keepLogged })" />

    <div class="checkbox">
      <input v-model="keepLogged" type="checkbox" class="checkbox-color" id="check" name="check" value="stay" />
      <label for="check">Manter login</label>
    </div>

    <div class="button" @click.prevent="login">
      <button aria-label="Entrar agora" type="submit" class="btn" :class="disableButton ? 'btn-disabled' : ''"><i class="fas fa-arrow-right"></i></button>
    </div>
  </form>

  <loading v-else />
</template>

<style lang="scss" scoped>
.login-container {
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  h1 {
    margin: 20px 0 30px;
    color: #111;
    font-size: 22px;
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-top: 16px;
    & .checkbox-color {
      filter: hue-rotate(143deg);
    }

    & input[type='checkbox'] {
      transform: scale(1.5);
    }
  }

  .button {
    position: relative;
    margin-top: 48px;

    & .btn {
      width: 48px;
      height: 48px;
      border-radius: 30%;
      color: #e8e8e8;
      background: #d13639;
      border: 0;
      font-size: 24px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #bc252a;
      }
    }
    & .btn-disabled {
      cursor: not-allowed;
      color: rgba(126, 126, 126, 0.1);
      background: transparent;
      border: 2px solid rgba(126, 126, 126, 0.1);

      &:hover {
        background: transparent;
      }
    }
  }
}
</style>
