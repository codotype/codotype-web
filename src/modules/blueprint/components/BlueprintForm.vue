<template>
  <div class="row">
    <div class="col-sm-12">

      <div class="form-group">
        <label>
          Whats' the name of your project?
          <!-- <span class='text-danger'>*</span> -->
        </label>
        <!-- <small class="form-text text-muted mb-2">What's the name of your project?</small> -->
        <input
          type="text"
          ref="labelInput"
          class="form-control"
          placeholder="Label"
          v-model="newModel.label"
          @input="setIdentifier()">
      </div>

    </div>

    <div class="col-sm-12">
      <b-button
        size="lg"
        variant="primary"
        block
        :disabled="!newModel.label"
        @click="submit()"
      >
        <i class="fa fa-fw fa-plus"></i>
        Create Blueprint
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BlueprintForm',
  props: ['submit'],
  mounted () {
    this.resetNewModel()
    setTimeout(() => { this.$refs.labelInput.focus() }, 200) // Minor delay for input element focus
  },
  computed: mapGetters({
    newModel: 'project/newModel'
  }),
  methods: mapActions({
    resetNewModel: 'project/resetNewModel',
    setIdentifier: 'project/setIdentifier'
  })
}
</script>
