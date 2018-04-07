
<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-body bg-blaze">

        <div class="row d-flex align-items-center">
          <div class="col-lg-12">
            <h2>
              {{ model.label }}
              <small class='text-muted'>
                <i class="fa fa-pencil"></i>
              </small>
            </h2>
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


