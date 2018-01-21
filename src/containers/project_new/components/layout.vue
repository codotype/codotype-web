
<template>
  <div class="row d-flex flex-column align-items-center">

    <div class="col-lg-12">
      <h2>Project - New</h2>
      <hr>
    </div>

    <div class="col-lg-6 d-flex flex-column">
      <div class="form-group">
        <label class='mb-0'>
          Label
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-2">The name of your project</small>
        <input type="text" class="form-control" placeholder="Label" v-model="model.label" @input="onLabelInput()">
      </div>
    </div>

    <!-- <div class="col-lg-6"> -->
      <!-- <div class="form-group"> -->
        <!-- <label class='mb-0'> -->
          <!-- Identifier -->
          <!-- <span class='text-danger'>*</span> -->
        <!-- </label> -->
        <!-- <small class="form-text text-muted mb-2">The lowercase-only version of the Label </small> -->
        <!-- <input type="text" class="form-control" placeholder="Identifier" v-model="model.identifier" disabled="true"> -->
      <!-- </div> -->
    <!-- </div> -->

    <!-- <div class="col-lg-12"> -->
      <!-- <ProjectStackForm :model="model"/> -->
    <!-- </div> -->


    <!-- TODO - abstract into FORM CONTROLS -->
    <div class="col-lg-6 d-flex flex-column text-right" @click="formCancel()">
      <div class="btn-group w-100">
        <button class="btn w-50 btn-outline-light mr-2">
          <i class="fa fa-fw fa-times mr-1"></i>
          Cancel
        </button>

        <!-- <button class="btn btn-outline-success" @click="validateAttributes()" v-if="record._id"> -->
          <!-- <i class="fa fa-fw fa-plus mr-1"></i> -->
          <!-- Update {{ schema.label }} -->
        <!-- </button> -->

        <button class="btn w-50 btn-outline-success" @click="formSubmit()">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Create Project
        </button>
      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>

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
    formCancel () {
      window.location = '#/'
    },
    formSubmit () {
      return this.$store.dispatch('project/create', this.model)
    }
  }
}
</script>


