<template>
  <div class="row">
    <div class="col-lg-12">

      <span class='d-flex align-items-center'>
        <toggle-button
          v-if="model.type === 'BOOLEAN'"
          ref="input"
          :value="value"
          :color="'#4582EC'"
          class='mr-3'
          @change="updateModel()"
        />
        <label class='mb-2'>{{model.label}}</label>
        <MoreInfoLink class='ml-3 mb-2' :url="model.more_info_url" />
      </span>

      <small>{{model.help}}</small>

    </div>

    <!-- <div class="col-lg-12" v-if="model.type !== 'BOOLEAN'"> -->
      <!-- <hr> -->
    <!-- </div> -->

    <div class="col-lg-12 mt-2" v-if="model.type !== 'BOOLEAN'">

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
