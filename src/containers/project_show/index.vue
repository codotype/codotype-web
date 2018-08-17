
<template>
  <div class="container-fluid">

    <!-- Abstract into Header component -->
    <!-- <div class="row d-flex align-items-center"> -->
      <!-- <div class="col-md-6"> -->
        <!-- <h2 class="mb-0 font-weight-normal"> -->
          <!-- {{ model.label }} -->
          <!-- <small class="text-muted ml-2">{{ model.identifier }}</small> -->
          <!-- <small class="text-muted ml-2" v-if="generatorActivated">Generator</small> -->
          <!-- <small class="text-muted ml-2" v-else>Editor</small> -->
        <!-- </h2> -->
      <!-- </div> -->
      <!-- <div class="col-md-6 text-right"> -->
        <!-- <a class="btn btn-lg btn-warning" :href="'#/projects/' + model._id + '/schemas'" v-if="generatorActivated"> -->
          <!-- <i class="fa fa-fw fa-reply mr-2"></i> -->
          <!-- Back to Editor -->
        <!-- </a> -->
        <!-- <a class="btn btn-lg btn-success" :href="'#/projects/' + model._id + '/generate'" v-else> -->
          <!-- <i class="fa fa-fw fa-play mr-2"></i> -->
          <!-- Generate Application -->
        <!-- </a> -->
      <!-- </div> -->
    <!-- </div> -->

    <div class="row">

      <!-- TODO - abstract this into an independent Nav component -->
      <!-- <div class="col-md-2 h-100 pt-3" style='border-right: 1px solid #666;' v-if="!generatorActivated"> -->
        <!-- <ProjectNav/> -->
      <!-- </div> -->

      <!-- <div :class=" generatorActivated ? 'col-lg-12' : 'col-lg-10 pt-1' "> -->
        <!-- <router-view/> -->
      <!-- </div> -->
      <div class="col-lg-12">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectNav from './components/ProjectNav'
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
  components: {
    ProjectNav
  },
  methods: mapActions({
    selectModel: 'project/selectModel'
  }),
  computed: mapGetters({
    model: 'project/selectedModel',
    generatorActivated: 'generator/activated'
  })
}
</script>
