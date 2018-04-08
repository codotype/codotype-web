
<template>
  <div class="container-fluid">

    <!-- Abstract into Header component -->
    <div class="row d-flex align-items-center">
      <div class="col-md-6">
        <h2 class="mb-0 font-weight-normal">
          {{ model.label }}
          <!-- <small class="text-muted ml-2">{{ model.identifier }}</small> -->
          <small class="text-muted ml-2" v-if="generatorAcivated">Generator</small>
          <small class="text-muted ml-2" v-else>Editor</small>
        </h2>
      </div>
      <div class="col-md-6 text-right">
        <a class="btn btn-lg btn-warning" :href="'#/projects/' + model._id" v-if="generatorAcivated">
          <i class="fa fa-fw fa-reply mr-2"></i>
          Back to Editor
        </a>
        <a class="btn btn-lg btn-success" :href="'#/projects/' + model._id + '/generate'" v-else>
          <i class="fa fa-fw fa-play mr-2"></i>
          Generate
        </a>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-md-3" v-if="!generatorAcivated">
        <p class="lead">Application</p>
        <b-nav vertical pills>
          <b-nav-item :href="'#/projects/' + project_id + '/meta'" s>
            Meta
          </b-nav-item>
          <b-nav-item active :href="'#/projects/' + project_id + '/schemas'" >
            Content Types
          </b-nav-item>
          <b-nav-item disabled>Settings</b-nav-item>
          <b-nav-item disabled>Authorization</b-nav-item>
          <b-nav-item disabled>Seed Data</b-nav-item>
          <b-nav-item disabled>Environment</b-nav-item>
        </b-nav>

        <p class="lead">Content Types</p>
        <b-nav vertical pills>
          <b-nav-item v-for="schema in model.schemas" :key="schema._id" :href="'#/projects/' + project_id + '/schemas/' + schema._id">
            {{ schema.label_plural }}
          </b-nav-item>
        </b-nav>


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
