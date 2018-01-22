
<template>
  <div class="container h-100">
    <ProjectForm :model="model" :cancel="formCancel" :submit="formSubmit" />
  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectForm from '@/components/project/ProjectForm.vue'

export default {
  name: 'project_new',
  components: {
    ProjectForm
  },
  metaInfo: {
    title: 'Project - New'
  },
  mounted () {
    return this.$store.commit('project/new')
  },
  computed: {
    model () {
      return this.$store.getters['project/current']
    }
  },
  methods: {
    formCancel () {
      return this.$store.commit('project/select_clear')
    },
    formSubmit () {
      return this.$store.dispatch('project/create', this.model)
    }
  }
}
</script>
