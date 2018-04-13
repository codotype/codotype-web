
<template>
  <a class='list-group-item border-light bg-dark text-light'>

    <!-- Bootstrap Modal Component -->
    <b-modal v-if="enableDestroy"
      :id="'modal_' + schema._id"
      :title="'Destroy ' + schema.label + '?'"
      ref='modal'
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

    <a class="row align-items-center" :href="'#/projects/' + model._id + '/schemas/' + schema._id">
      <div class="col-md-3">
        <a>
          {{ schema.label }}
        </a>
      </div>

      <div class="col-md-3">
        <div class="text-warning" v-if="!schema.attributes.length">
          <i class="fa fa-exclamation mr-2"></i>
          No Attributes
        </div>

        <div class="text-success" v-else>
          <i class="fa fa-check mr-2"></i>
          {{ schema.attributes.length }} {{ schema.attributes.length === 1 ? 'Attribute' : 'Attributes' }}
        </div>
      </div>

      <div class="col-md-6 text-right">

        <!-- Destroy Schema Confirmation -->
        <!-- <button class="btn btn-sm btn-outline-danger" v-if="enableDestroy" v-b-modal="'modal_' + schema._id"> -->
        <button class="btn btn-sm btn-outline-danger" v-if="enableDestroy" @click.prevent.stop="showModal()">
          <i class="fa fa-trash mr-1"></i>
          Destroy
        </button>

        <!-- Disable User Schema -->
        <button class="btn btn-sm btn-outline-light" v-else disabled>
          <i class="fa fa-lock mr-1"></i>
          Locked
        </button>

      </div>

    </a>

  </a>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['schema'],
  methods: {
    ...mapActions({
      editSchema: 'schema/edit',
      destroySchema: 'schema/remove'
    }),
    showModal () {
      this.$refs.modal.show()
    }
  },
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

<style lang="sass">
  a.row.align-items-center
    text-decoration: none
</style>
