
<template>
  <div class='row'>
    <div v-for="m in collection" class='col-lg-2 mt-2'>
      <div class="card card-body bg-light">
        <a v-bind:href="'#/users/' + m._id">{{m.name}}</a>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['collection']
}
</script>
