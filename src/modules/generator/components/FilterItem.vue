<template>
  <li :class="className" @click="toggleFilter()">
    <span>{{ tag.label }}</span>

    <toggle-button
      :value="value"
      :sync="true"
      ref="toggle"
      :color="'#4582EC'"
      class='mb-0'
    />

  </li>
</template>

<script>
export default {
  props: ['tag', 'value'],
  methods: {
    toggleFilter () {
      this.updateModel(!this.tag.value)
    },
    updateModel (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    className () {
      let css = ['list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center']
      if (this.tag.selected) css.push('list-group-item-primary')
      return css.join(' ')
    }
  }
}
</script>

<style scoped>
  li.list-group-item {
    font-size: 0.8rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
</style>
