<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, child, push, update } from "firebase/database";

import { useAuthStore } from '../stores/auth'
import { mapState } from 'pinia'

import RiotInput from '../components/Input.vue'
import SocialLogin from './SocialLogin.vue'
import Loading from './Loading.vue'
import ErrorMessage from './ErrorMessage.vue'

export default {
  components: {
    RiotInput,
    SocialLogin,
    Loading,
    ErrorMessage,
  },
  emits: ['social-login'],
  data() {
    return {
      error: false,
      loading: false,
      user: '',
      name: '',
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState(useAuthStore, ['getUser']),
    disableButton() {
      return !this.user || !this.name || !this.email || !this.password
    }
  },
  methods: {
    createAccount(){
      const auth = getAuth()
      this.loading = true
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((newUser) => {
          const db = getDatabase() 
          const { uid } = newUser.user
          const updateData = { 
            username: this.user,
            displayName: this.name,
          }
          update(ref(db, `users/${uid}`), updateData)
        })
        .catch((error) => {

        })
        .finally(() => this.loading = false)
    },
  }
}
</script>

<template>
  <form v-if="!loading">
    <h1 v-if="!error">Crie sua conta</h1>
    <error-message v-else text="Suas credenciais de login não coincidem com uma conta em nosso sistema."/>

    <riot-input v-model="user" name="login" label="NOME DE USUÁRIO" type="text" :error="error" />
    <riot-input v-model="name" name="name" label="NOME COMPLETO" type="text" :error="error" />
    <riot-input v-model="email" name="email" label="E-MAIL" type="text" :error="error" />
    <riot-input v-model="password" name="password" label="SENHA" type="password" :error="error" />

    <social-login @click="$emit('social-login', $event)" />

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
