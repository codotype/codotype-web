<template>
  <b-row>
    <b-col lg=12>

      <b-tabs>

        <b-tab
          button-id="build-readme-nav"
          title="Start"
          active
          class='card-body bg-white border border-top-0'
        >

          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h1 class='display-3' style="letter-spacing: .25rem !important;">Codotype</h1>
                </div>
              </div>

              <div class="row py-2">

                <div class="col-lg-12 text-center">
                  <p class="lead">visual code scaffolding for the modern web</p>
                  <p>Prototype new web applications amazingly fast</p>
                  <p>Define your models, attributes, and relations - Codotype does the rest</p>
                </div>

                <div class="col-lg-12 text-center d-flex align-items-center justify-content-center">
                  <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-lg-6 text-center">
                  <hr class='mt-2'>
                </div>
              </div>

              <div class="row mt-2 mb-4 justify-content-center">
                <div class="col-lg-4">
                  <b-button
                    size="lg"
                    variant="primary"
                    block
                  >
                    <i class="fas fa-drafting-compass faa-wrench animated mr-2"></i>
                    Start Your Next Project
                  </b-button>
                </div>
              </div>

            </div>
          </div>

        </b-tab>

        <!-- <b-tab -->
          <!-- title="Global Options" -->
          <!-- v-if="model.global_options[0]" -->
          <!-- button-id="build-global-options-nav" -->
        <!-- > -->
          <!-- <br> -->

          <!-- <EditorHeader -->
            <!-- title="Global Options" -->
            <!-- help="Configure global options for this generator" -->
            <!-- url="https://codotype.github.io" -->
          <!-- /> -->

          <!-- <div class="card card-body mt-2" v-for="attr in model.global_options"> -->
            <!-- <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/> -->
          <!-- </div> -->

          <!-- <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!model.global_options[0]"> -->
            <!-- <p class="lead mb-0">No global options exposed by this generator</p> -->
          <!-- </div> -->

        <!-- </b-tab> -->

        <b-tab
          :title="group.label"
          v-for="group in model.option_groups"
          v-if="group.options[0]"
          :key="group.identifier"
        >
          <br>

          <EditorHeader
            :title="group.label"
            help="Configure global options for this generator"
            url="https://codotype.github.io"
          />

          <div class="card card-body mt-2" v-for="attr in group.options">
            <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/>
          </div>

          <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!group.options[0]">
            <p class="lead mb-0">No options exposed by this generator</p>
          </div>

        </b-tab>

        <b-tab title='Data Models'>
          <BlueprintShow class="mt-3"/>
        </b-tab>

      </b-tabs>

    </b-col>
  </b-row>
</template>

<script>
import marked from 'marked'
import { mapGetters, mapActions } from 'vuex'
import BlueprintShow from '@/modules/blueprint/pages/show'
import OptionFormItem from '@/modules/option/components/OptionFormItem'

export default {
  name: 'GeneratorShow',
  props: ['id'],
  data () {
    return {
      configurationObject: {}
    }
  },
  components: {
    OptionFormItem,
    BlueprintShow
  },
  created () {
    this.selectModel(this.id)
  },
  methods: mapActions({
    selectModel: 'generator/selectModel'
  }),
  computed: {
    compiledMarkdown () {
      return marked(this.model.readme, { sanitize: true })
    },
    ...mapGetters({
      model: 'generator/selectedModel'
    })
  }
}
</script>
