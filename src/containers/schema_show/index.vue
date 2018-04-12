
<template>
  <div class="row">
    <div class="col-lg-12">
      <EditorHeader :help="'Defines the attributes that can be assigned to a single ' + model.label" >

        <div class="row">
          <div class="col-lg-12">
            <a :href="`#/projects/${project_id}/seeds/${model._id}`" class='btn btn-outline-warning'>
              <i class="fa fa-fw fa-plus mr-2"></i>
              Seed Data
            </a>

            <button class='btn btn-primary' @click="showNewAttributeForm()">
              <i class="fa fa-fw fa-plus mr-2"></i>
              New Attribute
            </button>

            <!-- Bootstrap Modal Component -->
            <b-modal id="new-attribute"
              ref="newAttributeModal"
              :title="'New Attribute'"
              @ok="createAttribute()"
              header-bg-variant="dark"
              header-text-variant="light"
              body-bg-variant="dark"
              body-text-variant="light"
              footer-bg-variant="primary"
              footer-text-variant="light"
              ok-variant='primary'
              ok-title='Create'
              cancel-title='Cancel'
              cancel-variant='dark'
            >
              <AttributeForm :schema="model" :model="newAttribute" />
            </b-modal>

          </div>
        </div>

      </EditorHeader>
    </div>

    <!-- Attribute List -->
    <div class="col-lg-12">
      <AttributeList :schema='model' />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import AttributeList from './components/AttributeList'
import AttributeForm from './components/AttributeForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['project_id', 'schema_id'],
  metaInfo: {
    title: 'Schema - Show'
  },
  components: {
    AttributeList,
    AttributeForm
  },
  created () {
    this.selectModel(this.schema_id)
  },
  computed: mapGetters({
    model: 'schema/selectedModel',
    newAttribute: 'attribute/newModel'
  }),
  methods: {
    ...mapActions({
      selectModel: 'schema/selectModel',
      createAttribute: 'attribute/create',
      resetNewAttribute: 'attribute/resetNewModel'
    }),
    showNewAttributeForm () {
      this.resetNewAttribute()
      this.$refs.newAttributeModal.show()
    }
  }
}
</script>
