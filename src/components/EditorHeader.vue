<template>
  <div class="row">
    <div class="col-lg-12">
      <p class="lead mb-0">{{ title }}</p>
      <small class="text-muted">{{ help }}</small>
      <MoreInfoLink :url="url"/>
    </div>
    <div class="col-lg-12">
      <hr>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import MoreInfoLink from '@/components/MoreInfoLink'

export default {
  props: ['title', 'help', 'url'],
  components: {
    MoreInfoLink
  }
}
</script>


