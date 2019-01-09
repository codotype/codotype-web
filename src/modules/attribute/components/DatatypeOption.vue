
<template>
  <div class="col-sm-6 pb-2">
    <button class='btn btn-outline-dark mt-2 btn-block text-left active' v-if="opt.value === val" @click="click(opt.value)">
      <i :class="'mr-2 ' + opt.icon"></i>
      {{opt.text}}
    </button>

    <button class='btn btn-outline-dark mt-2 btn-block text-left' v-else @click="click(opt.value)">
      <i :class="'mr-2 ' + opt.icon"></i>
      {{opt.text}}
    </button>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['opt', 'val', 'click']
}
</script>
