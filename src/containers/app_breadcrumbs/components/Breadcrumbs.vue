<template>
  <ol class="breadcrumb bg-dark text-light border-light">
    <li class="breadcrumb-item" v-for="crumb in collection">
      <a :href="crumb.href" v-if="crumb.href">{{ crumb.text }}</a>
      <span v-else>{{ crumb.text }}</span>
    </li>
  </ol>
</template>

<script>
export default {
  props: ['collection'],
  methods: {
    className (crumb) {
      let css = 'breadcrumb-item'
      if (!crumb.href) css += ' active'
      return css
    }
  }
}
</script>

<style lang="sass">
  ol.breadcrumb
    border-radius: 0
    border-top: 1px solid
    border-bottom: 1px solid
</style>

