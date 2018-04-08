<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- Header -->
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Seed Data
          </h2>
        </div>
        <div class="col-lg-12">
          <small class="mb-2 form-text text-muted">Define seed data for the {{ project.label }} app.</small>
          <hr>
        </div>
      </div>

      <!-- Schema List -->
      <ul class='list-group'>
        <a class='list-group-item bg-dark text-light border-light' v-for="schema in collection" :key="schema._id" :href="'#/projects/' + project._id + '/seeds/' + schema._id">
          {{ schema.label }}
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
