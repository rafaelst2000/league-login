<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div class="input-container input-value">
    <input :type="type" :name="name" required />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  position: relative;
  height: 48px;
  background: rgba(126, 126, 126, 0.1);
  border: 2px solid rgba(126, 126, 126, 0.1);
  margin-bottom: 16px;
  border-radius: 4px;
}

.input-value label,
.input-value input {
  padding: 1px 8px 1px 8px;
}

.input-value {
  width: 100%;
}

input {
  display: block;
  position: absolute;
  height: 48px;
  border: 0;
  background: none;
  z-index: 1;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Maven', sans-serif;
  letter-spacing: 0.012em;
  color: #333;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding-top: 1em;
}

label {
  font-family: 'Maven Pro', sans-serif;
  font-weight: bold;
  display: block;
  position: absolute;
  margin-top: 2px;
  padding: 1px;
  color: #525252;
  letter-spacing: 0.08em;
  font-size: 10px;
  animation-name: label-in;
  animation-duration: 0.3s;
  animation-direction: reverse;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}

input:focus + label,
input:valid + label {
  font-size: 10px;
  font-weight: bold;
  animation-name: label-out;
  animation-duration: 0s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}

@keyframes label-in {
  0% {
    top: 10px;
    font-size: 14px;
    padding-left: 14px;
  }
  100% {
    font-size: 10px;
    top: 4px;
  }
}

@keyframes label-out {
  0% {
    font-size: 14px;
    opacity: 1;
    left: 1px;
    top: 0.2em;
  }

  100% {
    font-size: 10px;
    opacity: 1;
    left: 1px;
    top: 0.2em;
  }
}
</style>
