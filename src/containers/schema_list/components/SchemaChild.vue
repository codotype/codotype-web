
<template>
  <li class='list-group-item border-light bg-dark text-light'>

    <div class="row">
      <div class="col-md-6">
        <!-- schema URL -->
        <!-- <a :href="'#/schemas/' + schema._id">{{schema.label_plural}}</a> -->
        {{ schema.label_plural }}
      </div>

      <div class="col-md-6 text-right">

        <button class='btn btn-sm btn-outline-warning' @click="editSchema(schema)">
          <i class="fa fa-pencil mr-1"></i>
          Edit
        </button>

        <!-- Destroy Schema Confirmation -->
        <button class="btn btn-sm btn-outline-danger" v-if="enableDestroy" v-b-modal="'modal_' + schema._id">
          <i class="fa mr-1 fa-trash"></i>
          Destroy
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

  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['schema'],
  methods: mapActions({
    editSchema: 'schema/edit',
    destroySchema: 'schema/remove'
  }),
  computed: {
    enableDestroy () {
      return this.schema.identifier !== 'user'
    }
  }
}
</script>
