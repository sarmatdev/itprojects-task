<template>
<transition name="modal-fade">
  <div class="modal-wrapper" @click="$emit('closeModal')">
    <div class="modal" @click.stop="">
      <h2 class="modal__title">Title</h2>
      <Input label="Title..." v-model="todo.title" />

      <h3 class="modal__title">Task</h3>
      <div
        class="modal__tasks"
        v-for="(task, index) in todo.tasks"
        :key="index"
      >
        <Input label="Task..." v-model="task.value" />
        <Button icon="trash" color="red" @click.native="deleteField(index)" />
      </div>

      <div class="modal__actions">
        <Button
          title="New field"
          icon="plus"
          color="#2553f5"
          @click.native="addTaskField"
        />
        <Button
          title="Create"
          icon="check"
          color="#00ff19"
          @click.native="createTodo"
        />
      </div>
      <Button
        icon="times"
        color="red"
        @click.native="$emit('closeModal')"
        class="modal__button"
      />
    </div>
  </div>
  </transition>
</template>

<script>
import Input from './UI/Input'
import Button from './UI/Button'
export default {
  components: {
    Input,
    Button
  },
  data () {
    return {
      todo: {
        id: Date.now(),
        title: '',
        tasks: []
      }
    }
  },
  methods: {
    createTodo () {
      this.$store.dispatch('createTodo', this.todo)
      this.$emit('closeModal')
    },
    addTaskField () {
      this.todo.tasks.push({ id: Date.now(), value: '', done: false })
    },
    deleteField (index) {
      this.todo.tasks.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_mixins.scss';
@include modal;
</style>
