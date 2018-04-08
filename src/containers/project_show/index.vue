
<template>
  <div class="container-fluid">

    <!-- Abstract into Header component -->
    <div class="row d-flex align-items-center">
      <div class="col-md-6">
        <h2 class="mb-0 font-weight-normal">
          {{ model.label }}
          <!-- <small class="text-muted ml-2">{{ model.identifier }}</small> -->
          <small class="text-muted ml-2">App</small>
        </h2>
      </div>
      <div class="col-md-6 text-right">
        <a class="btn btn-outline-light" :href="'#/projects/' + model._id" v-if="generatorAcivated">
          <i class="fa fa-fw fa-reply mr-2"></i>
          Edit
        </a>
        <a class="btn btn-success" :href="'#/projects/' + model._id + '/generate'" v-else>
          <i class="fa fa-fw fa-play mr-2"></i>
          Generate
        </a>
      </div>
    </div>

    <hr>

    <div class="row d-flex align-items-center">
      <div class="col-md-3" v-if="!generatorAcivated">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class='nav-link' :href="'#/projects/' + project_id">Metadata</a>
          </li>
          <li class="nav-item">
            <a class='nav-link' :href="'#/projects/' + project_id + '/schemas'">Content Types</a>
          </li>
          <!-- <li class="nav-item"> -->
            <!-- <a class='nav-link' :href="'#/projects/' + project_id + '/settings'">Authorization</a> -->
          <!-- </li> -->
          <!-- <li class="nav-item"> -->
            <!-- <a class='nav-link' :href="'#/projects/' + project_id + '/schemas'">Seed Data</a> -->
          <!-- </li> -->
          <!-- <li class="nav-item"> -->
            <!-- <a class='nav-link' :href="'#/projects/' + project_id + '/settings'">Settings</a> -->
          <!-- </li> -->
          <!-- <li class="nav-item"> -->
            <!-- <a class="nav-link active" href="#">Active</a> -->
          <!-- </li> -->
          <!-- <li class="nav-item"> -->
            <!-- <a class="nav-link disabled" href="#">Disabled</a> -->
          <!-- </li> -->
        </ul>
      </div>
      <div :class=" generatorAcivated ? 'col-lg-12' : 'col-lg-9' ">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'project_show',
  props: ['project_id'],
  metaInfo: {
    title: 'Projects - Show'
  },
  created () {
    return this.selectModel(this.project_id)
  },
  methods: mapActions({
    selectModel: 'project/selectModel'
  }),
  computed: mapGetters({
    model: 'project/selectedModel',
    generatorAcivated: 'generator/activated'
  })
}
</script>
