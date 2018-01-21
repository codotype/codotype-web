
<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <h2>New {{schema.label}}</h2>
      </div>
    </div>

    <hr>

    <RecordForm :schema="schema" :record="record" :persistRecord="persistRecord" :cancelForm="cancelForm" />

  </div>
</template>

<!-- // // // //  -->

<script>
import router from '@/routers'
import RecordForm from './record_form.vue'

export default {
  props: ['schema', 'record'],
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


