<template>
  <li :class="className">
    <span>{{ tag.label }}</span>
    <FormInput v-model="tag.selected" type="BOOL" />
  </li>
</template>

<script>
import FormInput from '@codotype/ui/src/components/FormInput'
export default {
  props: ['tag'],
  components: {
    FormInput
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
