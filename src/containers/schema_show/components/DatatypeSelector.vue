
<template>
  <div class="form-group">
    <label>DataType</label>
    <small class="form-text text-muted">The type of data represented by this attribute.</small>
    <select class="form-control" ref="select" placeholder="Datatype" @change="updateModel()" >
      <option value=''></option>
      <option v-for="opt in datatypes" :value='opt.id'>{{opt.text}}</option>
    </select>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['value'],
  computed: mapGetters({
    datatypes: 'schema/datatypes'
  }),
  methods: {
    updateModel () {
      if (this.type === 'BOOL') {
        this.$emit('input', this.$refs.select.checked)
      } else {
        this.$emit('input', this.$refs.select.value)
      }
    }
  }
}
</script>
