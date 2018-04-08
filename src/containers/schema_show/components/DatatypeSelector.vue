
<template>
  <div class="form-group">
    <label>DataType</label>
    <small class="form-text text-muted">The type of data represented by this attribute.</small>

    <!-- <select class="form-control" ref="select" placeholder="Datatype" @change="updateModel()" > -->
      <!-- <option value=''></option> -->
      <!-- <option v-for="opt in datatypes" :value='opt.value'>{{opt.text}}</option> -->
    <!-- </select> -->

    <!-- Hidden input (instead of select element above) -->
    <input class="form-control" type='hidden' ref="select" @change="updateModel()" />

    <div class="row">
      <div class="col-sm-6 pb-2" v-for="opt in datatypes">
        <button class='btn btn-sm btn-block text-left btn-outline-light active' v-if="opt.value === value" @click="setDatatype(opt.value)">
          <i :class="'fa mr-2 ' + opt.icon"></i>
          {{opt.text}}
        </button>

        <button class='btn btn-sm btn-block text-left btn-outline-light' v-else @click="setDatatype(opt.value)">
          <i :class="'fa mr-2 ' + opt.icon"></i>
          {{opt.text}}
        </button>
      </div>
    </div>

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
