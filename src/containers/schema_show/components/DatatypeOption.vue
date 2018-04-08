
<template>
  <button class='btn btn-sm btn-block text-left active' v-if="opt.value === val" @click="click(opt.value)">
    <i :class="'fa mr-2 ' + opt.icon"></i>
    {{opt.text}}
  </button>

  <button class='btn btn-sm btn-block text-left' v-else @click="click(opt.value)">
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
