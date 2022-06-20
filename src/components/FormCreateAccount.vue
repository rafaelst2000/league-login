<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, update, get, child } from "firebase/database";

import { useAuthStore } from '../stores/auth'
import { mapState, mapActions } from 'pinia'

import RiotInput from '../components/RiotInput.vue'
import SocialLogin from './SocialLogin.vue'
import Loading from './Loading.vue'
import ErrorMessage from './ErrorMessage.vue'

export default {
  name: 'FormCreateAccount',
  components: {
    RiotInput,
    SocialLogin,
    Loading,
    ErrorMessage,
  },
  emits: ['social-login'],
  data: () => ({
    loading: false,
    newUser: {
      user: '',
      name: '',
      email: '',
      password: '',
    },
    errorMessage: '',
    allUsers: []
  }),
  computed: {
    ...mapState(useAuthStore, ['getUser']),
    disableButton() {
      return !this.newUser.user || !this.newUser.name || !this.newUser.email || !this.newUser.password
    },
  },
  methods: {
    ...mapActions(useAuthStore, ['setUser']),
    async createAccount(){
      const isValid = await this.validateInfos()
      if(!isValid) return

      const auth = getAuth()
      this.loading = true
      createUserWithEmailAndPassword(auth, this.newUser.email, this.newUser.password)
        .then((newUser) => {
          const db = getDatabase() 
          const { uid } = newUser.user
          const updateData = { 
            username: this.newUser.user,
            displayName: this.newUser.name,
            email: this.newUser.email
          }
          update(ref(db, `users/${uid}`), updateData).then(() => {
            this.setUser({ isAuth: true, ...newUser.user, ...updateData })
            this.$router.push('/logged')
          })
        })
        .catch((error) => {
          const { message } = error
          if(message === 'Firebase: Error (auth/invalid-email).') this.errorMessage = 'Digite um e-mail válido.'
          if(message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') this.errorMessage = 'A senha deve possuir ao menos 6 dígitos'
          if(message === 'Firebase: Error (auth/email-already-in-use).') this.errorMessage = 'E-mail já está em uso.'
        })
        .finally(() => this.loading = false)
    },
    async validateInfos() {
      await this.getAllUsernames()
      const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/
      const isFullName = fullNameRegex.test(this.newUser.name)
      console.log('isFullName', isFullName)
      if(!isFullName) {
        this.errorMessage = 'Digite seu nome completo.'
        return false
      }
      if(this.allUsers.includes(this.newUser.user)){
        this.errorMessage = 'Nome de usuário já está em uso.'
        return false
      }
      return true
    },
    async getAllUsernames() {
      const db = getDatabase()
      const dbRef = ref(db)
      try {
        const snapshot = await get(child(dbRef, 'users'))
        if(snapshot.exists()) {
          this.allUsers = Object.entries(snapshot.val()).map(user => user[1].username)
        }
      } catch(error) {
        console.log(error)
      }
    }
  },
  watch: {
    newUser: {
      deep: true,
      handler() {
        this.errorMessage = ''
      }
    }
  },
}
</script>

<template>
  <form v-if="!loading">
    <h1 v-if="!errorMessage">Crie sua conta</h1>
    <error-message v-else :text="errorMessage"/>

    <riot-input v-model="newUser.user" name="login" label="NOME DE USUÁRIO" type="text" :error="!!errorMessage" />
    <riot-input v-model="newUser.name" name="name" label="NOME COMPLETO" type="text" :error="!!errorMessage" />
    <riot-input v-model="newUser.email" name="email" label="E-MAIL" type="text" :error="!!errorMessage" />
    <riot-input v-model="newUser.password" name="password" label="SENHA" type="password" :error="!!errorMessage" />

    <social-login @click="$emit('social-login', { socialNetwork: $event, keepLogged: false })" />

    <div class="button" @click.prevent="createAccount">
      <button type="submit" class="btn" :class="disableButton ? 'btn-disabled' : ''"><i class="fas fa-arrow-right"></i></button>
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

  & .logo-riot {
    width: 150px;
    & img {
      display: block;
      width: 100%;
    }
  }

  h1 {
    margin: 20px 0 30px;
    color: #111;
    font-size: 22px;
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
