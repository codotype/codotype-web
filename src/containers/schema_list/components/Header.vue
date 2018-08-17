
<template>
  <EditorHeader :title="project.label" :help="'Define data modeled by the ' + project.label + ' app.'">
    <div class="row">
      <div class="col-lg-12">

        <!-- <button class="btn btn-primary pull-right" v-b-modal="'new-schema'"> -->
          <!-- <i class="fa fa-fw fa-plus mr-2"></i> -->
          <!-- New Model -->
        <!-- </button> -->

        <a class="btn btn-success btn-lg" href="#/generators">
          <i class="fa fa-fw fa-rocket"></i>
          Generate App
        </a>

        <b-dropdown size="lg" right variant="outline-dark" >
          <template slot="button-content">
            <i class="fa fa-fw fa-cog"></i>
            Options
          </template>
          <b-dropdown-item>Export App</b-dropdown-item>
          <!-- <b-dropdown-item>Second Action</b-dropdown-item> -->
          <!-- <b-dropdown-item>Third Action</b-dropdown-item> -->
          <!-- <b-dropdown-divider></b-dropdown-divider> -->
          <!-- <b-dropdown-item>Something else here...</b-dropdown-item> -->
          <!-- <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
        </b-dropdown>

        <!-- Bootstrap Modal Component -->
        <!-- TODO - move this outside the scope of the loop, and instead pass only the options into a single instance -->
        <b-modal id="new-schema"
          :title="'New Model'"
          @ok="submit()"
          ok-title='Create'
          cancel-title='Cancel'
        >
          <SchemaForm :schema="model" />
          <!-- <pre class='text-left bg-light'>{{model}}</pre> -->
        </b-modal>

      </div>
    </div>
  </EditorHeader>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SchemaForm from '@/components/schema/SchemaForm'

export default {
  components: {
    SchemaForm
  },
  metaInfo: {
    title: 'Schemas - New'
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
