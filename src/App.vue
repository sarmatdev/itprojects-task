<template>
  <div id="app">
    <Header />
    <section class="container">
      <router-view />
    </section>
    <app-modal />
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
</style>
