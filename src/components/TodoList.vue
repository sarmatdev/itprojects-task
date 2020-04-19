<template>
  <section class="todo-list">
    <TotoItem v-for="(todo, index) in todos" :todo="todo" :key="index" />
  </section>
</template>

<script>
import TotoItem from './TodoItem'
export default {
  components: {
    TotoItem
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  }
}
</script>

<style lang="scss">
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
