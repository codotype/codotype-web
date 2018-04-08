<template>
  <div class="row">

    <div class="col-lg-12">
      <p class="lead mb-0">Properties</p>
    </div>

    <div class="col-lg-6 col-sm-12">
      <div class="form-group">
        <label>
          Label
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted">Example: 'Last Name'<br>The human-readable name for this attribute.</small>
        <input type="text" class="form-control" placeholder="Label" v-model="model.label" >
      </div>
    </div>

    <div class="col-lg-6 col-sm-12">
      <div class="form-group">
        <label>
          Field Name
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted">Example: 'last_name'<br>Lowercase, no spaces.</small>
        <input type="text" class="form-control" placeholder="Identifier" v-model="model.identifier" >
      </div>
    </div>

    <!-- TODO - keep this? -->
    <!-- <div class="form-group"> -->
      <!-- <label>Preferred Display Attribute</label> -->
      <!-- <small class="form-text text-muted">This attribute will be the user-facing label when entities belonging to this schema are referenced in a relation.</small> -->
      <!-- <input type="checkbox" class="form-control" v-model="model.preferred" > -->
    <!-- </div> -->

  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>
