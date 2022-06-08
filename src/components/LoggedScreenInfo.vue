<script>
export default {
  name: 'LoggedScreenInfo'
}
</script>

<template>
  <div class="logged-info-container">
    <h1>Sobre</h1>

    <div class="center">
      <p>
        Mostre suas habilidades em League of Legends: o MOBA 5v5 que combina sinergia de equipe e maestria individual. Escolha sua função, otimize sua itemização e abra caminho pelo mapa para destruir o Nexus inimigo. Com mais de 150 Campeões e inúmeras maneiras de jogar, encontre o Campeão perfeito
        para você e forje seu caminho rumo à vitória!
      </p>
      <h6>DISPONÍVEL TAMBÉM PARA</h6>
      <div class="apple">
        <i class="fa-brands fa-apple"></i>
        <h5>MacOS</h5>
      </div>
    </div>

    <div class="riot-games">
      <span>br.leagueoflegends.com</span>

      <h6>DESENVOLVEDORA</h6>
      <h5>Riot Games</h5>

      <h6>DISTRIBUIDORA</h6>
      <h5>Riot Games</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logged-info-container {
  position: relative;
  width: 1280px;
  height: 680px;
  background: #141212;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  gap: 40px;
  padding: 50px 30px 0 0;

  h1 {
    color: #f9f9f9;
  }

  & .center {
    p {
      color: #b8b8b8;
      font-size: 20px;
      line-height: 1.5;
    }

    h6 {
      color: #f9f9f9;
      margin: 50px 0 25px;
      font-size: 14px;
    }

    .apple {
      width: 140px;
      border-radius: 8px;
      padding: 20px;
      background: #201e1e;
      color: #f9f9f9;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s;
      & i {
        color: #a2a1a1;
        font-size: 28px;
        transition: 0.3s;
      }

      & h5 {
        font-size: 18px;
      }

      &:hover {
        i {
          color: #f9f9f9;
        }
      }
    }
  }

  & .riot-games {
    & span {
      color: #f9f9f9;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 30px;
    }

    & h6 {
      color: #525252;
      font-size: 14px;
      margin-bottom: 5px;
    }

    & h5 {
      color: #b8b8b8;
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
}
</style>
