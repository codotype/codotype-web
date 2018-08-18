
<template>
  <div class="row">
    <div class="col-lg-12">
      <EditorHeader :title="model.label + ' Model'" :help="'Defines the attributes that can be assigned to a single ' + model.label" >

        <div class="row">
          <div class="col-lg-12">
            <!-- <a :href="`#/projects/${project_id}/seeds/${model._id}`" class='btn btn-outline-warning'> -->
              <!-- <i class="fa fa-fw fa-plus"></i> -->
              <!-- Seed Data -->
            <!-- </a> -->

            <!-- TODO - add destroy model link here -->

            <button class='btn btn-primary' @click="showNewAttributeForm()">
              <i class="fa fa-fw fa-plus"></i>
              New Attribute
            </button>

            <!-- Bootstrap Modal Component -->
            <b-modal size="lg" id="new-attribute"
              ref="newAttributeModal"
              :title="'New Attribute'"
              @ok="createAttribute()"
              ok-title='Create'
              cancel-title='Cancel'
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
