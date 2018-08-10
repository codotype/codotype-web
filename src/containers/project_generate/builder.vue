
<template>
  <div class="row mt-2">
    <div class="col-lg-12">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-3">
            <div class="card border-light">
              <div class="card-body">
                <p class="lead mb-0">Generators</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-light" v-for="each in opts.client">
                  {{ each.label }}
                </li>
                <li class="list-group-item border-light" v-for="each in opts.server">
                  {{ each.label }}
                </li>
              </ul>
            </div>
          </div>


          <div class="col-lg-6">
            <div class="card card-body border-light">
              <p class="lead mb-0">Vue.js</p>
              <p class="card-text mb-0">A generator for Vue.js, Vue Router, Vuex, &amp; Bootstrap</p>
              <hr>
              <div class="row">
                <div class="col-lg-12">
                  TODO - FORM GOES HERE
                </div>
                <div class="col-lg-12">
                  <hr>
                </div>
                <div class="col-lg-12 text-right">
                  <button class="btn btn-outline-success">Add to build</button>
                  <button class="btn btn-outline-light">Clear</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card card-body border-light text-light">
              <p class='lead'>Build</p>

              <ul class="list-group">
                <li class="list-group-item border-light" v-for="each in opts.client">
                  {{ each.label }}
                </li>
              </ul>

              <hr>

              <button class="btn btn-lg btn-success btn-block py-4" @click="showGenerateModal()">
                <i class="fa fa-fw fa-play mr-2"></i>
                Generate Application
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import AbstractTab from './components/AbstractTab'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AbstractTab
  },
  created () {
    this.setActivated(true)
  },
  beforeDestroy () {
    this.setActivated(false)
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    fetching: 'generator/fetching',
    opts: 'generator/generatorFormOpts'
  }),
  methods: {
    showGenerateModal () {
      this.$refs.modal.show()
      console.log('generating?')
      // TODO - add a timeout here of a few seconds to allow the user to read the modal's message
      console.log(this.generateApplication())
    },
    ...mapActions({
      setActivated: 'generator/setActivated',
      generateApplication: 'generator/generate'
    })
  }
}
</script>
