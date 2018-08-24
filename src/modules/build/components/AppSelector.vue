<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select an App"
        help="Configure a build using a single App and multiple generators"
      />

      <hr>

      <p class="lead">
        <i class="fa fa-info-circle"></i>
        Apps encapsulate metadata about models, attributes, and associations that describe the app you're building
      </p>
      <ProjectList />
    </b-col>
  </b-row>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import ProjectList from '@/modules/project/components/ProjectList'

export default {
  components: {
    EditorHeader,
    ProjectList
  }
}
</script>
