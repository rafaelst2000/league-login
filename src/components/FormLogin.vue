<script>
import { useAuthStore } from '../stores/auth'
import { mapActions } from 'pinia'

import RiotInput from '../components/Input.vue'
import SocialLogin from './SocialLogin.vue'
import Loading from './Loading.vue'
import ErrorMessage from './ErrorMessage.vue'
import FormCreateAccount from './FormCreateAccount.vue'

export default {
  components: {
    RiotInput,
    SocialLogin,
    Loading,
    ErrorMessage,
    FormCreateAccount,
  },
  emits: ['social-login', 'loading'],
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: false,
      user: '',
      password: '',
    }
  },
  computed: {
    disableButton() {
      return !this.user || !this.password
    },
  },
  methods: {
    ...mapActions(useAuthStore, ['setUser']),
    login() {
      if (this.disableButton) return
      this.error = true
      if (this.error) return
      this.$router.push({ path: '/logged' })
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
  <form v-if="!loading">
    <h1 v-if="!error">Fazer login</h1>
    <error-message v-else text="Suas credenciais de login não coincidem com uma conta em nosso sistema."/>

    <riot-input v-model="user" name="login" label="NOME DE USUÁRIO" type="text" :error="error" />
    <riot-input v-model="password" name="password" label="SENHA" type="password" :error="error" />

    <social-login  @click="$emit('social-login', $event)" />

    <div class="checkbox">
      <input type="checkbox" class="checkbox-color" id="check" name="check" value="stay" />
      <label for="check">Manter login</label>
    </div>
    <div class="button" @click.prevent="login">
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
