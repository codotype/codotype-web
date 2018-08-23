
<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row d-flex align-items-center">

        <div class="col-lg-7">
          <h4 class="mb-0">
            {{ model.label + ' Model' }}
            <button class="btn btn-link py-0" v-b-tooltip.hover.right title='Edit Model Name'>
              <i class="fa fa-pencil"></i>
            </button>
          </h4>
        </div>

        <div class="col-lg-5 d-flex align-items-center justify-content-end">

          <button class='btn btn-sm btn-outline-danger' v-b-modal="'destroy-schema'" v-b-tooltip.hover.left title='Destroy Model'>
            <i class="fa fa-fw fa-trash"></i>
          </button>

          <!-- Destroy Schema Confirmation -->
          <b-modal id="destroy-schema"
            :title="'Destroy Model?'"
            @ok="destroySchema(model)"
            ok-title='DESTROY'
            ok-variant='danger'
            cancel-title='Cancel'
          >
            <p>Are you sure you want to destroy this Model?</p>
          </b-modal>
        </div>

        <div class="col-lg-12 pb-1">
          <small class="text-muted">
            {{ 'Define attributes and relations that describe a single ' + model.label + ' model'}}
          </small>
        </div>

      </div>
    </div>

    <!-- Attribute List -->
    <div class="col-lg-12">
      <AttributeList :schema='model' />
      <RelationList :schema='model' class="mt-3" />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import RelationList from '@/modules/relation/components/RelationList'
import AttributeList from '@/modules/attribute/components/AttributeList'

export default {
  components: {
    AttributeList,
    RelationList
  },
  computed: mapGetters({
    model: 'schema/selectedModel'
  }),
  methods: mapActions({
    editSchema: 'schema/edit',
    destroySchema: 'schema/remove'
  })
}
</script>
