
<template>
  <div class="row">
    <div class="col-lg-6">
      <h4>
        Models
      </h4>
    </div>
    <div class="col-lg-6">

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
    <div class="col-lg-12">
      <small class="mb-2 form-text text-muted">Defines data modeled by the {{ project.label }} app.</small>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SchemaForm from '@/components/schema/SchemaForm'

export default {
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
    model: 'schema/newModel',
    project: 'project/selectedModel'
  }),
  methods: mapActions({
    submit: 'schema/create',
    resetNewModel: 'schema/resetNewModel'
  })

}
</script>
