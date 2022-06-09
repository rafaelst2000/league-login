<script>
export default {
  name: 'OutlinedButton',
  emits: ['click'],
  props: {
    icon: {
      type: String,
      default: '',
    }
  },
}
</script>

<template>
    <div class="button" @click.stop="$emit('click')">
      <button class="btn"><i :class="icon"></i></button>
      <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.button {
  position: relative;

  & .btn {
    width: 48px;
    height: 48px;
    border-radius: 30%;
    color: #e8e8e8;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    border: 0;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
      color: white;
    }
  }
}
</style>
