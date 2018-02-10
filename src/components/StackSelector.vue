
<template>
  <div class="row">
    <div class="col-lg-12 stack-items d-flex flex-row">
      <button :class="className(opt)" v-for="opt in options" :key="opt.id" @click="selectOption(opt)" :disabled="opt.disabled">
        <!-- <input class='d-flex flex-row' :type="type" ref="input" :id="opt.id" :value="opt.id" @change="onInputChange()" :disabled="!!opt.disabled"> -->
        <i :class="'d-flex flex-row ' + opt.icon"></i>
        <label class='d-flex flex-row my-2' :for="opt.id">{{ opt.label }}</label>
        <small class='d-flex flex-row' v-if="opt.disabled">Coming soon</small>
        <!-- <small class='d-flex flex-row spacer' v-else>sp</small> -->
      </button>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['options', 'type'],
  created () {
    if (!this.type) this.type = 'radio'
  },
  methods: {
    className (opt) {
      let css = 'btn btn-outline-light stack-item d-flex flex-column align-items-center justify-content-center'
      if (opt.selected) css += ' active'
      return css
    },
    selectOption (opt) {
      console.log('SELECT OPTION')
      opt.selected = true
      this.options.map((o) => {
        if (o.id === opt.id) {
          o.selected = true
          this.updateValue(o)
        } else {
          o.selected = false
        }
      })
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

  .stack-items
    button.stack-item
      height: 8rem
      width: 8rem
      margin-right: 1rem

      small.spacer
        opacity: 0

</style>


