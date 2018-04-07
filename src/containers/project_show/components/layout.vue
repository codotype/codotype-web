
<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-body bg-blaze">

        <div class="row d-flex align-items-center">
          <div class="col-lg-6">
            <h2>
              {{ model.label }}
              <small class='text-muted'>
                <i class="fa fa-pencil"></i>
              </small>
            </h2>
          </div>
          <div class="col-lg-6 text-right">

            <a class='btn btn-sm btn-outline-success' v-bind:href="'#/projects/' + model._id + '/generate'">
              <i class="fa fa-cog mr-1"></i>
              Generate
            </a>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>


