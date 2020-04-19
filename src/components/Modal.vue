<template>
  <transition name="modal-fade">
    <div class="modal-wrapper" v-if="visible">
      <div class="modal">
        <h1 class="modal__title">{{ title }}</h1>
        <div class="modal__actions">
          <Button
            title="Yes"
            icon="check"
            color="#00ff19"
            @click.native="confirm"
          />
          <Button
            title="No"
            icon="times"
            color="#f52525"
            @click.native="hide"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Modal from '../plugins/modal'
import Button from '@/components/UI/Button'
export default {
  name: 'Modal',
  components: {
    Button
  },
  data () {
    return {
      visible: false,
      title: '',
      onConfirm: {}
    }
  },
  methods: {
    hide () {
      this.visible = false
    },
    confirm () {
      if (typeof this.onConfirm === 'function') {
        this.onConfirm()
        this.hide()
      } else {
        this.hide()
      }
    },
    show (params) {
      this.visible = true
      this.title = params.title
      this.onConfirm = params.onConfirm
    }
  },
  beforeMount () {
    Modal.EventBus.$on('show', params => {
      this.show(params)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_mixins.scss';
@include modal;
.modal {
  height: auto;
  width: 40rem;
}
</style>
