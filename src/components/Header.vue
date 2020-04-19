<template>
  <header class="header">
    <h1 class="header__title">ToDo</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
  height: 5rem;
  width: 100vw;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 3rem;
    color: white;
  }
}
</style>
