
<template>

  <div class="row">
    <div class="col-lg-12">
      <ul class='list-group'>
        <SchemaChild v-for="schema in collection" :schema="schema" :key="schema._id" />
      </ul>
    </div>
  </div>

  <!-- <div class="row mt-2"> -->
    <!-- <div class="col-lg-12"> -->
      <!-- <a class="btn btn-block btn-outline-success" href="#/schemas/new"> -->
        <!-- <i class="fa fa-fw fa-plus mr-2"></i> -->
        <!-- New Schema -->
      <!-- </a> -->
    <!-- </div> -->
  <!-- </div> -->

</template>

<script>
import SchemaChild from './SchemaChild'

export default {
  props: ['collection'],
  components: {
    SchemaChild
  }
}
</script>
