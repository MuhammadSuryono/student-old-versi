<template>
  <transition name="fade">
    <div v-if="open" class="modal-backdrop">
      <div class="modal">
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button class="button button--confirm" @click.stop="confirm">
            Confirm
          </button>
          <button class="button button--cancel" @click.stop="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      open: false,
      message: '',
      resolver: () => null
    }
  },
  mounted () {
    this.$nuxt.$on('dialog', this.dialog)
  },
  methods: {
    confirm () {
      this.resolver(new Promise(resolve => resolve('confirmed')))
      this.close()
    },
    cancel () {
      this.resolver(
        new Promise((resolve, reject) => reject(new Error('cancelled')))
      )
      this.close()
    },
    close () {
      this.open = false
    },
    dialog ({ message, open, resolver }) {
      this.message = message
      this.open = open
      this.resolver = resolver
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.75);
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 16px;
  background-color: white;
  height: 200px;
  width: 200px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
}
.modal-body {
  padding: 16px 0;
}
.modal-footer {
  padding-top: 16px;
  border-top: solid 2px gray;
  text-align: right;
  button {
    margin-left: 16px;
  }
}
</style>
