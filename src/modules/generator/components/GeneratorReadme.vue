<template>
  <b-tab
    button-id="build-readme-nav"
    title="README.md"
    active
    class='card-body bg-white border border-top-0'
    v-html="compiledMarkdown"
  />
</template>

<!-- // // // //  -->

<script>
import marked from 'marked'

export default {
  props: ['model'],
  computed: {
    compiledMarkdown () {
      return marked(this.model.readme, { sanitize: true })
    }
  }
}
</script>
