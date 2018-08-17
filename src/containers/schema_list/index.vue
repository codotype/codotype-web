
<template>
  <div class="row">
    <div class="col-lg-12">
      <Header/>
    </div>

    <div class="col-lg-4">
      <button class="btn btn-primary btn-block">
        <i class="fa fa-fw fa-plus mr-2"></i>
        New Model
      </button>

      <ul class='list-group mt-3'>
        <SchemaChild v-for="schema in collection" :schema="schema" :key="schema._id" />
      </ul>
    </div>
    <div class="col-lg-8">
      <router-view/>
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


