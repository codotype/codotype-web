
<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <h2>Edit {{schema.label}}</h2>
      </div>
    </div>

    <hr>

    <RecordForm :project="project" :schema="schema" :record="record" :persistRecord="persistRecord" :cancelForm="cancelForm"/>

  </div>
</template>

<!-- // // // //  -->

<script>
import router from '@/routers'
import RecordForm from '../../record_new/components/record_form.vue'

export default {
  props: ['project', 'schema', 'record'],
  components: {
    RecordForm
  },
  methods: {
    persistRecord (schema, record) {
      this.$store.commit('record/persist', { schema: schema, record: record, redirect: true })
    },
    cancelForm () {
      router.go(-1)
    }
  }
}
</script>


