<template>
  <section>
    <main>
      <TodoList />
    </main>
    <FabButton @click.native="createModal = !createModal" />
    <CreateTodo v-if="createModal" @closeModal="createModal = false" />
  </section>
</template>

<script>
import TodoList from '@/components/TodoList'
import FabButton from '@/components/UI/FabButton'
import CreateTodo from '@/components/CreateTodo'
export default {
  name: 'Home',
  components: {
    TodoList,
    FabButton,
    CreateTodo
  },
  data () {
    return {
      createModal: false
    }
  }
}
</script>
