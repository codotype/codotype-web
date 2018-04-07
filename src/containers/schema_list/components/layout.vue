
<template>

  <div class="row">
    <div class="col-lg-12">

      <!-- TODO - abstract into USER ContentType / Schema -->
      <!-- <pre class="text-light bg-dark">{{model.user}}</pre> -->
      <div class="card card-body bg-dark border-light text-light">
        <div class="row">
          <div class="col-lg-6">
            {{ schema.user.label_plural }}
          </div>
          <div class="col-lg-6 text-right">
            <button class="btn btn-sm btn-outline-light">
              Enabled
            </button>
            <button class="btn btn-sm btn-light">
              Disabled
            </button>
            <button class="btn btn-sm btn-outline-warning">
              Edit
            </button>
          </div>
        </div>
      </div>

    </div>

    <div class="col-lg-12">
      <hr>
    </div>

    <div class="col-lg-12">
      <ul class='list-group'>
        <li v-for="schema in collection" :key="schema._id" class='list-group-item border-light bg-dark text-light'>

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

    </div>
  </div>

  <!-- <div class="row mt-2"> -->
    <!-- <div class="col-lg-12"> -->
      <!-- <a class="btn btn-block btn-outline-success" href="#/schemas/new"> -->
        <!-- <i class="fa fa-fw fa-plus mr-2"></i> -->
        <!-- New Schema -->
      <!-- </a> -->
    <!-- </div> -->
  <!-- </div> -->

</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['schema', 'collection'],
  methods: mapActions({
    editSchema: 'schema/edit',
    destroySchema: 'schema/remove'
  })
}
</script>
