<script>
import GameAlert from '../components/GameAlert.vue'
import UserButton from '../components/UserButton.vue'
import MenuButton from '../components/MenuButton.vue'
export default {
  components: {
    GameAlert,
    UserButton,
    MenuButton,
  },
}
</script>

<template>
  <div class="logged-container">
    <header>
      <div class="left-icons">
        <menu-button />
        <game-alert />
      </div>
      <img src="../assets/league-of-legends.png" alt="" />
      <user-button />
    </header>

    <footer>
      <div class="play-button-container">
        <div class="play-button">
          <div class="play-circle"><i class="fas fa-play"></i></div>
          <h1>Jogar</h1>
        </div>

        <div class="button-dropdown">
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>

      <div class="footer-cards">
        <div class="card card-1">
          <div>
            <h6>DEV</h6>
          </div>
          <h5>
            Mapa dos Campeões - Abril <br />
            de 2022
          </h5>
        </div>
        <div class="card card-2">
          <div>
            <h6>ATUALIZAÇÃO DO JOGO</h6>
          </div>
          <h5>Notas da Atualização 12.9</h5>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.logged-container {
  position: relative;
  width: 1280px;
  height: 680px;
  background-image: url('../assets/katarina.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & header {
    height: 100px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .left-icons {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    img {
      display: block;
      width: 150px;
    }
  }

  & footer {
    height: 120px;
    width: 100%;
    padding: 20px 80px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .play-button-container {
    width: 240px;
    height: 70px;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      .play-circle {
        transform: scale(1.1);
      }
    }
  }

  & .button-dropdown {
    height: 100%;
    width: calc(240px - 190px);
    background: rgba(#1d454b, 0.9);
    color: #a1b1b3;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  & .play-button {
    box-shadow: rgba(#14b4d8, 0.4) 0px 0px 30px 4px;
    width: 190px;
    height: 100%;
    background: rgb(71, 159, 203);
    background: linear-gradient(148deg, rgba(71, 159, 203, 1) 35%, rgba(12, 194, 225, 1) 100%);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #f9f9f9;
    display: flex;
    gap: 15px;
    align-items: center;
    padding-left: 15px;
    transition: 0.3s;

    &:hover {
      box-shadow: rgba(#14b4d8, 0.8) 0px 0px 30px 4px;
    }

    & h1 {
      line-height: 1;
    }
    & .play-circle {
      background: red;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #141212;
      color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      & i {
        font-size: 18px;
      }
    }
  }

  & .footer-cards {
    & h6 {
      color: #1e1a24;
      background: rgba(#f9f9f9, 0.5);
      border-radius: 8px;
      padding: 4px 8px;
      display: inline-block;
    }
    & h5 {
      color: #efefef;
      font-size: 14px;
    }
    & .card {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 130px;
      border-radius: 8px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        border: 4px solid #f9f9f9;
        border-radius: 8px;
      }
    }

    & .card-1 {
      background-image: url('../assets/mapa-campeoes.jpg');
      width: 230px;
    }
    & .card-2 {
      background-image: url('../assets/mapa-campeoes.jpg');
      width: 320px;
    }
  }
}
</style>
