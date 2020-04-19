<template>
  <label class="check option">
    <input
      :disabled="disabled"
      class="check__input"
      type="checkbox"
      :checked="value"
      @change="changeHandler"
    />
    <span class="check__box"></span>
  </label>
</template>

<script>
export default {
  props: ['value', 'disabled'],
  methods: {
    changeHandler () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss">
.option {
  display: block;
  margin-bottom: 1.5em;
}

.check {
  padding-left: 1.2em;
  cursor: pointer;

  &__input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  &__box {
    position: absolute;
    margin-top: 0.2em;
    margin-left: -1em;
    width: 1em;
    height: 1em;
    overflow: hidden;
    border-radius: 0.1em;
    background-color: white;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    box-shadow: 0 0 0 0.2em #4a90e2;
  }
}

.check__input:checked + .check__box {
  background-color: #4a90e2;
  background-image: url('../../assets/img/check.svg');
}

.check__input:focus + .check__box {
  box-shadow: 0 0 0 0.2em #4a90e2, 0 0 0 0.4em #7ed321;
}

.check__input:disabled + .check__box {
  box-shadow: 0 0 0 0.2em #9b9b9b;
}

.check__input:checked:disabled + .check__box {
  background-color: #9b9b9b;
}
</style>
