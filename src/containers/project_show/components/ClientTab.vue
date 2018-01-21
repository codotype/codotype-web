
<template>
  <div class="row mt-4">

    <div class="col-lg-12">
      <TabHeader title="Client" />
    </div>

    <div class="col-lg-12">
      <p class="lead">TODO - integrate Client editor</p>
      <p class="lead">Framework</p>
      <p class="lead">Language</p>
      <p class="lead">Build Tools</p>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import TabHeader from '@/components/TabHeader'

export default {
  props: ['model'],
  components: {
    TabHeader
  }
}
</script>
