
<template>

  <ul class='list-group'>
    <li v-for="schema in collection" :key="schema._id" class='list-group-item border-light bg-dark text-light'>

      <div class="row">

        <div class="col-lg-8">
          <!-- schema URL -->
          <!-- <a :href="'#/schemas/' + schema._id">{{schema.label_plural}}</a> -->
          {{ schema.label_plural }}
        </div>

        <div class="col-lg-4 text-right">

          <!-- <a class='btn btn-sm btn-outline-light' :href="'#/schemas/' + schema._id"> -->
            <!-- <i class="fa fa-list-alt mr-1"></i> -->
            <!-- Records -->
          <!-- </a> -->

          <!-- <a class='btn btn-sm btn-outline-warning' :href="'#/schemas/' + schema._id + '/edit'"> -->
            <!-- <i class="fa fa-pencil mr-1"></i> -->
            <!-- Edit -->
          <!-- </a> -->

          <button class='btn btn-sm btn-outline-warning' @click="editSchema(schema)">
            <i class="fa fa-pencil mr-1"></i>
            Edit
          </button>

          <!-- Destroy Schema Confirmation -->
          <button class="btn btn-sm btn-outline-danger" v-b-modal="'modal_' + schema._id">
            <i class="fa mr-1 fa-trash"></i>
            Destroy
          </button>

          <!-- Bootstrap Modal Component -->
          <b-modal :id="'modal_' + schema._id"
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
  </ul>

  <!-- <div class="row mt-2"> -->
    <!-- <div class="col-lg-12"> -->
      <!-- <a class="btn btn-block btn-outline-success" href="#/schemas/new"> -->
        <!-- <i class="fa fa-fw fa-plus mr-2"></i> -->
        <!-- New Schema -->
      <!-- </a> -->
    <!-- </div> -->
  <!-- </div> -->

</template>

<!-- // // // //  -->

<script>
export default {
  props: ['collection'],
  methods: {
    editSchema (schema) {
      this.$store.commit('schema/editSchema', { schema })
    },
    destroySchema (schema) {
      // this.$store.commit('schema/destroy', { schema })
      this.$store.commit('project/removeSchema', { schema })
    }
  }
}
</script>
