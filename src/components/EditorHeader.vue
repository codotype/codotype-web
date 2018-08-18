<template>
  <div class="row">

    <div class="col-lg-7">
      <!-- <AppBreadcrumbs /> -->
      <h4 class="mb-0">
        {{ title || 'NO TITLE' }}
        <button class="btn btn-link">
          <i class="fa fa-pencil"></i>
        </button>
      </h4>
    </div>

    <div class="col-lg-5 d-flex align-items-center justify-content-end">
      <slot></slot>
    </div>

    <div class="col-lg-12" v-if='help'>
      <small class="form-text text-muted">{{ help }}</small>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import AppBreadcrumbs from '@/containers/app_breadcrumbs'
import MoreInfoLink from '@/components/MoreInfoLink'

export default {
  props: ['title', 'help'],
  components: {
    AppBreadcrumbs,
    MoreInfoLink
  },
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>


