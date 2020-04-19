<template>
  <UpdateTodo :todo="todo" />
</template>

<script>
import UpdateTodo from '@/components/UpdateTodo'
export default {
  components: {
    UpdateTodo
  },
  computed: {
    todo () {
      return this.$store.getters.getTodoById(+this.$route.params.id)
    }
  }
}
</script>

<style></style>
