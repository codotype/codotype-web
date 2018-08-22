<template>
  <div class="row">

    <div class="col-lg-12">
      <p class="lead mb-0">Model Options</p>
      <small class="text-muted">Model Options expose an additional layer of configuration for individual generators.</small>
      <MoreInfoLink url="https://github.com/codotype"/>
      <hr>
    </div>

    <div class="col-lg-12">
      <button class="btn btn-outline-primary">New Option</button>
      <!-- <AddonAttributeList :collection="collection" /> -->
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MoreInfoLink from '@/components/MoreInfoLink'
// import AddonAttributeList from './AddonAttributeList'

export default {
  components: {
    MoreInfoLink
    // AddonAttributeList
  },
  computed: mapGetters({
    collection: 'addon/collection'
  })
}
</script>
