<script setup></script>

<template>
  <div class="social-login">
    <div class="facebook">
      <i class="fab fa-facebook"></i>
    </div>

    <div class="google">
      <i class="fab fa-google"></i>
    </div>

    <div class="apple">
      <i class="fab fa-apple"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-login {
  display: flex;
  width: 100%;
  gap: 10px;
  & div {
    width: 33.3% !important;
    height: 3em;
    border: 2px solid rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin: 10px 0;
    line-height: 3em;
    text-align: center;
    & i {
      font-size: 26px;
    }
  }

  & .facebook {
    color: #fff;
    background-color: #1877f2;
    cursor: pointer;
    &:hover {
      background-color: #0966de;
    }
  }
  & .google {
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  & .fa-google {
    background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  & .apple {
    color: #fff;
    background-color: #000;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
