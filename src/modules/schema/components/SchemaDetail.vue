<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row d-flex align-items-center">

        <div class="col-lg-7">
          <h4 class="mb-0">
            {{ model.label + ' Model' }}
            <button
              class="btn btn-link py-0"
              v-b-modal="'edit-schema'"
              v-b-tooltip.hover.right
              title='Edit Model Name'
              v-if="!isUserModel(model)"
            >
              <i class="fas fa-pencil-alt"></i>
            </button>
          </h4>
        </div>

        <div class="col-lg-5 d-flex align-items-center justify-content-end">

          <button
            class='btn btn-sm btn-outline-danger'
            v-b-modal="'destroy-schema'"
            v-b-tooltip.hover.left title='Remove Model'
            v-if="!isUserModel(model)"
          >
            <i class="fa fa-fw fa-trash"></i>
          </button>

          <!-- Edit Schema Confirmation -->
          <b-modal id="edit-schema"
            :title="'Edit Model'"
            @ok="updateSchema(editModel)"
            ok-title='Save'
            ok-variant='success'
            cancel-title='Cancel'
            v-if="!isUserModel(model)"
          >
            <!-- <p>Are you sure you want to EDIT this Model?</p> -->
            <SchemaForm :schema="editModel" />
          </b-modal>

          <!-- Destroy Schema Confirmation -->
          <b-modal id="destroy-schema"
            :title="'Remove Model?'"
            @ok="destroySchema({ schemaId: model._id })"
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

        <div class="col-lg-12 pb-1" v-if="isUserModel(model)">
          <b-alert
            show
          >
            <i class="fa fa-info-circle mr-2"></i>The <strong>User Model</strong> is included by default
            <br>
            <small>
              It comes pre-loaded with <strong>Email</strong> &amp; <strong>Username</strong> attributes that cannot be removed
            </small>
          </b-alert>
          <!-- <small class="text-muted"> -->
            <!-- {{ 'Define attributes and relations that describe a single ' + model.label + ' model'}} -->
          <!-- </small> -->
        </div>

      </div>
    </div>

    <!-- Attribute List -->
    <div class="col-lg-12">
      <AttributeList :schema="model" />
      <RelationList :schema="model" class="mt-3" />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import SchemaForm from '@/modules/schema/components/SchemaForm'
import RelationList from '@/modules/relation/components/RelationList'
import AttributeList from '@/modules/attribute/components/AttributeList'

export default {
  components: {
    SchemaForm,
    AttributeList,
    RelationList
  },
  computed: mapGetters({
    model: 'schema/selectedModel',
    editModel: 'schema/editModel'
  }),
  methods: {
    ...mapActions({
      updateSchema: 'schema/update',
      destroySchema: 'project/removeSchema'
    }),
    isUserModel (model) {
      return model.identifier === 'user'
    }
  }
}
</script>
