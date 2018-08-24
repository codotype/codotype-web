<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select an App"
        help="Select an app to generate your app around"
      />

      <hr>

      <p class="lead">
        <i class="fa fa-info-circle"></i>
        Apps encapsulate metadata about models, attributes, and associations that describe the app you're building
      </p>

      <b-card-group deck>
        <AppCard v-for="app in appCollection" v-bind:key="app._id" :model="app"/>
      </b-card-group>

    </b-col>
  </b-row>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import AppCard from '@/modules/project/components/AppCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    EditorHeader,
    AppCard
  },
  created () {
    this.clearSelectedApp()
  },
  computed: mapGetters({
    appCollection: 'project/collection'
  }),
  methods: mapActions({
    clearSelectedApp: 'project/clearSelected'
  })
}
</script>
