<template>
  <div class="row d-flex align-items-center">

    <div class="col-lg-7">
      <h4 class="mb-0">
        {{ title || 'NO TITLE' }}
        <button class="btn btn-link py-0">
          <i class="fa fa-pencil"></i>
        </button>
      </h4>
    </div>

    <div class="col-lg-5 d-flex align-items-center justify-content-end">
      <slot></slot>
    </div>

    <div class="col-lg-12 pb-1" v-if='help'>
      <small class="text-muted">{{ help }}</small>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import MoreInfoLink from '@/components/MoreInfoLink'

export default {
  props: ['title', 'help'],
  components: {
    MoreInfoLink
  },
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>


