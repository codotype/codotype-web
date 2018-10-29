<template>
  <div class="row">
    <div class="col-lg-8">
      <label>{{model.label}}</label>
      <br>
      <small>{{model.help}}</small>
      <MoreInfoLink :url="model.more_info_url" />
    </div>
    <div class="col-lg-4">

      <toggle-button
        v-if="model.type === 'BOOLEAN'"
        ref="input"
        :value="value"
        :color="'#4582EC'"
        @change="updateModel()"
      />

      <input
        v-if="model.type === 'TEXT'"
        class='form-control'
        :value="value"
        type="text"
        ref="input"
        @input="updateModel()"
      >

      <select
        v-if="model.type === 'TEXT_SELECT'"
        class='form-control'
        :value="value"
        type="text"
        ref="input"
        @input="updateModel()"
      >
        <option :value="opt.value" v-for="opt in model.options" :key="opt.id">{{opt.label}}</option>
      </select>

    </div>
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'

export default {
  name: 'OptionFormitem',
  props: ['model', 'value'],
  components: {
    MoreInfoLink
  },
  methods: {
    updateModel () {
      if (this.model.type === 'BOOLEAN') {
        this.$emit('input', this.$refs.input.toggled)
      } else if (this.model.type === 'NUMBER') {
        this.$emit('input', Number(this.$refs.input.value))
      } else {
        this.$emit('input', this.$refs.input.value)
      }
    }
  }
}
</script>
