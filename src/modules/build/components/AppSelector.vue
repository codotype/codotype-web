<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select an App"
        help="Configure a build using a single App and multiple generators"
      />

      <hr>

      <pre>{{selectedAppModel}}</pre>

      <p class="lead">
        <i class="fa fa-info-circle"></i>
        Apps encapsulate metadata about models, attributes, and associations that describe the app you're building
      </p>

      <ul class="list-group">
        <li class="list-group-item list-group-item-action" v-for="app in appCollection" v-bind:key="app._id" @click="selectApp(app._id)">
          {{ app.label}}
        </li>
      </ul>

    </b-col>
  </b-row>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    EditorHeader
  },
  created () {
    this.clearSelectedApp()
  },
  computed: mapGetters({
    appCollection: 'project/collection',
    selectedAppModel: 'project/selectedModel'
  }),
  methods: mapActions({
    selectApp: 'build/selectApp',
    clearSelectedApp: 'project/clearSelected'
  })
}
</script>
