
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
          <button class='btn btn-sm btn-outline-danger' v-b-modal="'destroy-schema'"">
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
            {{ 'Defines the attributes and relations that can be assigned to a single ' + model.label }}
          </small>
        </div>

      </div>
    </div>

    <!-- Attribute List -->
    <div class="col-lg-12">
      <AttributeList :schema='model' />
      <br>
      <RelationList :schema='model' />
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
    destroySchema: 'schema/remove'
  })
}
</script>
