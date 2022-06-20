<script>
export default {
  name: 'GameAlert',
  data: () => ({
    showTooltip: false,
  }),
}
</script>
<template>
  <div class="game-alert-out">
    <span class="game-alert" @mouseenter="showTooltip = true" @mousedown="showTooltip = false"></span>
    <div class="game-alert-tooltip" v-if="showTooltip" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
      <div class="item">
        <h3>Skins desabilitadas</h3>
        <span><i class="fas fa-clock"></i> 26/05/2022 18:47 </span>
        <p>Desabilitamos temporariamente as skins a seguir enquanto trabalhamos em uma solução para o conflito: Kayn Odisseia</p>
      </div>
      <div class="item">
        <h3>Presentes</h3>
        <span><i class="fas fa-clock"></i> 12/05/2021 19:03 </span>
        <p>Presentes de conteúdo (campeões, skins, etc) estão temporariamente indisponíveis enquanto trabalhamos na solução de um problema. Presentes de RP podem ser enviados normalmente.</p>
      </div>

      <h6>MAIS DETALHES</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-alert-out {
  position: relative;
  display: block;
}
.game-alert {
  width: 34px;
  height: 34px;
  background: #d950e5;
  transform: rotate(45deg);
  position: relative;
  border-radius: 4px;
  transition: 0.3s;
  display: inline-block;
  &::after {
    content: '!';
    font-size: 32px;
    font-weight: bold;
    display: inline-block;
    transform: rotate(-45deg);
    position: absolute;
    top: -2px;
    left: 11px;
  }
  &:hover {
    background: #a743b0;
  }
}
.game-alert-tooltip {
  background: #f9f9f9;
  padding: 30px;
  width: 400px;
  position: absolute;
  left: 50px;
  top: 0;
  border-radius: 4px;

  & h6 {
    color: #b6b6b6;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: #111;
    }
  }

  & .item {
    margin-bottom: 30px;
    h3 {
      color: #111;
      font-size: 16px;
      margin-bottom: 10px;
    }
    span {
      color: #999;
      font-size: 14px;
      font-weight: bold;
      & i {
        font-size: 12px;
        margin-right: 3px;
      }
    }
    p {
      margin-top: 5px;
      color: #111;
      font-size: 14px;
      line-height: 1;
    }
  }
}
</style>
