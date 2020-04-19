<template>
  <button class="btn-action" :style="{ backgroundColor: `${color}` }">
    <font-awesome-icon :icon="['fas', icon]" size="lg" color="white" />
    <span class="btn-action__title" v-if="title"> {{ title }} </span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    color: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss">
.btn-action {
  height: auto;
  max-width: 15rem;
  width: auto;
  border-radius: .5rem;
  outline: none;
  border: none;
  padding: .7rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  &__title {
    font-size: 1.6rem;
    color: var(--white);
    margin-left: 1rem;
  }
}
</style>
