
<template>

  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-12">
        <div class="card card-body bg-dark text-light border-light">

          <div class="row mb-2">
            <div class="col-lg-10">
              <h2>{{ model.label }}</h2>
            </div>
            <div class="col-lg-2 text-right">

              <!-- Opens Destroy Confirmation Modal -->
              <button class="btn btn-outline-success btn-sm" @click="generateApplication()">
                <i class="fa fa-fw fa-play mr-2"></i>
                Generate Application
              </button>

            </div>
          </div>

          <b-tabs>

            <!-- Project Detail -->
            <b-tab title="Project" active>
              <ProjectDetail :model="model" />
            </b-tab>

            <!-- Schemas -->
            <b-tab title="Schemas" >
              <SchemaTab :model="model" />
            </b-tab>

            <!-- Authentication -->
            <b-tab title="Authentication">
              <AuthTab :model="model" />
            </b-tab>

            <!-- Server Frameworks -->
            <!-- Databases -->
            <b-tab title="Server">
              <ServerTab :model="model" />
            </b-tab>

            <!-- Client Frameworks -->
            <!-- Build Tools -->
            <!-- CSS Frameworks -->
            <b-tab title="Client">
              <ClientTab :model="model" />
            </b-tab>

            <!-- Build -->
            <b-tab title="Build">
              <br>
              Build / Generate Codebase
              <br>
              Build Configuration / Options
            </b-tab>

          </b-tabs>

        </div>
      </div>
    </div>

  </div>

</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import ProjectDetail from './ProjectDetail'
import SchemaTab from './SchemaTab'
import AuthTab from './AuthTab'
import ServerTab from './ServerTab'
import ClientTab from './ClientTab'

export default {
  props: ['model'],
  components: {
    ProjectDetail,
    SchemaTab,
    AuthTab,
    ServerTab,
    ClientTab
  },
  methods: {
    generateApplication () {
      console.log('generateApplication')
    },
    onConfirm () {
      return store.dispatch('project/destroy', this.model)
    }
  }
}
</script>


