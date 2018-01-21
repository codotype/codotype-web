
<template>
  <div class="container">
    <h2>Project - New</h2>
    <hr>

    <div class="row">

      <div class="col-lg-6">
        <div class="form-group">
          <label class='mb-0'>
            Label
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted mb-2">The name of your project</small>
          <input type="text" class="form-control" placeholder="Label" v-model="model.label" @input="onLabelInput()">
        </div>
      </div>


      <div class="col-lg-6">
        <div class="form-group">
          <label class='mb-0'>
            Identifier
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted mb-2">The lowercase-only version of the Label </small>
          <input type="text" class="form-control" placeholder="Identifier" v-model="model.identifier" disabled="true">
        </div>
      </div>

      <div class="col-lg-12">
        <ProjectStackForm :model="model"/>
      </div>


      <!-- TODO - abstract into FORM CONTROLS -->
      <div class="col-lg-12 text-right">
        <button class="btn btn-outline-dark mr-2">
          <i class="fa fa-fw fa-times mr-1"></i>
          Cancel
        </button>

        <!-- <button class="btn btn-outline-success" @click="validateAttributes()" v-if="record._id"> -->
          <!-- <i class="fa fa-fw fa-plus mr-1"></i> -->
          <!-- Update {{ schema.label }} -->
        <!-- </button> -->

        <button class="btn btn-outline-success" @click="formSubmit()">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Create Project
        </button>

      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import ProjectStackForm from './ProjectStackForm'
const classify = require('underscore.string/classify')
const underscored = require('underscore.string/underscored')
const pluralize = require('pluralize')

export default {
  components: {
    ProjectStackForm
  },
  data () {
    return {
      model: {
        label: '',
        identifier: '',
        schemas: [],
        stack: {
          server: {
            id: 'expressjs'
          },
          client: {
            id: 'vuejs'
          },
          authentications: [],
          features: [],
          databases: [],
          deployments: []
        }
      }
    }
  },
  methods: {
    onLabelInput () {
      // TODO - move these transformations into Vuex store
      console.log('ON LABEL INPUT')
      console.log(this.model.label)
      console.log(pluralize(this.model.label))
      this.model.identifier = classify(this.model.label)
      this.model.identifier = underscored(this.model.label)
    },
    formSubmit () {
      return store.dispatch('project/create', this.model)
    }
  }
}
</script>


