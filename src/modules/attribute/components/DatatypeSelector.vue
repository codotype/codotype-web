
<template>
  <div class="form-group">
    <label>DataType</label>
    <small class="form-text text-muted">The type of data represented by this attribute.</small>

    <!-- Working <select> element - keep for testing? -->
    <!-- <select class="form-control" ref="select" placeholder="Datatype" @change="updateModel()" > -->
      <!-- <option value=''></option> -->
      <!-- <option v-for="opt in datatypes" :value='opt.value'>{{opt.text}}</option> -->
    <!-- </select> -->

    <!-- Hidden input (instead of select element above) -->
    <input class="form-control" type='hidden' ref="select" @change="updateModel()" />

    <!-- Basic Datatypes -->
    <div class="row">
      <DatatypeOption
        v-for="opt in datatypes"
        :key="opt.value"
        :opt="opt"
        :val="value"
        :click="setDatatype"
      />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import DatatypeOption from './DatatypeOption'

export default {
  props: ['value'],
  components: {
    DatatypeOption
  },
  computed: mapGetters({
    datatypes: 'schema/datatypes'
  }),
  methods: {
    setDatatype (datatype) {
      this.$refs.select.value = datatype
      this.updateModel()
    },
    updateModel () {
      this.$emit('input', this.$refs.select.value)
    }
  }
}
</script>
