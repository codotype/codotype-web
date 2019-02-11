<template>
  <b-row>
    <b-col lg=12>
      <GeneratorStart :model="model" v-if="$store.getters['editor/about/showing']"/>

      <BuildSteps v-else>
        <template slot="step-1">
          <ProjectForm />
        </template>

        <template slot="step-2">
          <BlueprintEditor />
        </template>

        <template slot="step-3">
          <ConfigureGenerator :id="id" />
        </template>

        <template slot="step-4">
          <LoadingBuild />
        </template>
      </BuildSteps>

    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingBuild from '@codotype/ui/src/modules/build/components/LoadingBuild'
import GeneratorStart from '@/modules/generator/components/GeneratorStart'
import BuildSteps from '@codotype/ui/src/modules/build/components/BuildSteps'
import ProjectForm from '@codotype/ui/src/components/BlueprintEditor/components/project/ProjectForm'
import BlueprintEditor from '@codotype/ui/src/components/BlueprintEditor'
import ConfigureGenerator from '../components/ConfigureGenerator'

export default {
  name: 'GeneratorShow',
  props: ['id'],
  components: {
    LoadingBuild,
    BuildSteps,
    ProjectForm,
    GeneratorStart,
    ConfigureGenerator,
    BlueprintEditor
  },
  metaInfo () {
    return {
      title: this.model.label
    }
  },
  created () {
    // this.$store.dispatch('editor/reset')
    this.selectModel(this.id)
    this.$store.dispatch('build/steps/reset')
    this.$store.commit('editor/about/showing', false)
  },
  methods: mapActions({
    selectModel: 'generator/selectModel'
  }),
  computed: mapGetters({
    model: 'generator/selectedModel'
  })
}
</script>
