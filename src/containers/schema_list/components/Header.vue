
<template>
  <div class="row">
    <div class="col-lg-6">
      <p class="lead mb-0">
        Schemas
      </p>
    </div>
    <div class="col-lg-6">
      <!-- <a class="btn btn-outline-primary" :href="'#/projects/' + model._id + '/schemas/new' "> -->
        <!-- <i class="fa fa-fw fa-plus mr-2"></i> -->
        <!-- New Schema -->
      <!-- </a> -->
      <button class="btn btn-primary pull-right" v-b-modal="'new-schema'">
        <i class="fa fa-fw fa-plus mr-2"></i>
        New Schema
      </button>

      <!-- Bootstrap Modal Component -->
      <!-- TODO - move this outside the scope of the loop, and instead pass only the options into a single instance -->
      <b-modal id="new-schema"
        :title="'New Schema'"
        @ok="submit()"
        header-bg-variant="dark"
        header-text-variant="light"
        body-bg-variant="dark"
        body-text-variant="light"
        footer-bg-variant="success"
        footer-text-variant="light"
        ok-variant='success'
        ok-title='Create'
        cancel-title='Cancel'
        cancel-variant='dark'
      >
        <SchemaForm :schema="model" />
        <!-- <pre class='text-left bg-light'>{{model}}</pre> -->
      </b-modal>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SchemaForm from '@/components/schema/SchemaForm'

export default {
  // computed: mapGetters({
    // model: 'project/selectedModel'
  // })
  components: {
    SchemaForm
  },
  metaInfo: {
    title: 'Schemas - New' // title is now "blazeplate.io - Schemas - New"
  },
  created () {
    this.resetNewModel()
  },
  computed: mapGetters({
    model: 'schema/newModel'
  }),
  methods: mapActions({
    submit: 'schema/create',
    resetNewModel: 'schema/resetNewModel'
  })

}
</script>
