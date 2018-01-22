
<template>
  <div class="container h-100">
    <ProjectForm :model="model" :cancel="formCancel" :submit="formSubmit" />
  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectForm from '@/components/project/ProjectForm.vue'

export default {
  name: 'project_edit',
  components: {
    ProjectForm
  },
  metaInfo: {
    title: 'Project - Edit'
  },
  mounted () {
    return this.$store.commit('project/new')
  },
  methods: {
    formCancel () {
      return this.$store.commit('project/select_clear')
    },
    formSubmit () {
      return this.$store.dispatch('project/create', this.model)
    }
  },
  computed: {
    model () {
      return this.$store.getters['project/current']
    }
  }
}
</script>
