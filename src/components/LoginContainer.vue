<script setup>
import RiotInput from '../components/Input.vue'
import SocialLogin from './SocialLogin.vue'
</script>

<template>
  <div class="login-container">
    <div class="logo-riot">
      <img src="../assets/riot-games.png" alt="Riot Games Logo" />
    </div>

    <h1>Fazer login</h1>

    <riot-input name="login" label="NOME DE USUÁRIO" type="text" />
    <riot-input name="password" label="SENHA" type="password" />

    <social-login />

    <div class="checkbox">
      <input type="checkbox" class="checkbox-color" id="check" name="check" value="stay" />
      <label for="check">Manter login</label>
    </div>

    <div class="button">
      <button type="submit" class="btn"><i class="fas fa-arrow-right"></i></button>
    </div>

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
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin-top: 10px;
    & .checkbox-color {
      filter: hue-rotate(143deg);
    }

    & input[type='checkbox'] {
      transform: scale(1.5);
    }
  }

  .button {
    position: relative;
    margin-top: 24px;

    & .btn {
      width: 72px;
      height: 72px;
      border-radius: 30%;
      color: #e8e8e8;
      background: #d13639;
      border: 0;
      font-size: 32px;
      cursor: pointer;

      &:hover {
        background: #bc252a;
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
