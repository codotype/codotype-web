<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select an App"
        help="Configure a build using a single App and multiple generators"
      />
      <hr>
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
