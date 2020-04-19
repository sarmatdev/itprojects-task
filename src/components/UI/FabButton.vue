<template>
  <button class="fab-btn">
    <font-awesome-icon :icon="['fas', 'plus']" size="2x" color="#2e495e" />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.fab-btn {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-color: var(--primary);
  outline: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 85%;
  right: 5%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
