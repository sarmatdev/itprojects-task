<template>
  <section class="update-todo">
    <h1 class="update-todo__title">Update This Todo!</h1>
    <div class="update-todo__change-section">
      <h2 class="update-todo__title--dark">Title</h2>
      <Input :value="updatedTodo.title" @input="titleUpdate($event)" />
    </div>
    <div class="update-todo__change-section">
      <h2 class="update-todo__title--dark">Tasks</h2>
      <ul class="update-todo__task-list">
        <li
          class="update-todo__task-item"
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
        </li>
      </ul>
      <Button
        title="New Field"
        icon="plus"
        color="blue"
        @click.native="addTaskField"
      />
    </div>
    <footer class="update-todo__actions">
      <Button
        title="Save"
        icon="save"
        color="green"
        @click.native="updateTodo"
      />
      <Button
        title="Delete"
        icon="trash"
        color="red"
        @click.native="confirmDeleting(todo.id)"
      />
      <Button
        title="Cancel"
        icon="angle-left"
        color="blue"
        @click.native="confirmCanceling"
      />
      <Button
        title="Undo"
        icon="undo"
        color="purple"
        @click.native="undoChanges"
      />
    </footer>
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
      updatedTodo: this.todo,
      legacyTodo: {}
    }
  },
  created () {
    this.legacyTodo = JSON.parse(localStorage.getItem('todos') || '[]').find(todo => todo.id === this.todo.id)
  },
  methods: {
    updateTodo () {
      this.$store.dispatch('updateTodo', this.updatedTodo)
    },
    titleUpdate (value) {
      this.updatedTodo.title = value
    },
    taskUpdate (value, id, index) {
      this.updatedTodo.tasks.find(task => task.id === id).value = value
    },
    addTaskField () {
      this.updatedTodo.tasks.push({ id: Date.now(), value: '', done: false })
    },
    deleteTaskField (index) {
      this.updatedTodo.tasks.splice(index, 1)
    },
    confirmCanceling () {
      const params = {
        title: 'Do You Realy Want to Cancel Updating?',
        onConfirm: () => {
          return this.$router.push('/')
        }
      }
      this.$modal.show(params)
    },
    confirmDeleting (id) {
      const params = {
        title: 'You Realy Want to Delete this?',
        onConfirm: () => {
          return this.deleteTodo(id)
        }
      }
      this.$modal.show(params)
    },
    deleteTodo (id) {
      this.$store.dispatch('deleteTodo', id)
      this.$router.push('/')
    },
    undoChanges () {
      this.updatedTodo = this.legacyTodo
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/_mixins.scss';
.update-todo {
  background-color: var(--white);
  transition: all 0.2s ease;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    @include title;
  }

  &__title--dark {
    @include title;
    color: var(--secondary);
    margin-bottom: 1rem;
  }
  &__change-section {
    @include card;
    flex-direction: column;
  }

  &__task-list {
    max-width: 30rem;
    width: 100%;
  }
  &__task-item {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  &__actions {
    @include card;
  }
}
</style>
