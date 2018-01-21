
<template>
  <div class="card bg-light text-dark mb-3">
    <div class="card-header">
      <p class='lead mb-0'>{{ title }}</p>
    </div>
    <div class="card-body">
      <div class="row">
        <div class='col-lg-12' v-for="opt in options" :key="opt.id">
          <input :type="type" ref="input" :id="opt.id" :value="opt.id" @change="onInputChange()" :disabled="!!opt.disabled">
          <i :class="'devicon devicon-' + opt.icon"></i>
          <label :for="opt.id" v-if="opt.disabled">{{ opt.label }} (Coming soon!)</label>
          <label :for="opt.id" v-else>{{ opt.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['title', 'options', 'type'],
  created () {
    if (!this.type) this.type = 'radio'
  },
  methods: {
    onInputChange () {
      console.log('onInputChange')
      console.log(this.$refs.input.value)
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>

<style type="text/css" scoped="true">
  i.devicon {
    font-size: 2rem;
  }
</style>


