<template>
  <div class="row">

    <div class="col-lg-8">
      <AppBreadcrumbs />
    </div>

    <div class="col-lg-4 d-flex align-items-center justify-content-end">
      <slot></slot>
    </div>

    <div class="col-lg-12">
      <small class="form-text text-muted">{{ help }}</small>
      <br>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import AppBreadcrumbs from '@/containers/app_breadcrumbs'

export default {
  props: ['help'],
  components: {
    AppBreadcrumbs
  },
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>


