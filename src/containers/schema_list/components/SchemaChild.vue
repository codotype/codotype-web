
<template>
  <a class='list-group-item border-light bg-dark text-light' :href="'#/projects/' + model._id + '/schemas/' + schema._id">

    <div class="row">
      <div class="col-md-3">
        {{ schema.label_plural }}
      </div>

      <div class="col-md-3">
        {{ schema.attributes.length }} Attributes
      </div>

      <div class="col-md-6 text-right">

        <!-- Destroy Schema Confirmation -->
        <button class="btn btn-sm btn-outline-danger" v-if="enableDestroy" v-b-modal="'modal_' + schema._id">
          <i class="fa fa-trash mr-1"></i>
          Destroy
        </button>

        <!-- Disable User Schema -->
        <button class="btn btn-sm btn-outline-light" v-else-if="schema.enabled" @click="schema.enabled = false">
          <i class="fa fa-square-o mr-1"></i>
          Disable
        </button>

        <!-- Disable User Schema -->
        <button class="btn btn-sm btn-outline-light" v-else @click="schema.enabled = true">
          <i class="fa fa-square mr-1"></i>
          Enable
        </button>

        <!-- Bootstrap Modal Component -->
        <b-modal v-if="enableDestroy" :id="'modal_' + schema._id"
          :title="'Destroy ' + schema.label + '?'"
          @ok="destroySchema(schema)"
          header-bg-variant='dark'
          header-text-variant='light'
          body-bg-variant='dark'
          body-text-variant='light'
          footer-bg-variant='danger'
          footer-text-variant='light'
          ok-variant='danger'
          ok-title='DESTROY'
          cancel-title='Cancel'
          cancel-variant='dark'
        >
          <p class="text-left">Are you sure you want to destroy the {{ schema.label }} schema?</p>
        </b-modal>

      </div>

    </div>

  </a>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['schema'],
  methods: mapActions({
    editSchema: 'schema/edit',
    destroySchema: 'schema/remove'
  }),
  computed: {
    ...mapGetters({
      model: 'project/selectedModel'
    }),
    enableDestroy () {
      return this.schema.identifier !== 'user'
    }
  }
}
</script>
