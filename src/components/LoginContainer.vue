<script>
import RiotInput from '../components/Input.vue'
import SocialLogin from './SocialLogin.vue'
import Loading from './Loading.vue'

export default {
  components: {
    RiotInput,
    SocialLogin,
    Loading,
  },
  data() {
    return {
      loading: false,
      user: '',
      password: '',
    }
  },
  computed: {
    disableButton() {
      return !this.user || !this.password
    },
  },
}
</script>

<template>
  <div class="login-container">
    <div class="logo-riot">
      <img src="../assets/riot-games.png" alt="Riot Games Logo" />
    </div>

    <form v-if="!loading">
      <h1>Fazer login</h1>

      <riot-input v-model="user" name="login" label="NOME DE USUÁRIO" type="text" />
      <riot-input v-model="password" name="password" label="SENHA" type="password" />

      <social-login />

      <div class="checkbox">
        <input type="checkbox" class="checkbox-color" id="check" name="check" value="stay" />
        <label for="check">Manter login</label>
      </div>
      <div class="button" @click="$router.push({ path: '/logged' })">
        <button type="submit" class="btn" :class="disableButton ? 'btn-disabled' : ''"><i class="fas fa-arrow-right"></i></button>
      </div>
    </form>

    <Loading v-else />

    <div class="footer-links">
      <h6>NÃO CONSEGUE INICIAR SESSÃO?</h6>
      <h6>CRIAR CONTA</h6>
      <h6 class="game-version">V50.0.0</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr 1fr;
  align-items: center;
  justify-items: center;

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
