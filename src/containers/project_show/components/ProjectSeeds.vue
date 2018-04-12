<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- Header -->
      <EditorHeader :help="'Define seed data for the ' + project.label + ' app.'">
      </EditorHeader>

      <!-- Schema List -->
      <ul class='list-group'>
        <a class='list-group-item bg-dark text-light border-light' v-for="schema in collection" :key="schema._id" :href="'#/projects/' + project._id + '/seeds/' + schema._id">
          <div class="row">
            <div class="col-lg-3">
              {{ schema.label }}
            </div>
            <div class="col-lg-3 text-primary">
              <i class="fa fa-check mr-2"></i>
              5 records
            </div>
            <div class="col-lg-6">
            </div>
          </div>
        </a>
      </ul>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { mapGetters, mapActions } from 'vuex'
// import SchemaForm from '@/components/schema/SchemaForm'

export default {
  computed: mapGetters({
    collection: 'schema/collection',
    project: 'project/selectedModel'
  })
}
</script>
