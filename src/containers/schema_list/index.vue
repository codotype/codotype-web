
<template>
  <div class="row">
    <div class="col-lg-12">
      <Header/>
    </div>

    <div class="col-lg-12">
      <hr>
    </div>

    <div class="col-lg-12">
      <ul class='list-group'>
        <SchemaChild v-for="schema in collection" :schema="schema" :key="schema._id" />
      </ul>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import Header from './components/Header'
import SchemaChild from './components/SchemaChild'

export default {
  metaInfo: {
    title: 'Schemas'
  },
  components: {
    Header,
    SchemaChild
  },
  computed: mapGetters({
    collection: 'schema/collection'
  })
}
</script>


