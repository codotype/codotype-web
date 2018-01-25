
<template>
  <div class="row h-100">
    <div class="col-lg-12 h-100">
      <div class="card card-body bg-dark text-light border-success h-100">

        <div class="row mb-2">
          <div class="col-lg-12">
            <h2>{{ model.label }} Preview</h2>
          </div>
        </div>

        <hr>

        <div class="row mt-2 mb-4">
          <div class="col-lg-12">
            <a class="btn btn-outline-primary mr-2" :href="'#/projects/' + model._id + '/preview/' + s._id + '/records'" v-for="s in model.schemas">
              {{ s.label }}
            </a>
          </div>
        </div>


        <div class="row">
          <router-view/>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['model']
}
</script>


