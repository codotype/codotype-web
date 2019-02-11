<template>
  <div class="row">
    <div class="col-lg-12">

      <span class='d-flex align-items-center'>
        <img class="generator-icon mr-1" :src="model.icon" v-if="model.icon">
        <label class='mb-0'>{{model.label}}</label>
        <span class='ml-1 text-danger' v-if="model.required">*</span>
        <MoreInfoLink class='ml-3 mb-2' :url="model.more_info_url" />
      </span>


      <small class='mt-3'>{{model.help}}</small>

    </div>

    <div class="col-lg-12 mt-2">

      <toggle-button
        v-if="model.type === DATATYPE_BOOLEAN"
        ref="input"
        :value="value"
        :color="'#4582EC'"
        class='mr-3'
        @change="updateModel()"
      />

      <input
        v-if="model.type === DATATYPE_STRING"
        class='form-control'
        :value="value"
        :placeholder="model.label"
        type="text"
        ref="input"
        @input="updateModel()"
      >

      <select
        v-if="model.type === DATATYPE_STRING_SELECT"
        class='form-control'
        :value="value"
        type="text"
        ref="input"
        @input="updateModel()"
      >
        <option :value="opt.value" v-for="opt in model.options" :key="opt.id">{{opt.label}}</option>
      </select>

      <ul class='list-group' v-if="model.type === DATATYPE_BOOLEAN_GROUP">

        <li class='list-group-item d-flex align-items-center'
          v-for="opt in model.options"
          :key="opt.identifier">

          <toggle-button
            ref="input"
            :value="value"
            :color="'#4582EC'"
            class='mb-0 mr-3'
            @change="updateModel()"
          />

          <label class='mb-0 mr-2'>{{opt.label}}</label>
          <i class="fa fa-question-circle text-muted" v-b-tooltip.hover.right :title="opt.help"></i>
          <!-- <MoreInfoLink class='ml-3 mb-2' :url="opt.more_info_url" /> -->
        </li>

      </ul>

      <OptionPreview
        v-if="model.previewTemplate"
        :model="{ value: value }"
        :schema="schema"
        :template="model.previewTemplate"
      >
      </OptionPreview>

    </div>
  </div>
</template>

<script>
import {
  DATATYPE_STRING,
  DATATYPE_STRING_SELECT,
  DATATYPE_BOOLEAN,
  DATATYPE_BOOLEAN_GROUP,
  DATATYPE_NUMBER_INTEGER,
  DATATYPE_NUMBER_FLOAT,
  DATATYPE_NUMBER_DOUBLE
} from '@codotype/types/lib/datatypes'

import OptionPreview from '../../generator/components/OptionPreview'
import MoreInfoLink from '@codotype/ui/src/components/MoreInfoLink'

export default {
  name: 'OptionFormitem',
  props: ['model', 'schema', 'value'],
  components: {
    OptionPreview,
    MoreInfoLink
  },
  data () {
    return {
      DATATYPE_STRING,
      DATATYPE_STRING_SELECT,
      DATATYPE_BOOLEAN,
      DATATYPE_BOOLEAN_GROUP,
      DATATYPE_NUMBER_INTEGER,
      DATATYPE_NUMBER_FLOAT,
      DATATYPE_NUMBER_DOUBLE
    }
  },
  mounted () {
    // TODO - this should be abstracted to buildConfiguration
    if (!this.$refs.input) { return }
    if (!this.$refs.input.value && this.model.default_value) {
      this.$refs.input.value = this.model.default_value
    }
  },
  methods: {
    updateModel () {
      if (this.model.type === DATATYPE_BOOLEAN) {
        this.$emit('input', this.$refs.input.toggled)
      } else if ([DATATYPE_NUMBER_INTEGER, DATATYPE_NUMBER_FLOAT, DATATYPE_NUMBER_DOUBLE].includes(this.model.type)) {
        this.$emit('input', Number(this.$refs.input.value))
      } else {
        this.$emit('input', this.$refs.input.value)
      }
    }
  }
}
</script>
