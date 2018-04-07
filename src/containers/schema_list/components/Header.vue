
<template>
  <div class="row">
    <div class="col-lg-6">
      <p class="lead mb-0">
        Schemas
      </p>
    </div>
    <div class="col-lg-6 text-right">
      <a class="btn btn-outline-primary" :href="'#/projects/' + model._id + '/schemas/new' ">
        <i class="fa fa-fw fa-plus mr-2"></i>
        New Schema
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>
