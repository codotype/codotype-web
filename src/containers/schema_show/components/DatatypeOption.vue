
<template>
  <button class='btn btn-sm btn-block text-left btn-outline-light active' v-if="opt.value === val" @click="setDatatype(opt.value)">
    <i :class="'fa mr-2 ' + opt.icon"></i>
    {{opt.text}}
  </button>

  <button class='btn btn-sm btn-block text-left btn-outline-light' v-else @click="click(opt.value)">
    <i :class="'fa mr-2 ' + opt.icon"></i>
    {{opt.text}}
  </button>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['opt', 'val', 'click']
}
</script>
