<script>
import GameAlert from './GameAlert.vue'
import OutlinedButton from './OutlinedButton.vue'
import { useAuthStore } from '../stores/auth'
import { getAuth, signOut } from 'firebase/auth'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'LoggedScreenBanner',
  components: {
    GameAlert,
    OutlinedButton,
  },
  data: () => ({
    isVideo: true,
    showTooltip: false
  }),
  computed: {
    ...mapState(useAuthStore, ['getUser']),
    cameraIcon() {
      return this.isVideo ? 'fas fa-video' : 'fas fa-video-slash'
    },
  },
  methods: {
    ...mapActions(useAuthStore, ['resetState']),
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.resetState()
        window.localStorage.removeItem('keep-logged')
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<template>
  <div class="logged-container-outside" @click="showTooltip = false">
    <video autoplay muted loop id="myVideo" v-if="isVideo">
      <source src="../assets/valiant-riven.mp4" type="video/mp4" />
    </video>
    <div class="logged-container" :class="{ 'background-image': !isVideo }">
      <header>
        <div class="left-icons">
          <outlined-button icon="fas fa-border-all" />
          <game-alert />
        </div>
        <img src="../assets/league-of-legends.png" alt="" />
        <outlined-button icon="fas fa-user" @click="showTooltip = !showTooltip">
          <div v-if="showTooltip" class="user-tooltip" >
            <div class="title">
              <h3>{{ getUser.displayName }}</h3>
              <span v-if="getUser.username">#{{ getUser.username }}</span>
            </div>
            <div class="exit">
              <h3 @click="logout">SAIR</h3 >
            </div>
            <p>Made by Rafael Trevisan</p>
          </div>
        </outlined-button>
      </header>
      <footer :class="isVideo ? 'footer-video' : 'footer-image'">
        <outlined-button class="icon-camera" :icon="cameraIcon" @click="isVideo = !isVideo" />
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
  </div>
</template>

<style lang="scss" scoped>
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 680px;
  object-fit: cover;
  animation: fadeIn 1.5s;
}

.logged-container-outside {
  position: relative;
  max-width: 1280px;
  height: 680px;
}

.background-image {
  background-image: url('../assets/valiant-riven.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: fadeIn 1.5s;
}

.logged-container {
  position: absolute;
  max-width: 1280px;
  width: 100%;
  height: 680px;

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

  .footer-video {
    background: rgba(0, 0, 0, 0.5);
  }
  .footer-image {
    background: rgba(0, 0, 0, 0.3);
  }

  & footer {
    height: 120px;
    width: 100%;
    padding: 20px 80px;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .icon-camera {
    position: absolute;
    bottom: 140px;
    left: 20px;
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
        font-size: 22px;
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
    margin-bottom: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 20px;
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
      background-image: url('../assets/notas-atualizacao.jpg');
      width: 320px;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.user-tooltip {
  background: #211f1f;
  padding: 20px 0;
  width: 300px;
  position: absolute;
  right: 60px;
  top: 0;
  border-radius: 4px;
  
  .title, .exit {
    padding: 0 20px 20px;
    display: flex;
    border-bottom: 2px solid #343434;
    span {
      color: #444343;
      font-weight: bold;
    }
    h3 {
      color: #b7b7b7;
      font-size: 16px;
    }
  }

  .exit {
    margin-top: 20px;
    border: none;
    h3 {
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: #444343;
      }
    }
  }
  p {
    color: #14b4d8;
    font-size: 12px;
    text-align: right;
    padding: 0 20px;
  }
}
</style>
