<template>
  <div class="card card-body mb-2">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-title">{{ model.label }}</div>
      </div>
      <div class="col-lg-12">
        <small>{{ model.description }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneratorChild',
  props: ['model']
}
</script>
