<template>
  <input required :placeholder="label" class="input" :value="value" type="text" @input="handleInput($event.target.value)" />
</template>

<script>
export default {
  props: ['value', 'label'],
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.input {
  height: 3rem;
  max-width: 20rem;
  width: 100%;
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  outline: none;
  // margin-right: 2rem;
}
</style>
