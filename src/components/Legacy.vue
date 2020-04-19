<template>
  <section class="container">
    <div v-if="todo" class="update-todo">
      <h1 class="update-todo__title">Update this Todo!</h1>

      <div class="update-todo__update-title">
        <h2 class="update-todo__title">Title</h2>
        <Input :value="updatedTodo.title" @input="titleUpdate($event)" />
      </div>
      <h2 class="update-todo__title">Tasks</h2>
      <div
        class="update-todo__update-tasks"
        v-for="(task, index) in updatedTodo.tasks"
        :key="index"
      >
        <Checkbox v-model="task.done" />
        <Input
          :value="task.value"
          @input="taskUpdate($event, task.id, index)"
        />
        <Button
          icon="trash"
          color="red"
          @click.native="deleteTaskField(index)"
        />
      </div>
      <Button
        title="New Field"
        icon="plus"
        color="blue"
        @click.native="addTaskField"
      />
      <footer class="update-todo__actions">
        <Button
          title="Save"
          icon="check"
          color="green"
          @click.native="updateTodo"
        />
        <Button
          title="Delete"
          icon="trash"
          color="red"
          @click.native="deleteTodo"
        />
        <Button
          title="Cancel"
          icon="undo"
          color="blue"
          @click.native="updateTodo"
        />
      </footer>
      <div>
        <p>old</p>
        {{ todo }}
      </div>
      <hr />
      <div>
        <p>new</p>
        {{ updatedTodo }}
      </div>
    </div>
    <h1 v-else>Todo not found</h1>
  </section>
</template>

<script>
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import Checkbox from '@/components/UI/Checkbox'
export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },
  components: {
    Input,
    Button,
    Checkbox
  },
  data () {
    return {
      updatedTodo: { ...this.todo }
    }
  },
  watch: {
    newTitle () {}
  },
  methods: {
    updateTodo () {
      this.$store.dispatch('updateTodo', this.updatedTodo)
    },
    titleUpdate (value) {
      this.updatedTodo.title = value
    },
    taskUpdate (value, id, index) {
      console.log(id, index)
      this.updatedTodo.tasks.find(task => task.id === id).value = value
    },
    addTaskField () {
      this.todo.tasks.push({ id: Date.now(), value: '', done: false })
    },
    deleteTaskField (index) {
      console.log(index)
      this.todo.tasks.splice(index, 1)
    },
    deleteTodo () {},
    undoTaskChange (index) {
      console.log('old', this.todo.tasks[index].value)
      console.log('new', this.updatedTodo.tasks[index].value)
      this.updatedTodo.tasks[index].value = this.todo.tasks[index].value
    }
  }
}
</script>

<style lang="scss">
.update-todo {
  max-width: 60rem;
  width: 100%;
  min-height: 30rem;
  height: auto;
  padding: 2rem;
  background-color: var(--white);
  transition: all 0.2s ease;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__title {
    font-size: 2rem;
    color: var(--primary);
    margin-right: 2rem;
  }
  &__update-title {
    display: flex;
    align-items: center;
  }
  &__update-tasks {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
  &__actions {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;
  }
}
</style>
