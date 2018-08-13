<template>
  <b-nav vertical pills>
    <b-nav-item :href="t.href" v-for='t in tabs' :key="t.path" :active="isSelected(t)">
      {{ t.label }}
    </b-nav-item>

    <!-- <b-nav-item disabled>Environment</b-nav-item> -->
    <!-- <b-nav-item disabled>Features</b-nav-item> -->

    <!-- <b-nav-item disabled>Models</b-nav-item> -->
    <!-- <b-nav-item v-for="m in models" :key="m._id" :href="`#/projects/${projectId}/schemas/${m._id}`"> -->
      <!-- {{ m.label }} -->
    <!-- </b-nav-item> -->
  </b-nav>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    project: 'project/selectedModel'
  }),
  methods: {
    isSelected (tab) {
      return this.$route.path.indexOf(tab.path) > -1
    }
  },
  data () {
    const projectId = this.$store.getters['project/selectedModel']._id
    // const models = this.$store.getters['schema/collection']
    return {
      selectedTab: 'Models',
      // models: models,
      // projectId: projectId,
      tabs: [
        { path: 'meta', label: 'Meta', href: `#/projects/${projectId}/meta` },
        { path: 'schemas', label: 'Models', href: `#/projects/${projectId}/schemas` },
        { path: 'seeds', label: 'Seed Data', href: `#/projects/${projectId}/seeds` },
        { path: 'export', label: 'Export', href: `#/projects/${projectId}/export` }
        // { path: 'pages', label: 'Pages', href: `#/projects/${projectId}/pages` },
        // { path: 'auth', label: 'Authorization', href: `#/projects/${projectId}/auth` }
      ]
    }
  }
}
</script>


