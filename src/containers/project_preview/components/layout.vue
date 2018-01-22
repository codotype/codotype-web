
<template>
  <div class="row h-100">
    <div class="col-lg-12 h-100">
      <div class="card card-body bg-dark text-light border-light h-100">

        <div class="row mb-2">
          <div class="col-lg-12">
            <h2>{{ model.label }}</h2>
            <p class="lead">Preview</p>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-lg-12">
            <iframe class='w-100 h-100' src="http://localhost:8080/#/projects"></iframe>
          </div>
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


