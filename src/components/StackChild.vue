
<template>
  <button :class="className" @click="selectOption(opt)" :disabled="opt.disabled">
    <i :class="'d-flex flex-row ' + opt.icon"></i>
    <label class='d-flex flex-row my-2' :for="opt.id">{{ opt.label }}</label>
    <small class='d-flex flex-row' v-if="opt.disabled">Coming soon</small>
    <!-- <small class='d-flex flex-row spacer' v-else>sp</small> -->
  </button>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['opt'],
  computed: {
    className () {
      let css = 'btn btn-outline-light stack-item d-flex flex-column align-items-center justify-content-center'
      if (this.opt.selected) css += ' active'
      return css
    }
  },
  methods: {
    selectOption () {
      console.log('SELECT OPTION')
      // this.opt.selected = true
      // this.options.map((o) => {
      //   if (o.id === this.opt.id) {
      //     o.selected = true
      //     this.updateValue(o)
      //   } else {
      //     o.selected = false
      //   }
      // })
    },
    onInputChange () {
      console.log('onInputChange')
      console.log(this.$refs.input.value)
      this.$emit('input', this.$refs.input.value)
    },
    updateValue (o) {
      this.$emit('input', o.id)
    }
  }
}
</script>

<style lang="sass" scoped="true">
  i
    font-size: 2rem

  button.stack-item
    height: 8rem
    width: 8rem
    margin-right: 1rem

    small.spacer
      opacity: 0

</style>


