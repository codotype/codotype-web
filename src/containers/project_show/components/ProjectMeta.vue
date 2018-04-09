<!-- TODO - rename this to META (?) -->
<template>
  <div class="row">
    <div class="col-lg-12">

      <div class="row d-flex align-items-center">
        <div class="col-lg-12">
          <h4>
            Meta
            <!-- {{ model.label }} -->
            <!-- <small class='text-muted'> -->
              <!-- <i class="fa fa-pencil"></i> -->
            <!-- </small> -->
          </h4>
        </div>
      </div>

      <div class="row d-flex align-items-center">
        <div class="col-lg-12">
          <p class="text-warning">TODO - abstract SubHeader into standalone component</p>
          <p class="text-warning">TODO - add form to edit basic app metadata</p>
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


