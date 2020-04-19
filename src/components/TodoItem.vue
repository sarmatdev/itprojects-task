<template>
  <article class="card">
    <header class="card__header">
      <h2 class="card__title">{{ todo.title }}</h2>
    </header>
    <main class="card__body">
      <ul class="card__task-list">
        <li
          class="card__task-item"
          :class="{ done: task.done }"
          v-for="(task, index) in todo.tasks"
          :key="index"
        >
          <Checkbox disabled="disabled" v-model="task.done" />
          <h3 class="card__task-title">{{ task.value }}</h3>
        </li>
      </ul>
    </main>
    <footer class="card__footer">
      <div class="card__actions">
        <Button
          title="Update"
          icon="pen"
          color="#2553f5"
          @click.native="updateTodo(todo.id)"
        />
        <Button
          title="Delete"
          icon="trash"
          color="#f52525"
          @click.native="confirmDeleting(todo.id)"
        />
      </div>
    </footer>
  </article>
</template>

<script>
import Button from './UI/Button'
import Checkbox from './UI/Checkbox'
export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },
  methods: {
    updateTodo (id) {
      this.$router.push(`/todo/${id}`)
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
    }
  },
  components: {
    Button,
    Checkbox
  }
}
</script>

<style lang="scss">
.card {
  max-width: 60rem;
  width: 100%;
  min-height: 10rem;
  background-color: var(--white);
  box-shadow: 1rem 1rem 3px rgba(0, 0, 0, 0.25);
  border-radius: 3rem;
  padding: 2rem;
  margin: 1rem 0;

  &__header {
    color: var(--secondary);
    font-size: 1.6rem;
  }

  &__body {
    margin-top: 2rem;
  }

  &__task-list {
  }

  &__task-item {
    list-style: none;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  &__task-title {
    margin-left: 2rem;
    word-break: break-all;
    font-size: 2rem;
    color: var(--primary);
  }

  &__footer {
    border-radius: 1rem;
    background-color: var(--secondary);
    padding: 1rem;
    margin-top: 3rem;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }
}
.done {
  text-decoration: line-through;
  color: var(--grey);
}
</style>
