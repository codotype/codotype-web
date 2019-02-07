<template>
  <b-row>
    <b-col lg=12>

      <!-- <b-button variant="outline-secondary" @click="decrementStep()">Prev</b-button> -->
      <!-- <b-button variant="outline-secondary" @click="incrementStep()">Next</b-button> -->

      <!-- <horizontal-stepper :steps="demoSteps" /> -->

      <BuildSteps>

        <template slot="step-1">
          <GeneratorStart :model="model" />
        </template>

        <template slot="step-2">
          <!-- <BlueprintShow class="mt-2"/> -->
          <BlueprintEditor />
        </template>

        <template slot="step-3">

          <b-tabs class='mt-3' v-model="currentStep" card>
            <!-- Generator Option Groups -->
            <b-tab
              lazy
              class='card-body bg-white border border-top-0 pt-0'
              :title="group.label"
              v-for="group in model.option_groups"
              :key="group.identifier"
            >
              <br>

              <!-- <EditorHeader
                :title="group.label"
                help="Configure global options for this generator"
                url="https://codotype.github.io"
              /> -->

              <!-- <div class="card card-body mt-2" v-for="attr in group.options"> -->

              <template v-if="group.type === 'OPTION_GROUP_TYPE_BOOLEAN_GROUP'">
                <div class="mt-2" v-for="attr in group.attributes">
                  <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/>
                </div>

                <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!group.attributes[0]">
                  <p class="lead mb-0">No options exposed by this generator</p>
                </div>
              </template>

              <template v-if="group.type === 'OPTION_GROUP_TYPE_MODEL_ADDON'">
                <b-row>
                  <b-col lg=3>
                    <ul class="list-group">
                      <li
                        v-for="schema in schemas"
                        :class='selectedSchemaId === schema.identifier ? "list-group-item active" : "list-group-item" '
                        @click="selectedSchemaId = schema.identifier"
                      >
                        {{ schema.label }}
                      </li>
                    </ul>
                  </b-col>
                  <b-col lg=9>
                    <b-card>

                      <!-- Header - "User API Actions" -->
                      <p class="lead mb-0">
                        {{ schemas.find(s => s.identifier === selectedSchemaId).label }} {{ group.label_plural }}
                      </p>

                      <!-- Header - Description -->
                      <small class="text-muted">{{group.description}}</small>


                      <!-- Define new instance -->
                      <hr>
                      <small class="text-muted">New {{group.label}}</small>

                      <OptionFormItem
                        v-for="attr in group.attributes"
                        :model="attr"
                        v-model="newAddon[attr.identifier]"
                      />

                      <b-button @click="createAddonInstance(group)">Create {{ group.label }}</b-button>

                      <!-- View existing instance data -->
                      <hr>

                      <ul class='list-group'>
                        <li
                          class="list-group-item d-flex justify-content-between align-items-center"
                          v-for="instance in configurationObject[group.identifier_plural][selectedSchemaId]"
                          :key="instance.id"
                        >
                          {{ group.attributes[0].label }}:{{ instance[group.attributes[0].identifier] }}

                          <span>
                            <b-button @click="editInstance(group, instance)" size="sm" variant="outline-warning">
                              <i class="fa fa-edit"></i>
                            </b-button>
                            <b-button @click="destroyInstance(group, instance)" size="sm" variant="outline-danger">
                              <i class="fa fa-trash"></i>
                            </b-button>
                          </span>

                        </li>
                        <li
                          class="list-group-item list-group-item-warning"
                          v-if="!configurationObject[group.identifier_plural][selectedSchemaId][0]"
                        >
                          No addons available
                        </li>
                      </ul>

                    </b-card>
                  </b-col>
                </b-row>

                <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!group.attributes[0]">
                  <p class="lead mb-0">No options exposed by this generator</p>
                </div>
              </template>

              <!-- TODO - ABSTRACT INTO SEPARATE COMPONENT -->
              <template v-if="group.type === 'OPTION_GROUP_TYPE_MODEL_OPTION'">
                <b-row>
                  <b-col lg=3>
                    <ul class="list-group">
                      <li
                        v-for="schema in schemas"
                        :class='selectedSchemaId === schema.identifier ? "list-group-item active" : "list-group-item" '
                        @click="selectedSchemaId = schema.identifier"
                      >
                        {{ schema.label }}
                      </li>
                    </ul>
                  </b-col>
                  <b-col lg=9>

                    <!-- Header - "User API Actions" -->
                    <p class="lead mb-0">
                      {{ schemas.find(s => s.identifier === selectedSchemaId).label }} {{ group.label_plural }}
                    </p>

                    <!-- Header - Description -->
                    <small class="text-muted">{{group.description}}</small>


                    <!-- Define new instance -->
                    <div class="card card-body mt-2" v-for="attr in group.attributes">
                      <OptionFormItem
                        :model="attr"
                        v-model="configurationObject[group.identifier_plural][selectedSchemaId][attr.identifier]"
                      />
                    </div>

                  </b-col>
                </b-row>

                <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!group.attributes[0]">
                  <p class="lead mb-0">No options exposed by this generator</p>
                </div>
              </template>

            </b-tab>

          </b-tabs>
        </template>

      </BuildSteps>


        <!-- START TAB -->
        <!-- <b-tab
          lazy
          button-id="build-start-nav"
          title="Start"
          active
          class='card-body bg-white border border-top-0'
        > -->
          <!-- <GeneratorStart :model="model" :incrementStep="incrementStep"/> -->
        <!-- </b-tab> -->

        <!-- GLOBAL OPTIONS -->
        <!-- <b-tab
          lazy
          title="Global Options"
          v-if="model.global_options[0]"
          button-id="build-global-options-nav"
          class='card-body bg-white border border-top-0'
        > -->
          <!-- <br> -->

          <!-- <EditorHeader
            title="Global Options"
            help="Configure global options for this generator"
            url="https://codotype.github.io"
          /> -->

          <!-- <div class="card card-body mt-2" v-for="attr in model.global_options"> -->
            <!-- <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/> -->
          <!-- </div> -->

          <!-- <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!model.global_options[0]"> -->
            <!-- <p class="lead mb-0">No global options exposed by this generator</p> -->
          <!-- </div> -->

        <!-- </b-tab> -->
        <!-- GLOBAL OPTIONS -->

        <!-- <b-tab
          lazy
          button-id="build-readme-nav"
          title="README.md"
          class='card-body bg-white border border-top-0'
          v-html="compiledMarkdown"
        /> -->

        <!-- ModelOptions -->
        <!-- <b-tab
          lazy
          title="Model Options"
          v-if="model.model_options[0]"
          button-id="build-model-options-nav"
        > -->
          <!-- <br> -->
          <!-- <GeneratorModelOptions/> -->
        <!-- </b-tab> -->

    </b-col>
  </b-row>
</template>

<script>
import marked from 'marked'
import { mapGetters, mapActions } from 'vuex'
import buildConfiguration from '@codotype/util/lib/buildConfiguration'
import BlueprintShow from '@/modules/blueprint/pages/show'
import GeneratorStart from '@/modules/generator/components/GeneratorStart'
import OptionFormItem from '@/modules/option/components/OptionFormItem'
import GeneratorModelOptions from '@/modules/build/components/GeneratorModelOptions'
import BuildSteps from '@/modules/build/components/BuildSteps'
import BlueprintEditor from '@codotype/ui/src/components/BlueprintEditor'

export default {
  name: 'GeneratorShow',
  props: ['id'],
  data () {
    // Pulls the schemas to define the build configuration
    const schemas = this.$store.getters['editor/schema/collection/items']
    const generator = this.$store.getters['generator/collection'].find(g => g.id === this.id)

    // Produces the generator configurationObject
    const configurationObject = buildConfiguration({ schemas, generator })
    const selectedSchemaId = schemas[0].identifier

    return {
      configurationObject: configurationObject,
      currentStep: 0,
      schemas,
      newAddon: {}, // TODO - this should be produced somewhere
      selectedSchemaId: selectedSchemaId
    }
  },
  components: {
    BuildSteps,
    OptionFormItem,
    BlueprintShow,
    GeneratorStart,
    GeneratorModelOptions,
    BlueprintEditor
  },
  created () {
    this.selectModel(this.id)
  },
  methods: {
    ...mapActions({
      selectModel: 'generator/selectModel'
    }),
    decrementStep () {
      this.currentStep = Math.max(this.currentStep - 1, 0)
    },
    incrementStep () {
      this.currentStep = Math.min(this.currentStep + 1, 2 + this.model.option_groups.length)
    },
    createAddonInstance (group) {
      this.newAddon.id = Math.random().toString()
      this.configurationObject[group.identifier_plural][this.selectedSchemaId].push(this.newAddon)
      this.newAddon = {}
    },
    destroyInstance (group, instance) {
      const filtered = this.configurationObject[group.identifier_plural][this.selectedSchemaId].filter(e => e.id !== instance.id)
      this.configurationObject[group.identifier_plural][this.selectedSchemaId] = filtered
    }
  },
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
