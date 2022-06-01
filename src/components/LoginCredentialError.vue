<script></script>

<template>
  <div class="login-credential-error-container">
    <p>Suas credenciais de login não coincidem com uma conta em nosso sistema.</p>
  </div>
</template>

<style lang="scss" scoped>
.login-credential-error-container {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 6px;
  & p {
    color: #d06cda;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }
}
</style>
